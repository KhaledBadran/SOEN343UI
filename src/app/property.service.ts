import { Property } from './Property';
import { PROPERTIES } from './mock-properties';

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  private propertiesURL = 'https://5dc86769672b6e001426b576.mockapi.io/api/properties';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getProperties(): Observable<Property[]> {
    return this.http.get<Property[]>(this.propertiesURL);
  }

  getProperty(id: number): Observable<Property> {
    const getURL = `${this.propertiesURL}/${id}`;
    return this.http.get<Property>(getURL);
  }

  updateProperty (property: Property): Observable<any> {
    const putURL = `${this.propertiesURL}/${property.id}`;
    return this.http.put(putURL, property, this.httpOptions);
  }

  deleteProperty (property: Property): Observable<any> {
    const deleteURL = `${this.propertiesURL}/${property.id}`;
    return this.http.delete<Property>(deleteURL, this.httpOptions);
  }

  addProperty (property: Property): Observable<Property> {
    return this.http.post<Property>(this.propertiesURL, property, this.httpOptions);
  }

}
