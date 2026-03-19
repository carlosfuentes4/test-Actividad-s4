import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialog } from '@angular/material/dialog';

import { RoomsService, Habitacion } from '../../services/rooms.service';
import { AuthService } from '../../services/auth.service';
import { ReservationCreateDialogComponent } from '../reservar/reservation-create-dialog.component';

const ESTADO_DISPONIBLE = 0;

@Component({
  selector: 'app-reservar-habitacion',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './reservar-habitacion.component.html',
  styleUrl: './reservar-habitacion.component.scss',
})
export class ReservarHabitacionComponent implements OnInit {
  loading = false;
  errorMessage = '';

  dataSource = new MatTableDataSource<Habitacion>([]);
  displayedColumns: string[] = [
    'numeroHabitacion',
    'tipoHabitacion',
    'capacidad',
    'precioPorNoche',
    'estado',
    'descripcion',
    'acciones',
  ];

  constructor(
    private dialog: MatDialog,
    private roomsService: RoomsService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadRooms();
  }

  private loadRooms(): void {
    this.loading = true;
    this.errorMessage = '';

    this.roomsService.getRooms().subscribe({
      next: (rooms) => {
        const disponibles = rooms.filter((r) => Number(r.estado) === ESTADO_DISPONIBLE);
        this.dataSource.data = disponibles;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.errorMessage =
          err?.error?.message ?? 'No se pudieron cargar las habitaciones.';
      },
    });
  }

  estadoLabel(estado: number): string {
    switch (estado) {
      case 0:
        return 'Disponible';
      case 1:
        return 'Ocupado';
      case 2:
        return 'En mantenimiento';
      case 3:
        return 'Reservado';
      default:
        return String(estado);
    }
  }

  openReservarDialog(room: Habitacion): void {
    const user = this.authService.currentUser();
    if (!user) {
      this.errorMessage = 'Debes iniciar sesión para reservar.';
      return;
    }

    const dialogRef = this.dialog.open(ReservationCreateDialogComponent, {
      width: '900px',
      disableClose: true,
      data: { room, guest: user },
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res) this.loadRooms();
    });
  }
}
