import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { House } from '../Property';
import { HouseService }  from '../house.service';

@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.css']
})
export class HouseDetailsComponent implements OnInit {

  house: House;

  constructor(
    private route: ActivatedRoute,
    private houseService: HouseService,
    private location: Location) {}

  ngOnInit(): void {
    this.getHouse();
  }

  getHouse(): void {
    console.log('in getApt in apt-details component');
    console.log(this.route.snapshot.paramMap.get('id'));

    const id = this.route.snapshot.paramMap.get('id'); // + converts string to a number.
    console.log('id is');
    console.log(id);

    // get the house data from the House service.
    this.houseService.getHouse(id)
      .subscribe(house => this.house = house);
  }

  goBack(): void {
    this.location.back();
  }

  //save(): void {
  // this.houseService.updateHouse(this.house)
  //   .subscribe(() => this.goBack());
  //}

  delete(): void {
   this.houseService.deleteHouse(this.house).subscribe();
   this.goBack();
  }
}
