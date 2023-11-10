import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DialogData } from '../dialog-data';
import { MatDialogModule, MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CourseDialogContainerComponent } from '../course-dialog-container/course-dialog-container.component';


@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.css'],
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    CommonModule
  ]

})
export class CourseDialogComponent {

  animal!: string;
  name!: string;

  constructor(public dialog: MatDialog) {

}
  openDialog() : void {
    const dialogRef = this.dialog.open(CourseDialogContainerComponent,  {
      data : {name : this.name, animal : this.animal}
    });
    dialogRef.afterClosed().subscribe( result => {
      console.log("The dialog closed");
      this.animal = result;
    });
  }
  // formGroup = new FormGroup();
}
