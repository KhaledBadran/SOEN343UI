import { Component, OnInit } from '@angular/core';
import { Property } from '../Property';

import { PropertyService } from '../property.service';


@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

  properties: Property[];
 
  constructor(private propertyService: PropertyService ) { }

  ngOnInit() {
    this.getProperties();
  }

  getProperties(): void {
    this.propertyService.getProperties()
      .subscribe(properties => this.properties = properties);
  }

  deleteProperty(property: Property): void {
    console.log('in delete Property!');
    this.propertyService.deleteProperty(property).subscribe();
  }



}
