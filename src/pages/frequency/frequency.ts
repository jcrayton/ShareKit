import { Component, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-frequency',
  templateUrl: 'frequency.html'
})
export class FrequencyPage {

  frequency = 2;

  constructor(public navCtrl: NavController) {
  }


}
