import { Component } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog'
import { CourseDialogComponent } from './dialog/favorite-animal/favorite-animal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'matDialogApp';

  constructor(private dialog: MatDialog) {}

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus =true;
    // dialogConfig.position = {
    //   top: '0',
    //   left: '0'
    // };
    dialogConfig.direction = 'ltr';
    this.dialog.open(CourseDialogComponent, dialogConfig);
  }
}
