import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Subscription } from 'rxjs';
import { RoomsService, Habitacion } from '../../services/rooms.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatProgressSpinnerModule],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Dashboard</mat-card-title>
        <mat-card-subtitle>Vista general del sistema</mat-card-subtitle>
      </mat-card-header>

      <mat-card-content>
        <div class="dashboard-grid">
          <mat-card class="half-card">
            <mat-card-header>
              <mat-card-title>Hora actual</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <div class="time-value">{{ formatTime(currentTime) }}</div>
              <div class="time-subtitle">Actualizado en tiempo real</div>
            </mat-card-content>
          </mat-card>

          <mat-card class="half-card">
            <mat-card-header>
              <mat-card-title>Habitación más económica</mat-card-title>
              <mat-card-subtitle>Disponible en el sistema</mat-card-subtitle>
            </mat-card-header>
            <mat-card-content>
              <div class="loading" *ngIf="roomsLoading">
                <mat-progress-spinner diameter="40" mode="indeterminate"></mat-progress-spinner>
              </div>

              <p class="error-msg" *ngIf="!roomsLoading && roomsError">{{ roomsError }}</p>

              <div class="room" *ngIf="!roomsLoading && !roomsError && cheapestRoom">
                <div class="room-price">{{ cheapestRoom.precioPorNoche }} HNL/noche</div>
                <div class="room-desc-title">Descripción</div>
                <div class="room-desc">{{ cheapestRoom.descripcion || 'Sin descripción' }}</div>
              </div>
            </mat-card-content>
          </mat-card>
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [
    `
      .dashboard-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 16px;
        align-items: stretch;
      }

      .half-card {
        width: 100%;
        min-width: 0;
      }

      .time-value {
        font-size: 34px;
        font-weight: 700;
        letter-spacing: 0.2px;
      }

      .time-subtitle {
        margin-top: 6px;
        opacity: 0.8;
        font-size: 12px;
      }

      .loading {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 18px 0;
      }

      .error-msg {
        color: #c62828;
        margin: 0;
      }

      .weather-temp {
        font-size: 34px;
        font-weight: 700;
      }

      .weather-row {
        display: flex;
        gap: 8px;
        margin-top: 6px;
      }

      .weather-label {
        opacity: 0.8;
        font-size: 13px;
      }

      .weather-value {
        font-size: 13px;
        font-weight: 500;
      }

      .weather-updated {
        margin-top: 10px;
        opacity: 0.8;
        font-size: 12px;
      }

      .room-price {
        font-size: 30px;
        font-weight: 700;
      }

      .room-desc-title {
        margin-top: 10px;
        opacity: 0.8;
        font-size: 13px;
      }

      .room-desc {
        margin-top: 4px;
        font-size: 13px;
        opacity: 0.95;
      }
    `,
  ],
})
export class DashboardComponent implements OnInit, OnDestroy {
  currentTime: Date = new Date();
  private clockTimer: number | null = null;

  roomsLoading = false;
  roomsError = '';
  cheapestRoom: Habitacion | null = null;

  private subs = new Subscription();

  constructor(private roomsService: RoomsService) {}

  ngOnInit(): void {
    this.clockTimer = window.setInterval(() => {
      this.currentTime = new Date();
    }, 1000);

    this.loadCheapestRoom();
  }

  ngOnDestroy(): void {
    if (this.clockTimer) window.clearInterval(this.clockTimer);
    this.subs.unsubscribe();
  }

  formatTime(d: Date): string {
    try {
      return d.toLocaleTimeString('es-HN', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    } catch {
      return d.toLocaleTimeString();
    }
  }

  private loadCheapestRoom(): void {
    this.roomsLoading = true;
    this.roomsError = '';
    this.cheapestRoom = null;

    // 0 = Disponible (según RoomStatus del backend)
    const DISPONIBLE = 0;

    this.subs.add(
      this.roomsService.getRooms().subscribe({
        next: (rooms) => {
          const disponibles = rooms.filter((r) => Number(r.estado) === DISPONIBLE);
          const pool = disponibles.length > 0 ? disponibles : rooms;

          const cheapest =
            pool
              .slice()
              .sort((a, b) => Number(a.precioPorNoche) - Number(b.precioPorNoche))[0] ?? null;

          this.cheapestRoom = cheapest;
          this.roomsLoading = false;
        },
        error: (err) => {
          this.roomsLoading = false;
          this.roomsError =
            err?.error?.message ?? err?.message ?? 'No se pudieron cargar las habitaciones.';
        },
      })
    );
  }
}
