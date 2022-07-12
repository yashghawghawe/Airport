import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hangar } from 'src/app/model/hangar.model';
import { HangarService } from 'src/app/services/hangar.service';

@Component({
  selector: 'app-edit-hangar',
  templateUrl: './edit-hangar.component.html',
  styleUrls: ['./edit-hangar.component.scss']
})
export class EditHangarComponent implements OnInit {

  @ViewChild('formu') form: NgForm;
  hangar: Hangar;
  hangars: Array<Hangar>;
  hangarNumber: string;
  hangarStatus: string;
  hangarName: string;
  updated = false;
  editMode = true;
  editedItemIndex: number;
  editedHangar: Hangar;

  constructor(private hangarService: HangarService) { }

  ngOnInit(): void {
    this.hangarService.getAllHangars().subscribe(
      data => {
        this.hangars = data;
      }
    )
    this.hangarService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedHangar = this.hangars[index];
        this.hangar = {
          hangarNumber: this.editedHangar.hangarNumber,
          hangarName: this.editedHangar.hangarName,
          hangarStatus: this.editedHangar.hangarStatus
        }
        this.form.setValue(this.hangar);
      }
    );
  }

  update(form) {
    let value = window.confirm("do you want to update the details " +
      "press ok if yes ");
    if (value == true) {
      if (form.value.hangarNumber != '') {
        this.hangar = {
          hangarNumber: form.value.hangarNumber,
          hangarName: form.value.hangarName,
          hangarStatus: form.value.hangarStatus
        }
        this.hangarService.updateHangar(this.hangar);
        console.log(form.value);
        this.updated = true;
        form.reset();
      } else {
        window.alert('Please Enter The Hangar Number');
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
