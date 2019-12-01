import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Apartment } from '../Property';
import { ApartmentService }  from '../apartment.service';
@Component({
  selector: 'app-apartment-edit',
  templateUrl: './apartment-edit.component.html',
  styleUrls: ['./apartment-edit.component.css']
})
export class ApartmentEditComponent implements OnInit {

  apartment: Apartment;

  constructor(
    private route: ActivatedRoute,
    private apartmentService: ApartmentService,
    private location: Location) {}

  ngOnInit(): void {
    this.getApartment();
  }

  getApartment(): void {
    const id = this.route.snapshot.paramMap.get('id'); // + converts string to a number.

    this.apartmentService.getApartment(id)
      .subscribe(apartment => this.apartment = apartment);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
   this.apartmentService.updateApartment(this.apartment)
     .subscribe(() => this.goBack());
  }

  delete(): void {
   this.apartmentService.deleteApartment(this.apartment).subscribe();
   this.goBack();
  }

}
