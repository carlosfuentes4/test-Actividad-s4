import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface UsuarioMini {
  idUser: string;
  correo: string;
  nombreCompleto: string;
  rol: number; // UserRole: 0=Manager, 1=Invitado
  telefono?: string;
}

/** Payload para POST /api/users (crear usuario). idUser se omite; el backend lo genera. */
export interface CreateUserPayload {
  correo: string;
  contraseña: string;
  nombreCompleto: string;
  rol: number; // 0=Manager, 1=Invitado
  telefono?: string;
  activo: boolean;
}

@Injectable({ providedIn: 'root' })
export class UsersService {
  private readonly apiUrl = `${environment.apiUrl}/users`;
  private readonly storageKey = 'probook_user';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<UsuarioMini[]> {
    const token = this.getToken();
    const headers = token ? new HttpHeaders({ Authorization: `Bearer ${token}` }) : undefined;
    return this.http.get<UsuarioMini[]>(this.apiUrl, { headers });
  }

  /** Crea un usuario (POST /api/users, endpoint AllowAnonymous). */
  createUser(payload: CreateUserPayload): Observable<{ message: string; id: string }> {
    return this.http.post<{ message: string; id: string }>(this.apiUrl, payload);
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

