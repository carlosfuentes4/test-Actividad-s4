import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { UsersService, UsuarioMini } from '../../services/users.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-huespedes',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
  ],
  template: `
    <mat-card class="rooms-card">
      <mat-card-header>
        <mat-card-title>Huéspedes</mat-card-title>
        <mat-card-subtitle>Usuarios con rol = Invitado</mat-card-subtitle>
      </mat-card-header>

      <mat-card-content>
        <div class="loading" *ngIf="loading">
          <mat-spinner diameter="40"></mat-spinner>
          <span class="loading-text">Cargando huéspedes...</span>
        </div>

        <p class="error-msg" *ngIf="!loading && errorMessage">{{ errorMessage }}</p>

        <div class="table-wrapper" *ngIf="!loading && !errorMessage">
          <table mat-table [dataSource]="dataSource" class="mat-elevation-z1">
            <ng-container matColumnDef="nombreCompleto">
              <th mat-header-cell *matHeaderCellDef>Nombre completo</th>
              <td mat-cell *matCellDef="let row">{{ row.nombreCompleto }}</td>
            </ng-container>

            <ng-container matColumnDef="correo">
              <th mat-header-cell *matHeaderCellDef>Correo</th>
              <td mat-cell *matCellDef="let row">{{ row.correo }}</td>
            </ng-container>

            <ng-container matColumnDef="telefono">
              <th mat-header-cell *matHeaderCellDef>Teléfono</th>
              <td mat-cell *matCellDef="let row">{{ row.telefono || '-' }}</td>
            </ng-container>

            <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
            <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
          </table>

          <p class="empty-msg" *ngIf="dataSource.data.length === 0">
            No hay huéspedes registrados.
          </p>
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [
    `
      .rooms-card {
        width: 100%;
      }
      .loading {
        display: flex;
        gap: 12px;
        align-items: center;
        justify-content: center;
        padding: 24px 0;
      }
      .loading-text {
        opacity: 0.8;
      }
      .error-msg {
        color: #c62828;
        margin: 10px 0 0 0;
      }
      .table-wrapper {
        overflow: auto;
      }
      .empty-msg {
        margin-top: 12px;
        opacity: 0.8;
      }
    `,
  ],
})
export class HuespedesComponent implements OnInit {
  loading = false;
  errorMessage = '';

  dataSource = new MatTableDataSource<UsuarioMini>([]);
  displayedColumns: string[] = ['nombreCompleto', 'correo', 'telefono'];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.load();
  }

  private load(): void {
    this.loading = true;
    this.errorMessage = '';

    this.usersService.getUsers().subscribe({
      next: (users) => {
        this.dataSource.data = users.filter((u) => Number(u.rol) === 1);
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.errorMessage = err?.error?.message ?? 'No se pudieron cargar los huéspedes.';
      },
    });
  }
}
