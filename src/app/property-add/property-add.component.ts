import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Property } from '../Property';
import { PropertyService }  from '../property.service';

import { FormGroup, FormControl, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-property-add',
  templateUrl: './property-add.component.html',
  styleUrls: ['./property-add.component.css']
})
export class PropertyAddComponent implements OnInit {
  propertyForm = new FormGroup({
    parkingSpaces: new FormControl(''),
    bedrooms: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      postalCode: new FormControl('')
    })
  });

  constructor(
    private route: ActivatedRoute,
    private propertyService: PropertyService,
    private location: Location,
    private fb: FormBuilder) {}

  ngOnInit() {
  }

  
  goBack(): void {
    this.location.back();
  }

  onSubmit() {
  // TODO: Use EventEmitter with form value
  console.warn(this.propertyForm.value);
}
}
