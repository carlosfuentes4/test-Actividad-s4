import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialog } from '@angular/material/dialog';

import { RoomsService, Habitacion } from '../../services/rooms.service';
import { UsersService, UsuarioMini } from '../../services/users.service';
import {
  ReservationsService,
  Reservacion,
} from '../../services/reservations.service';
import { ReservationCreateDialogComponent } from './reservation-create-dialog.component';

@Component({
  selector: 'app-reservar',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './reservar.component.html',
  styleUrl: './reservar.component.scss',
})
export class ReservarComponent implements OnInit {
  loading = false;
  errorMessage = '';

  dataSource = new MatTableDataSource<Reservacion>([]);
  displayedColumns: string[] = [
    'idReservacion',
    'habitacion',
    'huesped',
    'fechaEntrada',
    'fechaSalida',
    'estado',
    'numeroHuespedes',
    'montoTotal',
    'pagoConfirmado',
    'solicitudesEspeciales',
  ];

  rooms: Habitacion[] = [];
  users: UsuarioMini[] = [];

  constructor(
    private dialog: MatDialog,
    private roomsService: RoomsService,
    private usersService: UsersService,
    private reservationsService: ReservationsService
  ) {}

  ngOnInit(): void {
    this.load();
  }

  private load(): void {
    this.loading = true;
    this.errorMessage = '';

    // Cargamos en paralelo (y refrescamos tabla cuando terminen).
    let roomsLoaded = false;
    let usersLoaded = false;
    let reservationsLoaded = false;

    this.roomsService.getRooms().subscribe({
      next: (r) => {
        this.rooms = r;
        roomsLoaded = true;
        if (reservationsLoaded && usersLoaded) this.loading = false;
      },
      error: () => {
        roomsLoaded = true;
        if (reservationsLoaded && usersLoaded) this.loading = false;
      },
    });

    this.usersService.getUsers().subscribe({
      next: (u) => {
        this.users = u;
        usersLoaded = true;
        if (reservationsLoaded && roomsLoaded) this.loading = false;
      },
      error: () => {
        usersLoaded = true;
        if (reservationsLoaded && roomsLoaded) this.loading = false;
      },
    });

    this.reservationsService.getReservations().subscribe({
      next: (reservations) => {
        this.dataSource.data = reservations;
        reservationsLoaded = true;
        if (roomsLoaded && usersLoaded) this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.errorMessage =
          err?.error?.message ?? 'No se pudieron cargar las reservaciones.';
      },
    });
  }

  estadoLabel(estado: number): string {
    switch (estado) {
      case 0:
        return 'Pendiente';
      case 1:
        return 'Confirmado';
      case 2:
        return 'En proceso';
      case 3:
        return 'Completado';
      case 4:
        return 'Cancelado';
      case 5:
        return 'Ausente';
      default:
        return String(estado);
    }
  }

  roomLabel(roomId: string): string {
    const r = this.rooms.find((x) => x.idHabitacion === roomId);
    return r ? `${r.numeroHabitacion} (${r.tipoHabitacion})` : roomId;
  }

  userLabel(userId: string): string {
    const u = this.users.find((x) => x.idUser === userId);
    return u ? `${u.nombreCompleto}` : userId;
  }

  formatDate(value: string | undefined): string {
    if (!value) return '';
    const d = new Date(value);
    return isNaN(d.getTime()) ? value : d.toLocaleString();
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(ReservationCreateDialogComponent, {
      width: '900px',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res) this.load();
    });
  }
}
