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
  let comentario;
  IMC=this.peso/((this.estatura/100)*(this.estatura/100));
  if(IMC>=5 && IMC<=10)
  {
    comentario="Tramo: Delgadez II"
  }
  if(IMC>10 && IMC<=18.5)
  {
    comentario="Tramo: Delgadez I"
  }
  if(IMC>18.5 && IMC<=24.9)
  {
    comentario="Tramo: Normal"
  }
  if(IMC>24.9 && IMC<=29.9)
  {
    comentario="Tramo: Sobre Peso"
  }
  if(IMC>29.9 && IMC<=34.9)
  {
    comentario="Tramo: Obesidad I"
  }
  if(IMC>34.9 && IMC<=39.9)
  {
    comentario="Tramo: Obesidad II"
  }
  if(IMC>39.9)
  {
    comentario="Tramo: Obesidad III"
  }
  
  let alert = this.alertCtrl.create({
    title: 'Título  Alert',
    message: 'Su IMC es de '+ IMC + ', '+comentario,
    buttons: ['Aceptar']
    });
    alert.present();
}  
}
