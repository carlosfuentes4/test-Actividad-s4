import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, MatCardModule, MatButtonModule],
  template: `
    <div class="register-page">
      <mat-card class="register-card">
        <mat-card-header>
          <mat-card-title>Registro</mat-card-title>
          <mat-card-subtitle>Próximamente: registro de huésped por defecto</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <a mat-button routerLink="/login">Volver al login</a>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .register-page { min-height: 100vh; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #1a237e 0%, #3949ab 100%); padding: 1rem; }
    .register-card { max-width: 400px; width: 100%; }
  `],
})
export class RegisterComponent {}
