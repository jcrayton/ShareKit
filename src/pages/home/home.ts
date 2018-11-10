import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MissionPage } from '../mission/mission';
import { BasicKit } from '../basic-kit/basic-kit';


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
}
