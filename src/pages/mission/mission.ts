import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MissionPage } from '../mission/mission';
import { BasicKit } from '../basic-kit/basic-kit';
import { FrequencyPage } from '../frequency/frequency';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-mission',
  templateUrl: 'mission.html'
})
export class MissionPage {

  constructor(public navCtrl: NavController) {

  }

  loadMission() {
    this.navCtrl.push(MissionPage)
  }

  loadBasicKit() {
    this.navCtrl.push(BasicKit)
  }

  loadHome() {
    this.navCtrl.push(HomePage)
  }

}
