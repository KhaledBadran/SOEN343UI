import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertiesComponent } from './properties/properties.component';
import { PropertyDetailsComponent }  from './property-details/property-details.component';
import { PropertyEditComponent }  from './property-edit/property-edit.component';
import { PropertyAddComponent }  from './property-add/property-add.component';


const routes: Routes = [
  { path: '', redirectTo: '/properties', pathMatch: 'full' },
  { path: 'properties', component: PropertiesComponent },
  { path: 'details/:id', component: PropertyDetailsComponent },
  { path: 'edit/:id', component: PropertyEditComponent },
  { path: 'add', component: PropertyAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
