import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { PropertiesComponent } from './properties/properties.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';

import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { PropertyEditComponent } from './property-edit/property-edit.component';
import { PropertyAddComponent } from './property-add/property-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ApartmentFormComponent } from './apartment-form/apartment-form.component';
import { HouseFormComponent } from './house-form/house-form.component';
import { CondoFormComponent } from './condo-form/condo-form.component';
import { ApartmentDetailsComponent } from './apartment-details/apartment-details.component';
import { HouseDetailsComponent } from './house-details/house-details.component';
import { CondoDetailsComponent } from './condo-details/condo-details.component';
import { ApartmentEditComponent } from './apartment-edit/apartment-edit.component';
import { CondoEditComponent } from './condo-edit/condo-edit.component';
import { HouseEditComponent } from './house-edit/house-edit.component';
import {MatCardModule} from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    PropertiesComponent,
    PropertyDetailsComponent,
    NavbarComponent,
    PropertyEditComponent,
    PropertyAddComponent,
    ApartmentFormComponent,
    HouseFormComponent,
    CondoFormComponent,
    ApartmentDetailsComponent,
    HouseDetailsComponent,
    CondoDetailsComponent,
    ApartmentEditComponent,
    CondoEditComponent,
    HouseEditComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
