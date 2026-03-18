import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Habitacion {
  idHabitacion: string;
  numeroHabitacion: string;
  tipoHabitacion: string;
  capacidad: number;
  precioPorNoche: number;
  estado: number; // RoomStatus (0-3)
  descripcion?: string;
  activo?: boolean;
  fechaCreacion?: string;
  fechaActualizacion?: string | null;
}

export interface HabitacionCrearRequest {
  // Opcional: si viene vacío, el backend genera un IdHabitacion (Guid).
  idHabitacion?: string;
  numeroHabitacion: string;
  tipoHabitacion: string;
  capacidad: number;
  precioPorNoche: number;
  estado: number; // 0-Disponible, 1-Ocupado, 2-EnMantenimiento, 3-Reservado
  descripcion?: string;
}

export interface CreateRoomResponse {
  message: string;
  id: string;
}

@Injectable({ providedIn: 'root' })
export class RoomsService {
  private readonly apiUrl = `${environment.apiUrl}/rooms`;
  private readonly storageKey = 'probook_user';

  constructor(private http: HttpClient) {}

  getRooms(): Observable<Habitacion[]> {
    const token = this.getToken();
    const headers = token ? new HttpHeaders({ Authorization: `Bearer ${token}` }) : undefined;
    return this.http.get<Habitacion[]>(this.apiUrl, { headers });
  }

  createRoom(payload: HabitacionCrearRequest): Observable<CreateRoomResponse> {
    const token = this.getToken();
    const headers = token ? new HttpHeaders({ Authorization: `Bearer ${token}` }) : undefined;
    return this.http.post<CreateRoomResponse>(this.apiUrl, payload, { headers });
  }

  private getToken(): string | null {
    const stored = localStorage.getItem(this.storageKey);
    if (!stored) return null;

    try {
      const user = JSON.parse(stored) as any | null;
      const rawToken: unknown = user?.token ?? user?.Token;
      if (typeof rawToken !== 'string') return null;

      let token = rawToken.trim();
      // Evitar duplicar "Bearer " si el token se guardó ya con prefijo.
      if (token.startsWith('Bearer ')) token = token.slice('Bearer '.length).trim();

      return token || null;
    } catch {
      return null;
    }
  }
}

