import { Component, Inject } from '@angular/core';
import { DialogData } from '../dialog-data';
import { MatDialogModule, MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'favorite-animal-dialog',
  templateUrl: './favorite-animal-dialog.component.html',
  styleUrls: ['./favorite-animal-dialog.component.css'],
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
  ]

})
export class FavoriteAnimalDialogComponent {

  constructor(public dialogRef: MatDialogRef<FavoriteAnimalDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {

  }

  onNoClick() : void {
    this.dialogRef.close();
  }
}
