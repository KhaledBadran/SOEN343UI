import { Component, OnInit } from '@angular/core';
import { Apartment }    from '../Property';
import { NgForm }   from '@angular/forms';
import { ApartmentService } from '../apartment.service';


@Component({
  selector: 'app-apartment-form',
  templateUrl: './apartment-form.component.html',
  styleUrls: ['./apartment-form.component.css']
})
export class ApartmentFormComponent implements OnInit {

  submittedApartment: Apartment;

  constructor(private apartmentService: ApartmentService) { }

  ngOnInit() {
  }

  addApartment(newApartment: Apartment): void {
    console.log('in addApartment of Component');
    console.log(newApartment);
    this.apartmentService.addApartment(newApartment)
      .subscribe();
  }

  onSubmit(f){
    this.submittedApartment = new Apartment();
    console.log(f);

    // Address Details
    this.submittedApartment.property.address.address = +f.value.address;
    this.submittedApartment.property.address.street = f.value.street;
    this.submittedApartment.property.address.city = f.value.city;
    this.submittedApartment.property.address.province = f.value.province;
    this.submittedApartment.property.address.country = f.value.country;
    this.submittedApartment.property.address.postalCode = f.value.postalCode;

    // Property Details
    this.submittedApartment.property.bathrooms = +f.value.bathrooms;
    this.submittedApartment.property.bedrooms = +f.value.bedrooms;
    this.submittedApartment.property.parkingSpaces = +f.value.parkingSpaces ;
    this.submittedApartment.property.petsAllowed = f.value.petsAllowed ;
    this.submittedApartment.property.price = +f.value.price;

    // Apartment Details
    this.submittedApartment.laundryIncluded = f.value.laundryIncluded == 'true' ? true : false;
    this.submittedApartment.heatingIncluded = f.value.heatingIncluded == 'true' ? true : false;
    this.submittedApartment.electricityIncluded = f.value.electricityIncluded == 'true' ? true : false;
    this.submittedApartment.internetIncluded = f.value.internetIncluded == 'true' ? true : false;
    this.submittedApartment.furnished = f.value.furnished == 'true' ? true : false;
    this.submittedApartment.airConditioning = f.value.airConditioning == 'true' ? true : false;
    this.submittedApartment.smokersAccepted = f.value.smokersAccepted == 'true' ? true : false;


    console.log(this.submittedApartment);
    this.addApartment(this.submittedApartment);

  }

}
