import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Plane } from 'src/app/model/plane.model';
import { PlaneService } from 'src/app/services/plane.service';

@Component({
  selector: 'app-editplane',
  templateUrl: './editplane.component.html',
  styleUrls: ['./editplane.component.scss']
})
export class EditplaneComponent implements OnInit {

  @ViewChild('formu') form: NgForm;
  planeName: string = "";
  ownerName: string = "";
  planeType: string = "";
  plane: Plane;
  updated = false;
  planes: Array<Plane>;
  editMode = true;
  editedItemIndex: number;
  editedPlane: Plane;

  constructor(private planeService: PlaneService) { }

  ngOnInit(): void {
    this.planeService.getAllPlanes().subscribe(
      data => {
        this.planes = data;
      }
    )
    this.planeService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedPlane = this.planes[this.editedItemIndex];
        this.plane = {
          planeName: this.editedPlane.planeName,
          ownerName: this.editedPlane.ownerName,
          planeType: this.editedPlane.planeType
        }
        this.form.setValue(this.plane);
      }
    )
  }

  onUpdate(form) {
    let value = window.confirm('do you want to update the details? ' +
      'if yes please press ok');
    if (value == true) {
      if (form.value.PlaneName != '') {
        this.plane = {
          planeName: form.value.planeName,
          ownerName: form.value.ownerName,
          planeType: form.value.planeType
        }
        this.planeService.updatePlane(this.plane);
        console.log(form.value);
        form.reset();
      } else {
        window.alert('Please Enter The Plane Name');
      }
    } else {
    }
  }

  Reset() {
    this.form.reset();
  }

  cancel(){
    this.editMode = false;
    window.location.reload();
  }

}
