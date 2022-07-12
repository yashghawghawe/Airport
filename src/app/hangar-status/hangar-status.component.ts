import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hangar } from '../model/hangar.model';

@Component({
  selector: 'app-hangar-status',
  templateUrl: './hangar-status.component.html',
  styleUrls: ['./hangar-status.component.scss']
})
export class HangarStatusComponent implements OnInit {

  @ViewChild('formu') form:NgForm;
  hangar :Hangar;
  hangarNumber: string;
  hangarStatus: string;

  constructor() { }

  ngOnInit(): void {
  }

  update(form){
    let value = window.confirm("please confirm to update hangar status");
    if (value ==  true) {
      if(form.value.hangarNumber != ''){
      
      }
    }
  }

  Reset() {
    this.form.reset();
  }

  cancel() {
    window.location.reload();
  }

}
