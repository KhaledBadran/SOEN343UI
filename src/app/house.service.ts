import { House } from './Property';

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HouseService {

  private housesURL = 'http://localhost:8080/api/v1/house';  // URL to local api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  addHouse (newHouse: House): Observable<House> {
    return this.http.post<House>(this.housesURL, newHouse, this.httpOptions);
  }

  getHouse(id: string): Observable<House> {
    const getURL = `${this.housesURL}/${id}`;
    return this.http.get<House>(getURL);
  }

  updateHouse (house: House): Observable<any> {
    console.log('in update House');
    const putURL = `${this.housesURL}/${house.property.id}`;
    console.log(house);
    console.log(putURL);
    return this.http.put(putURL, house , this.httpOptions);
  }

  deleteHouse (house: House): Observable<any> {
    const deleteURL = `${this.housesURL}/${house.property.id}`;
    return this.http.delete<House>(deleteURL, this.httpOptions);
  }


}
