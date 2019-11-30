import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertiesComponent } from './properties/properties.component';

import { PropertyDetailsComponent }  from './property-details/property-details.component';
import { ApartmentDetailsComponent }  from './apartment-details/apartment-details.component';

import { PropertyEditComponent }  from './property-edit/property-edit.component';
import { ApartmentFormComponent }  from './apartment-form/apartment-form.component';
import { HouseFormComponent }  from './house-form/house-form.component';
import { CondoFormComponent }  from './condo-form/condo-form.component';


const routes: Routes = [
  { path: '', redirectTo: '/properties', pathMatch: 'full' },
  { path: 'properties', component: PropertiesComponent },

  { path: 'details/:id', component: ApartmentDetailsComponent },
  { path: 'details/APPARTMENT/:id', component: ApartmentDetailsComponent },

  { path: 'edit/:id', component: PropertyEditComponent },
  { path: 'addApartment', component: ApartmentFormComponent },
  { path: 'addHouse', component: HouseFormComponent },
  { path: 'addCondo', component: CondoFormComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
