import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pilot } from '../model/pilot.model';
import { PilotService } from '../services/pilot.service';

@Component({
  selector: 'app-pilot',
  templateUrl: './pilot.component.html',
  styleUrls: ['./pilot.component.scss']
})
export class PilotComponent implements OnInit {

  pilotName: string = "";
  companyid: string = "";
  email: string = "";
  pilotID: number;
  pilot: Pilot;
  added = false;
  updateDetails: string;
  pilots: Array<Pilot>;
  editMode = false;

  constructor(private pilotService: PilotService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.pilotService.getAllPilots().subscribe(
      data => {
        this.pilots = data;
      }
    )
  }

  onSubmit(form) {
    this.pilot = {
      pilotName: form.value.pilotName,
      companyID: form.value.companyID,
      email: form.value.email
    }
    console.log(this.pilot);
    this.pilotService.addPilot(this.pilot);
    this.added = !this.added;
    console.log(form.value);
    form.reset();
  }

  // getAllPilots() {
  //   this.pilotService.getAllPilots().subscribe(
  //     data => {
  //       this.pilots = data;
  //     }
  //   )
  // }

  editDetails(index: number) {
    this.editMode = true;
    this.pilotService.startedEditing.next(index);
    this.router.navigate(['editpilot'], { relativeTo: this.route });

  }

  deletePilot(pilot: Pilot) {
    this.pilotService.deletePilot(pilot);
  }
}
