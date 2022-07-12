import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Hangar } from '../model/hangar.model';
import { HangarService } from '../services/hangar.service';

@Component({
  selector: 'app-hangar',
  templateUrl: './hangar.component.html',
  styleUrls: ['./hangar.component.scss']
})
export class HangarComponent implements OnInit {

  @ViewChild('formu') form: NgForm;
  hangarNumber: string;
  hangarStatus: string;
  hangarName: string;
  hangar: Hangar;
  editmode = false;
  added = false;
  hangars: Array<Hangar>;

  constructor(private hangarService: HangarService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.hangarService.getAllHangars().subscribe(
      data => {
        this.hangars = data;
      }
    )
  }

  // getAllHangars() {
  //   this.hangarService.getAllHangars().subscribe(
  //     data => {
  //       this.hangars = data;
  //     }
  //   )
  // }

  onSubmit(form) {
    this.hangar = {
      hangarNumber: form.value.hangarNumber,
      hangarName: form.value.hangarName,
      hangarStatus: form.value.hangarStatus
    }
    this.hangarService.addHangar(this.hangar);
    this.added = true;
    console.log(form.value);
    form.reset();
  }

  update(form) {
    if (form.value.hangarNumber != '') {
      this.hangar = {
        hangarNumber: form.value.hangarNumber,
        hangarName: form.value.hangarName,
        hangarStatus: form.value.hangarStatus
      }
      this.hangarService.updateHangar(this.hangar);
      console.log(form.value);
      form.reset();
    } else {

    }

  }

  editDetails(index: number) {
    this.editmode = true;
    this.hangarService.startedEditing.next(index);
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  deleteHangar(hangar: Hangar) {
    if (hangar != null) {
      this.hangarService.deleteHangar(hangar);
    }
  }

}
