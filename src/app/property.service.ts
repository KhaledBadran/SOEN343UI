import { Property } from './Property';

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  private propertiesURL = 'http://localhost:8080/api/v1';  // URL to local api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getProperties(): Observable<Property[]> {
    const getPropertiesURL = `${this.propertiesURL}/property`;
    return this.http.get<Property[]>(getPropertiesURL);
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
