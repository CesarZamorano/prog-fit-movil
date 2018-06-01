import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Ens1Page } from '../ens1/ens1';
import { Ens2Page } from '../ens2/ens2';

@Component({
  selector: 'page-home',
  templateUrl: 'dieta.html'
})
export class DietaPage {

  constructor(public navCtrl: NavController) {
  }
    pasarpagina(){

      this.navCtrl.push(Ens1Page)
    }
    pasarpagina1(){

      this.navCtrl.push(Ens2Page)
    }
  }