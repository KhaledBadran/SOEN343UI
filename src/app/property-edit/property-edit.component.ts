import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Property } from '../Property';
import { PropertyService }  from '../property.service';
@Component({
  selector: 'app-property-edit',
  templateUrl: './property-edit.component.html',
  styleUrls: ['./property-edit.component.css']
})
export class PropertyEditComponent implements OnInit {

  property: Property;

  constructor(
    private route: ActivatedRoute,
    private propertyService: PropertyService,
    private location: Location) {}

  ngOnInit(): void {
    this.getProperty();
  }

  getProperty(): void {
    const id = +this.route.snapshot.paramMap.get('id'); // + converts string to a number.

    // get the property data from the Property service.
    this.propertyService.getProperty(id)
      .subscribe(property => this.property = property);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
   this.propertyService.updateProperty(this.property)
     .subscribe(() => this.goBack());
  }

  delete(): void {
   this.propertyService.deleteProperty(this.property).subscribe();
   this.goBack();
  }

}
