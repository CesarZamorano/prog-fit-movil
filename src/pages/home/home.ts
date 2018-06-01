import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { List1Page } from '../list1/list1';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }
    pasarpagina(){

      this.navCtrl.push(ListPage)
    }
    pasarpagina1(){

      this.navCtrl.push(List1Page)
    }
  }