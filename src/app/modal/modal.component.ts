import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';




export interface PeriodicElement {
  name: string;
  activity: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {activity: "Tennis", name: 'tennis'},
  {activity: "Gymnastique", name: 'gymnastique'},
  {activity: "La Chasse", name: 'lachasse'},
  {activity: "Karaté", name: 'karate'},
  {activity: "Polo a cheval", name: 'polo'},
  
];

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  
})

export class ModalComponent implements OnInit {
  notes = ["1","2","3","4","5"]
  options = ["Tennis","Gymnastique", "La Chasse", "Karaté", "Polo a cheval" ]
  displayedColumnsBigScreen: string[] = ['activity','1', '2','3','4','5'];
  displayedColumnsSmallScreen: string[] = ['activity','15'];

  dataSource = ELEMENT_DATA;
  activitiesForm = new FormGroup({
    tennis: new FormControl('',Validators.required),
    gymnastique: new FormControl('',Validators.required),
    lachasse: new FormControl('',Validators.required),
    karate: new FormControl('',Validators.required),
    polo: new FormControl('',Validators.required),
  });
  innerWidth = 0;
  constructor(
    private dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) data:any) {
  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
	onResize(event:any) {
    this.innerWidth = event.target.innerWidth;
	}
  save() {
    console.log("saving");
    console.log(this.activitiesForm.value);
    this.close();
  }

  get isValid(){
    return this.activitiesForm.status=='VALID';
  }

  get isTouched(){
    return this.activitiesForm.touched;
  }
  get displayedColumns(){
    return this.innerWidth<576 ? this.displayedColumnsSmallScreen: this.displayedColumnsBigScreen;
  }
  get isSmallScreen(){
    return this.innerWidth<576;
  }
  getSliderValue(activity:string){
    return this.activitiesForm.get(activity)?.value;
  }
  close() {
    this.dialogRef.close();
  }
}
