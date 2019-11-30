export class Address{
    id: string;
    address: number;
    street: string;
    city: string;
    province: string;
    country: string;
    postalCode: string;

     constructor() { 
      this.address= 0;
      this.street= '';
      this.city= '';
      this.province= '';
      this.country= '';
      this.postalCode= '';
      }

    // constructor(newAddress:number, newStreet: string, newCity: string, newProvince:string, newCountry: string, newPostalCode: string ) { 
    //  this.id = '';
    //  this.address= newAddress;
    //  this.street= newStreet;
    //  this.city= newCity;
    //  this.province= newProvince;
    //  this.country= newCountry;
    //  this.postalCode= newPostalCode;
    //  } 
}

enum PropertyType {
    Apartment = "APPARTMENT",
    Condo = "CONDO",
    House = "HOUSE"
}

export class Property {
  id: string;
  address: Address;
  petsAllowed: boolean;
  parkingSpaces: number;
  bedrooms: number;
  bathrooms: number;
  propertyType: PropertyType;
  propertyID: string
  price: number;

  constructor(pType: PropertyType) { 
    this.address= new Address();
    this.petsAllowed= false;
    this.parkingSpaces= 0;
    this.bedrooms= 0;
    this.bathrooms= 0;
    this.propertyType= pType;
    this.price= 0;
  }
}


export class Apartment {
  id: number;
  property: Property;
  laundryIncluded: boolean;
  heatingIncluded: boolean;
  electricityIncluded: boolean;
  internetIncluded: boolean;
  furnished: boolean;
  airConditioning: boolean;
  smokersAccepted: boolean;

   constructor() { 
    this.property = new Property(PropertyType.Apartment); // call the Apartment enum
    this.laundryIncluded= false;
    this.heatingIncluded= false;
    this.electricityIncluded= false;
    this.internetIncluded= false;
    this.furnished= false;
    this.airConditioning= false;
    this.smokersAccepted= false;
    }
}

export class House {
  id: number;

  property: Property;
  transitFriendly: boolean;
  privateBackyardIncluded: boolean;
  poolIncluded: boolean;
  basementIncluded: boolean;
  pedestrianFriendly: boolean;
  yearBuilt: number;

   constructor() { 
    this.property = new Property(PropertyType.House); // call the House enum
    this.transitFriendly= false;
    this.privateBackyardIncluded= false;
    this.poolIncluded= false;
    this.basementIncluded= false;
    this.pedestrianFriendly= false;
    this.yearBuilt= 0;
   }
}

export class Condo {
  id: number;

  property: Property;
  elevatorIncluded: boolean;
  storageIncluded: boolean;
  outdoorAreasIncluded: boolean;
  gymIncluded: boolean;
  conciergeIncluded: boolean;
  airConditioning: boolean;
  buildingInsurance: boolean;

  constructor() { 
    this.property = new Property(PropertyType.Condo); // call the Condo enum
    this.elevatorIncluded= false;
    this.storageIncluded= false;
    this.outdoorAreasIncluded= false;
    this.gymIncluded= false;
    this.conciergeIncluded= false;
    this.airConditioning= false;
    this.buildingInsurance= false;
   }
}
