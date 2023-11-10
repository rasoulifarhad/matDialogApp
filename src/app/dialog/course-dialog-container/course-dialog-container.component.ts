import { Component, Inject } from '@angular/core';
import { DialogData } from '../dialog-data';
import { MatDialogModule, MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-course-dialog-container',
  templateUrl: './course-dialog-container.component.html',
  styleUrls: ['./course-dialog-container.component.css'],
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
  ]

})
export class CourseDialogContainerComponent {

  constructor(public dialogRef: MatDialogRef<CourseDialogContainerComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {

  }

  onNoClick() : void {
    this.dialogRef.close();
  }
}
