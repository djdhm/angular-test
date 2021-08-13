import { Component, Input, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent {

  @Input() activity!: string;

  constructor(private dialog: MatDialog) {}

  onClick(){
    alert(this.activity);
    this.openDialog();
  }
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(ModalComponent, dialogConfig);
}

}
