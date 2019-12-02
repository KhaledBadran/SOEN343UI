import { Component, OnInit } from '@angular/core';
import { Condo }    from '../Property';
import { CondoService } from '../condo.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-condo-form',
  templateUrl: './condo-form.component.html',
  styleUrls: ['./condo-form.component.css']
})
export class CondoFormComponent implements OnInit {

  submittedCondo: Condo;

  constructor(
    private route: ActivatedRoute,
    private condoService: CondoService,
    private location: Location) {}


  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

  addCondo(newCondo: Condo): void {
    console.log('in addCondo of Component');
    console.log(newCondo);
    this.condoService.addCondo(newCondo)
      .subscribe();
  }

  onSubmit(f){
    this.submittedCondo = new Condo();
    console.log(f);

    // Address Details
    this.submittedCondo.property.address.address = +f.value.address;
    this.submittedCondo.property.address.street = f.value.street;
    this.submittedCondo.property.address.city = f.value.city;
    this.submittedCondo.property.address.province = f.value.province;
    this.submittedCondo.property.address.country = f.value.country;
    this.submittedCondo.property.address.postalCode = f.value.postalCode;

    // Property Details
    this.submittedCondo.property.bathrooms = +f.value.bathrooms;
    this.submittedCondo.property.bedrooms = +f.value.bedrooms;
    this.submittedCondo.property.parkingSpaces = +f.value.parkingSpaces ;
    this.submittedCondo.property.petsAllowed = f.value.petsAllowed ;
    this.submittedCondo.property.price = +f.value.price;

    // Condo Details
    this.submittedCondo.elevatorIncluded = f.value.elevatorIncluded == true ? true : false;
    this.submittedCondo.storageIncluded = f.value.storageIncluded == true ? true : false;
    this.submittedCondo.outdoorAreasIncluded = f.value.outdoorAreasIncluded == true ? true : false;
    this.submittedCondo.gymIncluded = f.value.gymIncluded == true ? true : false;
    this.submittedCondo.conciergeIncluded = f.value.conciergeIncluded == true ? true : false;
    this.submittedCondo.airConditioning = f.value.airConditioning == true ? true : false;
    this.submittedCondo.buildingInsurance = f.value.buildingInsurance == true ? true : false;

    console.log(this.submittedCondo);
    this.addCondo(this.submittedCondo);
    this.goBack();

  }


}
