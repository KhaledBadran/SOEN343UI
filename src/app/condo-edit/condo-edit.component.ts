import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Condo } from '../Property';
import { CondoService }  from '../condo.service';
@Component({
  selector: 'app-condo-edit',
  templateUrl: './condo-edit.component.html',
  styleUrls: ['./condo-edit.component.css']
})
export class CondoEditComponent implements OnInit {

  condo: Condo;

  constructor(
    private route: ActivatedRoute,
    private condoService: CondoService,
    private location: Location) {}

  ngOnInit(): void {
    this.getCondo();
  }

  getCondo(): void {
    const id = this.route.snapshot.paramMap.get('id'); 

    this.condoService.getCondo(id)
      .subscribe(condo => this.condo = condo);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
   this.condoService.updateCondo(this.condo)
     .subscribe(() => this.goBack());
  }

  delete(): void {
   this.condoService.deleteCondo(this.condo).subscribe();
   this.goBack();
  }

}
