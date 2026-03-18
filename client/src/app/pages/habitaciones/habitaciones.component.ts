import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { RoomsService, Habitacion } from '../../services/rooms.service';
import { RoomCreateDialogComponent } from './room-create-dialog.component';

@Component({
  selector: 'app-habitaciones',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './habitaciones.component.html',
  styleUrl: './habitaciones.component.scss',
})
export class HabitacionesComponent implements OnInit {
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
  ];

  constructor(
    private dialog: MatDialog,
    private roomsService: RoomsService
  ) {}

  ngOnInit(): void {
    this.loadRooms();
  }

  private loadRooms(): void {
    this.loading = true;
    this.errorMessage = '';

    this.roomsService.getRooms().subscribe({
      next: (rooms) => {
        this.dataSource.data = rooms;
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

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(RoomCreateDialogComponent, {
      width: '720px',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res) this.loadRooms();
    });
  }
}
