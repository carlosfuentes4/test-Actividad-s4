import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

export interface RoomDeleteConfirmData {
  title: string;
  message: string;
  roomNumber?: string;
}

@Component({
  standalone: true,
  selector: 'app-room-delete-confirm-dialog',
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  template: `
    <h2 mat-dialog-title>{{ data.title }}</h2>
    <mat-dialog-content>
      <p>{{ data.message }}</p>
      @if (data.roomNumber) {
        <p class="room-number"><strong>Habitación: {{ data.roomNumber }}</strong></p>
      }
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button (click)="onCancel()">Cancelar</button>
      <button mat-flat-button color="warn" (click)="onConfirm()">
        Eliminar
      </button>
    </mat-dialog-actions>
  `,
  styles: [`
    .room-number { margin-top: 0.5rem; }
  `],
})
export class RoomDeleteConfirmDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<RoomDeleteConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: RoomDeleteConfirmData
  ) {}

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }
}
