import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatCardModule],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Dashboard</mat-card-title>
        <mat-card-subtitle>Vista general del sistema</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
        <p>Contenido del panel principal (total habitaciones, noches reservadas, ocupación, ingresos).</p>
      </mat-card-content>
    </mat-card>
  `,
  styles: [],
})
export class DashboardComponent {}
