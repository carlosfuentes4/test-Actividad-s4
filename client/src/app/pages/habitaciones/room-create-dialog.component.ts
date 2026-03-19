import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';

import { RoomsService, Habitacion } from '../../services/rooms.service';

export interface RoomCreateDialogData {
  room?: Habitacion;
}

type EstadoHabitacion = 0 | 1 | 2 | 3;

@Component({
  standalone: true,
  selector: 'app-room-create-dialog',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule,
  ],
  templateUrl: './room-create-dialog.component.html',
  styleUrl: './room-create-dialog.component.scss',
})
export class RoomCreateDialogComponent {
  form: FormGroup;
  loading = false;
  errorMessage = '';
  isEditMode = false;
  editRoomId: string | null = null;

  // Mapeo igual al enum RoomStatus del backend.
  estados: { value: EstadoHabitacion; label: string }[] = [
    { value: 0, label: 'Disponible' },
    { value: 1, label: 'Ocupado' },
    { value: 2, label: 'En mantenimiento' },
    { value: 3, label: 'Reservado' },
  ];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<RoomCreateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: RoomCreateDialogData | unknown,
    private roomsService: RoomsService
  ) {
    this.form = this.fb.group({
      idHabitacion: [''],
      numeroHabitacion: ['', [Validators.required, Validators.minLength(1)]],
      tipoHabitacion: ['', [Validators.required, Validators.minLength(1)]],
      capacidad: [2, [Validators.required, Validators.min(1)]],
      precioPorNoche: [0, [Validators.required, Validators.min(0)]],
      estado: [0 as EstadoHabitacion, [Validators.required]],
      descripcion: [''],
    });

    const payload = data && typeof data === 'object' && 'room' in data ? (data as RoomCreateDialogData).room : null;
    if (payload) {
      this.isEditMode = true;
      this.editRoomId = payload.idHabitacion;
      this.form.patchValue({
        idHabitacion: payload.idHabitacion,
        numeroHabitacion: payload.numeroHabitacion,
        tipoHabitacion: payload.tipoHabitacion,
        capacidad: payload.capacidad,
        precioPorNoche: payload.precioPorNoche,
        estado: payload.estado,
        descripcion: payload.descripcion ?? '',
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onSubmit(): void {
    this.errorMessage = '';
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;
    const raw = this.form.value as any;
    const payload = {
      numeroHabitacion: raw.numeroHabitacion,
      tipoHabitacion: raw.tipoHabitacion,
      capacidad: Number(raw.capacidad),
      precioPorNoche: Number(raw.precioPorNoche),
      estado: raw.estado,
      descripcion: raw.descripcion ?? '',
    };

    if (this.isEditMode && this.editRoomId) {
      this.roomsService.updateRoom(this.editRoomId, payload).subscribe({
        next: (res) => {
          this.loading = false;
          this.dialogRef.close(res);
        },
        error: (err) => {
          this.loading = false;
          this.errorMessage =
            err?.error?.message ?? err?.message ?? 'No se pudo actualizar la habitación.';
        },
      });
    } else {
      this.roomsService.createRoom(payload).subscribe({
        next: (res) => {
          this.loading = false;
          this.dialogRef.close(res);
        },
        error: (err) => {
          this.loading = false;
          this.errorMessage =
            err?.error?.message ?? err?.message ?? 'No se pudo crear la habitación.';
        },
      });
    }
  }
}

