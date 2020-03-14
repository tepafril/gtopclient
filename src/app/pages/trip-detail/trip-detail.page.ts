import { Component, OnInit } from '@angular/core';
import { NavParams } from "@ionic/angular";

@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.page.html',
  styleUrls: ['./trip-detail.page.scss'],
})
export class TripDetailPage implements OnInit {

  distance;
  averageSpeed;
  maxSpeed;

  constructor(
    public navParams:NavParams
  ) {
    this.distance = this.navParams.get('distance');

    this.averageSpeed = this.navParams.get('averageSpeed');

    this.maxSpeed = this.navParams.get('maxSpeed');
  }

  ngOnInit() {
  }

}
