import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DietaPage } from '../pages/dieta/dieta';
import { EjercicioPage } from '../pages/ejercicio/ejercicio';
import { DescansoPage } from '../pages/descanso/descanso';
import { Ens1Page } from '../pages/ens1/ens1';
import { Ens2Page } from '../pages/ens2/ens2';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DietaPage,
    EjercicioPage,
    DescansoPage,
    Ens1Page,
    Ens2Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DietaPage,
    EjercicioPage,
    DescansoPage,
    Ens1Page,
    Ens2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
