import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-huespedes',
  standalone: true,
  imports: [MatCardModule],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Lista de huéspedes</mat-card-title>
        <mat-card-subtitle>Estado de reserva e información por habitación</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
        <p>GuestListComponent: huéspedes registrados y reservas.</p>
      </mat-card-content>
    </mat-card>
  `,
  styles: [],
})
export class HuespedesComponent {}
