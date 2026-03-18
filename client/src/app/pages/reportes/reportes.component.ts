import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [MatCardModule],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Reportes</mat-card-title>
        <mat-card-subtitle>Gráficos y tabla de ocupación e ingresos</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
        <p>ReportsComponent: barras, circular, tendencia temporal, tabla.</p>
      </mat-card-content>
    </mat-card>
  `,
  styles: [],
})
export class ReportesComponent {}
