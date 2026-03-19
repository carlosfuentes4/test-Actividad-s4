import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { UsersService, CreateUserPayload } from '../../services/users.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  form: FormGroup;
  loading = false;
  errorMessage = '';

  roles: { value: number; label: string }[] = [
    { value: 0, label: 'Manager' },
    { value: 1, label: 'Invitado' },
  ];
  estados: { value: boolean; label: string }[] = [
    { value: true, label: 'Activo' },
    { value: false, label: 'Inactivo' },
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private usersService: UsersService
  ) {
    this.form = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      contraseña: ['', [Validators.required, Validators.minLength(4)]],
      nombreCompleto: ['', [Validators.required, Validators.minLength(2)]],
      rol: [1, [Validators.required]], // Invitado por defecto
      telefono: [''],
      activo: [true, [Validators.required]],
    });
  }

  onSubmit(): void {
    this.errorMessage = '';
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const raw = this.form.value;
    const payload: CreateUserPayload = {
      correo: raw.correo.trim(),
      contraseña: raw.contraseña,
      nombreCompleto: raw.nombreCompleto.trim(),
      rol: Number(raw.rol),
      telefono: raw.telefono?.trim() || undefined,
      activo: Boolean(raw.activo),
    };

    this.loading = true;
    this.usersService.createUser(payload).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.loading = false;
        this.errorMessage =
          err?.error?.message ?? err?.message ?? 'No se pudo crear el usuario.';
      },
    });
  }
}
