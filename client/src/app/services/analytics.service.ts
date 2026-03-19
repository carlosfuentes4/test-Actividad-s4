import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface AnalyticsPorEstado {
  estado: string;
  cantidad: number;
}

export interface OcupacionPorTipo {
  tipoHabitacion: string;
  ocupadas: number;
  disponibles: number;
}

export interface TendenciaMensual {
  mes: string;
  reservas: number;
  ingresos: number;
}

export interface AnalyticsDto {
  totalReservas: number;
  reservasActivas: number;
  reservasCanceladas: number;
  reservasCompletadas: number;
  ingresosTotales: number;
  ingresosMes: number;
  totalHabitaciones: number;
  habitacionesOcupadas: number;
  porcentajeOcupacion: number;
  reservasPorEstado: AnalyticsPorEstado[];
  ocupacionPorTipo: OcupacionPorTipo[];
  tendenciaMensual: TendenciaMensual[];
}

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  private readonly apiUrl = `${environment.apiUrl}/analytics`;
  private readonly storageKey = 'probook_user';

  constructor(private http: HttpClient) {}

  getAnalytics(): Observable<AnalyticsDto> {
    const token = this.getToken();
    const headers = token ? new HttpHeaders({ Authorization: `Bearer ${token}` }) : undefined;
    return this.http.get<AnalyticsDto>(this.apiUrl, { headers });
  }

  private getToken(): string | null {
    const stored = localStorage.getItem(this.storageKey);
    if (!stored) return null;

    try {
      const user = JSON.parse(stored) as any | null;
      const rawToken: unknown = user?.token ?? user?.Token;
      if (typeof rawToken !== 'string') return null;

      let token = rawToken.trim();
      if (token.startsWith('Bearer ')) token = token.slice('Bearer '.length).trim();

      return token || null;
    } catch {
      return null;
    }
  }
}

