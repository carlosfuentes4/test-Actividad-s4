import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AnalyticsService, AnalyticsDto } from '../../services/analytics.service';

@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatProgressSpinnerModule],
  templateUrl: './reportes.component.html',
  styleUrl: './reportes.component.scss',
})
export class ReportesComponent implements OnInit {
  loading = false;
  errorMessage = '';
  analytics: AnalyticsDto | null = null;

  constructor(private analyticsService: AnalyticsService) {}

  ngOnInit(): void {
    this.loadAnalytics();
  }

  private loadAnalytics(): void {
    this.loading = true;
    this.errorMessage = '';

    this.analyticsService.getAnalytics().subscribe({
      next: (res) => {
        this.analytics = res;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.errorMessage =
          err?.error?.message ?? err?.message ?? 'No se pudieron cargar los reportes.';
      },
    });
  }

  get maxIngresosMes(): number {
    const items = this.analytics?.tendenciaMensual ?? [];
    return Math.max(0, ...items.map((x) => Number(x.ingresos ?? 0)));
  }

  formatMoney(value: number): string {
    // Evitar dependencias extra; esto es solo presentación.
    return `${Math.round(value)}`;
  }
}
