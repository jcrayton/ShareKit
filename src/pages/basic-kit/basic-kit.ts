import {Component} from "@angular/core";
import {NavController} from 'ionic-angular';

import { HomePage } from '../home/home';
import { MissionPage } from '../mission/mission';
import { FrequencyPage } from '../frequency/frequency';

@Component({
  selector: 'basic-kit',
  templateUrl: 'basic-kit.html'
})
export class BasicKit {

  constructor(public navCtrl: NavController) {

  }

  loadMission() {
    this.navCtrl.push(MissionPage)
  }

  loadHome() {
    this.navCtrl.push(HomePage)
  }

  loadFrequency() {
    this.navCtrl.push(FrequencyPage)
  }
}
