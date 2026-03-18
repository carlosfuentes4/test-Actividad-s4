import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (auth.isLoggedIn()) {
    return true;
  }

  // Fallback: si por cualquier razón la señal en memoria no está lista,
  // usamos lo guardado en localStorage para permitir el acceso al main.
  try {
    const stored = localStorage.getItem('probook_user');
    if (stored) {
      const user = JSON.parse(stored) as { token?: string } | null;
      if (user?.token) return true;
    }
  } catch {
    // Ignorar JSON inválido
  }

  router.navigate(['/login']);
  return false;
};
