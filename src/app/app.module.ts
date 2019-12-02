import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { PropertiesComponent } from './properties/properties.component';

import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';



@NgModule({
  declarations: [
    AppComponent,
    PropertiesComponent,
    NavbarComponent,
    ApartmentFormComponent,
    HouseFormComponent,
    CondoFormComponent,
    ApartmentDetailsComponent,
    HouseDetailsComponent,
    CondoDetailsComponent,
    ApartmentEditComponent,
    CondoEditComponent,
    HouseEditComponent,
    FooterComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
