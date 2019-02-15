import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs'; 
import { JobsPage } from '../pages/jobs/jobs';
import { PcPage } from '../pages/pc/pc';
import { ItemPage }  from '../pages/item/item';
import { SearchPage } from '../pages/search/search';
import { FavoritesPage } from '../pages/favorites/favorites';

import { FavsProvider } from '../providers/favs/favs';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    JobsPage,
    PcPage,
    ItemPage,
    SearchPage,
    FavoritesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    JobsPage,
    PcPage,
    ItemPage,
    SearchPage,
    FavoritesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FavsProvider
  ]
})
export class AppModule {}
