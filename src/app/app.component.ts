import { Component,ViewChild } from '@angular/core';
import { Nav,MenuController,Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { HTTP_PR} from '@angular/http';

//
import { CommentPage } from '../pages/comment/comment';
import { LoginPage } from '../pages/login/login';
import { PlaygroundPage } from '../pages/playground/playground';
import { RegisterPage } from '../pages/register/register';
import { IntroPage } from '../pages/intro/intro';

//provider
import {AuthService} from '../providers/auth-service';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav : Nav;

  rootPage:any = PlaygroundPage;


  CommentPage = CommentPage;
  playgroundPage = PlaygroundPage;
  introPage: any = IntroPage;

  loginPage: any = LoginPage;
  registerPage: any = RegisterPage;

  constructor(public menuCtrl : MenuController,platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen
  ,auth:AuthService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }


  openPage(page){
    this.menuCtrl.close();
    this.nav.setRoot(page);
  }

  logout() {
    this.menuCtrl.close();
   }


}
