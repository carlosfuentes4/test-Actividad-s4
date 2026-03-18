import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Reservacion {
  idReservacion: string;
  idHabitacion: string;
  idHuesped: string;
  fechaEntrada: string; // DateTime serializado
  fechaSalida: string;
  estado: number; // ReservationStatus
  numeroHuespedes: number;
  montoTotal: number;
  moneda: string;
  pagoConfirmado: boolean;
  solicitudesEspeciales?: string | null;
  fechaCreacion?: string;
  fechaActualizacion?: string | null;
  actualizadoPor?: string | null;
}

export interface ReservacionCrearRequest {
  idReservacion?: string;
  idHabitacion: string;
  idHuesped: string;
  fechaEntrada: string; // ISO
  fechaSalida: string; // ISO
  estado: number;
  numeroHuespedes: number;
  montoTotal: number;
  moneda: string;
  pagoConfirmado: boolean;
  solicitudesEspeciales?: string;
}

export interface CreateReservationResponse {
  message: string;
  id: string;
}

@Injectable({ providedIn: 'root' })
export class ReservationsService {
  private readonly apiUrl = `${environment.apiUrl}/reservations`;
  private readonly storageKey = 'probook_user';

  constructor(private http: HttpClient) {}

  getReservations(): Observable<Reservacion[]> {
    const token = this.getToken();
    const headers = token ? new HttpHeaders({ Authorization: `Bearer ${token}` }) : undefined;
    return this.http.get<Reservacion[]>(this.apiUrl, { headers });
  }

  createReservation(payload: ReservacionCrearRequest): Observable<CreateReservationResponse> {
    const token = this.getToken();
    const headers = token ? new HttpHeaders({ Authorization: `Bearer ${token}` }) : undefined;
    return this.http.post<CreateReservationResponse>(this.apiUrl, payload, { headers });
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

