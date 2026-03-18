import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent) },
  { path: 'register', loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent) },
  {
    path: 'main',
    canActivate: [authGuard],
    loadComponent: () => import('./layout/main/main.component').then(m => m.MainComponent),
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent) },
      { path: 'habitaciones', loadComponent: () => import('./pages/habitaciones/habitaciones.component').then(m => m.HabitacionesComponent) },
      { path: 'huespedes', loadComponent: () => import('./pages/huespedes/huespedes.component').then(m => m.HuespedesComponent) },
      { path: 'reportes', loadComponent: () => import('./pages/reportes/reportes.component').then(m => m.ReportesComponent) },
      { path: 'reservar', loadComponent: () => import('./pages/reservar/reservar.component').then(m => m.ReservarComponent) },
    ],
  },
  { path: '**', redirectTo: 'login' },
];
