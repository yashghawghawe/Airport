import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Hangar } from '../model/hangar.model';

@Injectable({
  providedIn: 'root'
})
export class HangarService {

  hnagarsChanged = new Subject<Hangar[]>();
  startedEditing = new Subject<number>();
  hangar: Array<Hangar>;

  constructor(private http: HttpClient) { }

  addHangar(hangar: Hangar) {
    this.http.post('http://localhost:8087/admin/Addhangar', hangar).subscribe(
      (response) => {
        console.log(response);
      }
    )
  }

  getAllHangars(): Observable<any> {
    return this.http.get('http://localhost:8087/admin/getAllHangars');
  }

  getHangarByIndex(index:number){
    return this.hangar[index];
  }

  getHangar(id: number): Observable<any> {
    return this.http.get('http://localhost:8087/admin/getAllHangars/gethangarById/' + id)
  }

  updateHangar(hangar: Hangar) {
    this.http.post('http://localhost:8087/admin/updateHangar', hangar).subscribe(
      (response) => {
        console.log(response);
      }
    );
  }

  deleteHangar(hangar:Hangar){
    this.http.post('http://localhost:8087/deleteHangar',hangar).subscribe(
      (response) => {
        console.log(response);
      }
    );
  }
}
