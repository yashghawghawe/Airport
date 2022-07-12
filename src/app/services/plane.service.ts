import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Plane } from '../model/plane.model';

@Injectable({
  providedIn: 'root'
})
export class PlaneService {

  planesChanged = new Subject<Plane[]>();
  startedEditing = new Subject<number>();
  plane: Array<Plane>;

  constructor(private http: HttpClient) { }

  addPlane(plane: Plane) {
    this.http.post('http://localhost:8087/admin/AddPlane', plane).subscribe(
      (response) => {
        console.log(response);
      }
    )
  }

  getAllPlanes(): Observable<any> {
    return this.http.get('http://localhost:8087/admin/getAllPlanes');
  }

  updatePlane(plane: Plane) {
    this.http.post('http://localhost:8087/admin/updatePlane', plane).
      subscribe(response => {
        console.log(response);
      })
  }

  deletePlane(plane: Plane) {
    this.http.post('http://localhost:8087/admin/deletePlane', plane).subscribe(
      () => { console.log('Deleted') }
    );
  }
}
