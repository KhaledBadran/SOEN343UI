import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Apartment } from '../Property';
import { ApartmentService }  from '../apartment.service';

@Component({
  selector: 'app-apartment-details',
  templateUrl: './apartment-details.component.html',
  styleUrls: ['./apartment-details.component.css']
})
export class ApartmentDetailsComponent implements OnInit {

  apartment: Apartment;

  constructor(
    private route: ActivatedRoute,
    private apartmentService: ApartmentService,
    private location: Location) {}

  ngOnInit(): void {
    this.getApartment();
  }

  getApartment(): void {
    console.log('in getApt in apt-details component');
    const id = +this.route.snapshot.paramMap.get('id'); // + converts string to a number.
    console.log('id is');
    console.log(id);

    // get the apartment data from the Apartment service.
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
