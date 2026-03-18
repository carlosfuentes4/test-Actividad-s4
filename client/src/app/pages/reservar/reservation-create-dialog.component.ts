import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { RoomsService, Habitacion } from '../../services/rooms.service';
import { UsersService, UsuarioMini } from '../../services/users.service';
import { ReservationsService } from '../../services/reservations.service';

type EstadoReserva = 0 | 1 | 2 | 3 | 4 | 5;

@Component({
  standalone: true,
  selector: 'app-reservation-create-dialog',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatCheckboxModule,
  ],
  providers: [
    // Mostrar fechas en el input con el formato requerido por el proyecto.
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
    {
      provide: MAT_DATE_FORMATS,
      useValue: {
        parse: {
          dateInput: 'dd/MM/yyyy',
        },
        display: {
          dateInput: 'dd/MM/yyyy',
          monthYearLabel: 'MMM yyyy',
          dateA11y: 'dd/MM/yyyy',
          monthYearA11y: 'MMMM yyyy',
        },
      },
    },
  ],
  templateUrl: './reservation-create-dialog.component.html',
  styleUrl: './reservation-create-dialog.component.scss',
})
export class ReservationCreateDialogComponent {
  loading = false;
  errorMessage = '';

  rooms: Habitacion[] = [];
  users: UsuarioMini[] = [];

  // Mapeo igual al enum ReservationStatus del backend.
  estados: { value: EstadoReserva; label: string }[] = [
    { value: 0, label: 'Pendiente' },
    { value: 1, label: 'Confirmado' },
    { value: 2, label: 'En proceso' },
    { value: 3, label: 'Completado' },
    { value: 4, label: 'Cancelado' },
    { value: 5, label: 'Ausente' },
  ];

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ReservationCreateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: unknown,
    private roomsService: RoomsService,
    private usersService: UsersService,
    private reservationsService: ReservationsService
  ) {
    const today = new Date();
    const entradaDefault = this.startOfDay(today);
    const salidaDefault = this.endOfDay(today);

    this.form = this.fb.group({
      idReservacion: [''],
      idHabitacion: ['', [Validators.required]],
      idHuesped: ['', [Validators.required]],
      fechaEntrada: [entradaDefault, [Validators.required]],
      fechaSalida: [salidaDefault, [Validators.required]],
      estado: [0 as EstadoReserva, [Validators.required]],
      numeroHuespedes: [1, [Validators.required, Validators.min(1)]],
      montoTotal: [0, [Validators.required, Validators.min(0)]],
      moneda: ['HNL', [Validators.required]],
      pagoConfirmado: [false],
      solicitudesEspeciales: [''],
    });

    this.initSelects();
  }

  private initSelects(): void {
    // Cargamos ambos selects al abrir el modal.
    this.roomsService.getRooms().subscribe({
      next: (rooms) => {
        this.rooms = rooms;
      },
      error: () => {
        // Si falla, se verá vacío y la API regresará error al crear.
      },
    });

    this.usersService.getUsers().subscribe({
      next: (users) => {
        // Invitado = huésped (por seguridad convertimos a number).
        this.users = users.filter((u) => Number(u.rol) === 1);
      },
      error: () => {
        this.users = [];
      },
    });
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }

  private startOfDay(d: Date): Date {
    const x = new Date(d);
    x.setHours(0, 0, 0, 0);
    return x;
  }

  private endOfDay(d: Date): Date {
    const x = new Date(d);
    x.setHours(23, 59, 59, 999);
    return x;
  }

  onSubmit(): void {
    this.errorMessage = '';
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const raw = this.form.value as any;

    // Payload con nombres en camelCase (por namingPolicy del backend).
    const payload = {
      idReservacion: raw.idReservacion?.trim() || undefined,
      idHabitacion: raw.idHabitacion,
      idHuesped: raw.idHuesped,
      fechaEntrada: this.startOfDay(new Date(raw.fechaEntrada)).toISOString(),
      fechaSalida: this.endOfDay(new Date(raw.fechaSalida)).toISOString(),
      estado: Number(raw.estado),
      numeroHuespedes: Number(raw.numeroHuespedes),
      montoTotal: Number(raw.montoTotal),
      moneda: raw.moneda,
      pagoConfirmado: Boolean(raw.pagoConfirmado),
      solicitudesEspeciales: raw.solicitudesEspeciales || undefined,
    };

    this.loading = true;
    this.reservationsService.createReservation(payload).subscribe({
      next: (res) => {
        this.loading = false;
        this.dialogRef.close(res);
      },
      error: (err) => {
        this.loading = false;
        this.errorMessage =
          err?.error?.message ?? err?.message ?? 'No se pudo crear la reservación.';
      },
    });
  }
}

