import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Plane } from '../model/plane.model';
import { PlaneService } from '../services/plane.service';

@Component({
  selector: 'app-plane',
  templateUrl: './plane.component.html',
  styleUrls: ['./plane.component.scss']
})
export class PlaneComponent implements OnInit {

  @ViewChild('form') form: NgForm;
  planeName: string = "";
  ownerName: string = "";
  planeType: string = "";
  plane: Plane;
  added = false;
  planes: Array<Plane>;
  editmode = false;

  constructor(private planeService: PlaneService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.planeService.getAllPlanes().subscribe(
      data => {
        this.planes = data;
      }
    )
  }

  // getAllPlanes() {
  //   this.planeService.getAllPlanes().subscribe(
  //     data => {
  //       this.planes = data;
  //     }
  //   )
  // }

  onSubmit(form) {
    this.plane = {
      planeName: form.value.planeName,
      ownerName: form.value.OwnerName,
      planeType: form.value.planeType
    }
    this.planeService.addPlane(this.plane);
    console.log(form.value);
    this.added = true;
    form.reset();
  }

  editDetails(index: number) {
    this.editmode = true;
    this.planeService.startedEditing.next(index);
    this.router.navigate(['editplane'], { relativeTo: this.route })
  }

  deletePlane(plane: Plane) {
    if (plane != null) {
      this.planeService.deletePlane(plane);
    }
  }

}


