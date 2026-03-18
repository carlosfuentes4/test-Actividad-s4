import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';

export interface UsuarioLogueado {
  id: string;
  email: string;
  nombreCompleto: string;
  rol: string;
  token?: string;
  expiresAt?: string;
}

const STORAGE_KEY = 'probook_user';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly apiUrl = `${environment.apiUrl}/auth`;
  private userSignal = signal<UsuarioLogueado | null>(null);

  currentUser = computed(() => this.userSignal());
  isLoggedIn = computed(() => this.userSignal() !== null);

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.restoreSession();
  }

  private restoreSession(): void {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as any;
        // Normalizar propiedades del backend (por naming camelCase / PascalCase).
        parsed.token = parsed.token ?? parsed.Token;
        parsed.expiresAt = parsed.expiresAt ?? parsed.ExpiresAt;
        this.userSignal.set(parsed as UsuarioLogueado);
      } catch {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  }

  login(email: string, password?: string): Observable<UsuarioLogueado> {
    return this.http
      .post<UsuarioLogueado>(`${this.apiUrl}/login`, {
        email: email.trim(),
        password: (password ?? '').toString(),
      })
      .pipe(
        tap((user) => {
          const normalized: any = user as any;
          normalized.token = normalized.token ?? normalized.Token;
          normalized.expiresAt = normalized.expiresAt ?? normalized.ExpiresAt;
          this.userSignal.set(normalized as UsuarioLogueado);
          localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
        })
      );
  }

  logout(): void {
    this.userSignal.set(null);
    localStorage.removeItem(STORAGE_KEY);
    this.router.navigate(['/login']);
  }
}
