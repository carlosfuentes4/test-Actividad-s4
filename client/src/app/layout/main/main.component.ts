import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatSidenavModule, MatDrawerMode } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

export interface SidebarItem {
  label: string;
  route: string;
  icon: string;
}

// Rol 0 = Gerente (menú completo sin "Reservar" para invitados). Rol 1 = Invitado (solo Dashboard y Reservar).
const ROUTES_ROL_1 = ['/main/dashboard', '/main/reservar-habitacion'];
const ROUTE_RESERVAR_HABITACION = '/main/reservar-habitacion';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  sidenavOpened = true;
  sidenavMode: MatDrawerMode = 'side';

  sidebarItems: SidebarItem[] = [
    { label: 'Dashboard', route: '/main/dashboard', icon: 'dashboard' },
    { label: 'Habitaciones', route: '/main/habitaciones', icon: 'meeting_room' },
    { label: 'Huéspedes', route: '/main/huespedes', icon: 'people' },
    { label: 'Reportes', route: '/main/reportes', icon: 'bar_chart' },
    { label: 'Reservar', route: '/main/reservar-habitacion', icon: 'add_calendar' },
    { label: 'Reservaciones', route: '/main/reservar', icon: 'event_available' },
  ];

  toggleSidenav(): void {
    this.sidenavOpened = !this.sidenavOpened;
  }

  constructor(
    private router: Router,
    public authService: AuthService
  ) {}

  private parseRol(raw: unknown): number {
    if (raw === null || raw === undefined) return 0;
    if (typeof raw === 'number') return raw;

    if (typeof raw === 'string') {
      const trimmed = raw.trim();
      const lowered = trimmed.toLowerCase();

      // Soportar rol como número en string.
      const asNumber = Number(trimmed);
      if (!Number.isNaN(asNumber)) return asNumber;

      // Soportar rol como texto (backend o frontend).
      if (lowered.includes('invita') || lowered.includes('invit')) return 1;
      if (lowered.includes('hué') || lowered.includes('huesp') || lowered.includes('huésped')) return 1;
      if (lowered.includes('manager') || lowered.includes('gerent')) return 0;
    }

    return 0;
  }

  get visibleItems(): SidebarItem[] {
    const user = this.authService.currentUser();
    const rol = this.parseRol(user?.rol);
    if (rol === 1) {
      return this.sidebarItems.filter((item) => ROUTES_ROL_1.includes(item.route));
    }
    // Rol 0 (Gerente): todo menos la vista "Reservar" (solo para invitados).
    return this.sidebarItems.filter((item) => item.route !== ROUTE_RESERVAR_HABITACION);
  }

  logout(): void {
    this.authService.logout();
  }
}
