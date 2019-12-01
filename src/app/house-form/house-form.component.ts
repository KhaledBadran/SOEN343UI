import { Component, OnInit } from '@angular/core';
import { House }    from '../Property';
import { HouseService } from '../house.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-house-form',
  templateUrl: './house-form.component.html',
  styleUrls: ['./house-form.component.css']
})
export class HouseFormComponent implements OnInit {

  submittedHouse: House;

  constructor(
    private route: ActivatedRoute,
    private houseService: HouseService,
    private location: Location) {}


  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

  addHouse(newHouse: House): void {
    console.log('in addHouse of Component');
    console.log(newHouse);
    this.houseService.addHouse(newHouse)
      .subscribe();
  }

  onSubmit(f){
    this.submittedHouse = new House();
    console.log(f);

    // Address Details
    this.submittedHouse.property.address.address = +f.value.address;
    this.submittedHouse.property.address.street = f.value.street;
    this.submittedHouse.property.address.city = f.value.city;
    this.submittedHouse.property.address.province = f.value.province;
    this.submittedHouse.property.address.country = f.value.country;
    this.submittedHouse.property.address.postalCode = f.value.postalCode;

    // Property Details
    this.submittedHouse.property.bathrooms = +f.value.bathrooms;
    this.submittedHouse.property.bedrooms = +f.value.bedrooms;
    this.submittedHouse.property.parkingSpaces = +f.value.parkingSpaces ;
    this.submittedHouse.property.petsAllowed = f.value.petsAllowed ;
    this.submittedHouse.property.price = +f.value.price;

    // House Details
    this.submittedHouse.transitFriendly = f.value.transitFriendly == 'true' ? true : false;
    this.submittedHouse.privateBackyardIncluded = f.value.privateBackyardIncluded == 'true' ? true : false;
    this.submittedHouse.poolIncluded = f.value.poolIncluded == 'true' ? true : false;
    this.submittedHouse.basementIncluded = f.value.basementIncluded == 'true' ? true : false;
    this.submittedHouse.pedestrianFriendly = f.value.pedestrianFriendly == 'true' ? true : false;
    this.submittedHouse.yearBuilt = +f.value.yearBuilt;


    console.log(this.submittedHouse);
    this.addHouse(this.submittedHouse);
    this.goBack();
  }

}
