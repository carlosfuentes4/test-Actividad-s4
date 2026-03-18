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
  roles?: ('Manager' | 'Invitado')[]; // si está definido, solo se muestra para esos roles
}

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

  // Opciones del sidebar según PDF: Gerente (Dashboard, Habitaciones, Huéspedes, Reportes) y Huésped (Dashboard, Reservar, etc.)
  sidebarItems: SidebarItem[] = [
    { label: 'Dashboard', route: '/main/dashboard', icon: 'dashboard' },
    { label: 'Habitaciones', route: '/main/habitaciones', icon: 'meeting_room', roles: ['Manager'] },
    { label: 'Huéspedes', route: '/main/huespedes', icon: 'people', roles: ['Manager'] },
    { label: 'Reportes', route: '/main/reportes', icon: 'bar_chart', roles: ['Manager'] },
    { label: 'Reservar', route: '/main/reservar', icon: 'event_available', roles: ['Invitado'] },
  ];

  toggleSidenav(): void {
    this.sidenavOpened = !this.sidenavOpened;
  }

  constructor(
    private router: Router,
    public authService: AuthService
  ) {}

  // Por ahora mostramos todas las opciones; luego se filtra por rol cuando exista AuthService
  get visibleItems(): SidebarItem[] {
    return this.sidebarItems;
  }

  logout(): void {
    this.authService.logout();
  }
}
