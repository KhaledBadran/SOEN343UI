import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertiesComponent } from './properties/properties.component';

import { ApartmentDetailsComponent }  from './apartment-details/apartment-details.component';
import { HouseDetailsComponent }  from './house-details/house-details.component';
import { CondoDetailsComponent }  from './condo-details/condo-details.component';

import { ApartmentEditComponent }  from './apartment-edit/apartment-edit.component';
import { HouseEditComponent }  from './house-edit/house-edit.component';
import { CondoEditComponent }  from './condo-edit/condo-edit.component';


import { ApartmentFormComponent }  from './apartment-form/apartment-form.component';
import { HouseFormComponent }  from './house-form/house-form.component';
import { CondoFormComponent }  from './condo-form/condo-form.component';


const routes: Routes = [
  { path: '', redirectTo: '/properties', pathMatch: 'full' },
  { path: 'properties', component: PropertiesComponent },

  { path: 'details/APPARTMENT/:id', component: ApartmentDetailsComponent },
  { path: 'details/HOUSE/:id', component: HouseDetailsComponent },
  { path: 'details/CONDO/:id', component: CondoDetailsComponent },

  { path: 'edit/APPARTMENT/:id', component: ApartmentEditComponent },
  { path: 'edit/HOUSE/:id', component: HouseEditComponent },
  { path: 'edit/CONDO/:id', component: CondoEditComponent },

  { path: 'addApartment', component: ApartmentFormComponent },
  { path: 'addHouse', component: HouseFormComponent },
  { path: 'addCondo', component: CondoFormComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
