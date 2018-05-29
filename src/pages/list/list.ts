import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
estatura: any;
peso: any;

  constructor(public navCtrl: NavController, public navParams: NavParams
  , public alertCtrl: AlertController) {
   
  }

calcular()
{
  let IMC;
  IMC=this.peso/((this.estatura/100)*(this.estatura/100));
  let alert = this.alertCtrl.create({
    title: 'Título  Alert',
    message: 'Su IMC es de '+IMC,
    buttons: ['Aceptar']
    });
    alert.present();
}  
}
