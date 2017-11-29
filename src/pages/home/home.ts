import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  Location : String;
  goingTo : String;

  transportingBy : String;
  
  constructor(public navCtrl: NavController) {

  }

}
