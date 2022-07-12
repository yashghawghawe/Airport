import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Pilot } from '../model/pilot.model';

@Injectable({
  providedIn: 'root'
})
export class PilotService {

  startedEditing = new Subject<number>();

  constructor(private http: HttpClient) { }

  addPilot(pilot: Pilot) {
    this.http.post('http://localhost:8087/admin/AddPilot', pilot).subscribe(
      (response) => {
        console.log(response);
      }
    )
  }

  getAllPilots(): Observable<any> {
    return this.http.get('http://localhost:8087/admin/getAllPilots');
  }

  updatePilot(pilot: Pilot) {
    this.http.post('http://localhost:8087/admin/updatePilot', pilot).
      subscribe(response => {
        console.log(response);
      });
  }

  deletePilot(pilot:Pilot){
    this.http.post('http://localhost:8087/admin/deletePilot',pilot).subscribe(
      response => {
        console.log('Pilot with ID ' +pilot.companyID+' has been Deleted Successfully')
      }
    )
  }
}
