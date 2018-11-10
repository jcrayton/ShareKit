import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MissionPage } from '../mission/mission';
import { BasicKit } from '../basic-kit/basic-kit';
import { FrequencyPage } from '../frequency/frequency';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  loadMission() {
    this.navCtrl.push(MissionPage)
  }

  loadBasicKit() {
    this.navCtrl.push(BasicKit)
  }

  loadFrequency() {
    this.navCtrl.push(FrequencyPage)
  }
}
