import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { House } from '../Property';
import { HouseService }  from '../house.service';
@Component({
  selector: 'app-house-edit',
  templateUrl: './house-edit.component.html',
  styleUrls: ['./house-edit.component.css']
})
export class HouseEditComponent implements OnInit {

  house: House;

  constructor(
    private route: ActivatedRoute,
    private houseService: HouseService,
    private location: Location) {}

  ngOnInit(): void {
    this.getHouse();
  }

  getHouse(): void {
    const id = this.route.snapshot.paramMap.get('id'); // + converts string to a number.

    this.houseService.getHouse(id)
      .subscribe(house => this.house = house);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
   this.houseService.updateHouse(this.house)
     .subscribe(() => this.goBack());
  }

  delete(): void {
   this.houseService.deleteHouse(this.house).subscribe();
   this.goBack();
  }

}
