import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pilot } from 'src/app/model/pilot.model';
import { PilotService } from 'src/app/services/pilot.service';

@Component({
  selector: 'app-editpilot',
  templateUrl: './editpilot.component.html',
  styleUrls: ['./editpilot.component.scss']
})
export class EditpilotComponent implements OnInit {

  @ViewChild('form') form: NgForm;
  pilotName: string = "";
  companyid: string = "";
  email: string = "";
  pilot: Pilot;
  added = false;
  pilots: Array<Pilot>;
  editMode = true;
  editedItemIndex: number;
  editedPilot: Pilot;

  constructor(private pilotService: PilotService) { }

  ngOnInit(): void {
    this.pilotService.getAllPilots().subscribe(
      (data) => {
        this.pilots = data;
      }
    )
    this.pilotService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editedPilot = this.pilots[index];
        this.pilot = {
          pilotName: this.editedPilot.pilotName,
          companyID: this.editedPilot.companyID,
          email: this.editedPilot.email
        }
        this.form.setValue(this.pilot);
      }
    )
  }

  updatePilot(form: NgForm) {
      let value = window.confirm('do you want to update the details' +
        ' if yes press ok');
      if (value == true) {
        if (form.value.companyID != '') {
          this.pilot = {
            pilotName: form.value.pilotName,
            companyID: form.value.companyID,
            email: form.value.email
          }
          this.pilotService.updatePilot(this.pilot);
          this.added = true;
          console.log(form.value);
          form.reset();
        }
      } else {
      }

  }

  Reset() {
    this.form.reset();
  }

  cancel() {
    this.editMode = false;
    window.location.reload();
  }

}
