import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Property } from '../Property';
import { PropertyService }  from '../property.service';

@Component({
  selector: 'app-property-add',
  templateUrl: './property-add.component.html',
  styleUrls: ['./property-add.component.css']
})
export class PropertyAddComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private propertyService: PropertyService,
    private location: Location) {}

  ngOnInit() {
  }


  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.propertyService.addProperty({ name } as Property)
      .subscribe();
  }

  
  goBack(): void {
    this.location.back();
  }
}
