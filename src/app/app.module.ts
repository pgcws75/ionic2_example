import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule }     from '@angular/http';


//page
import { MyApp } from './app.component';
import { CommentPage } from '../pages/comment/comment';
import { LoginPage } from '../pages/login/login';
import { PlaygroundPage } from '../pages/playground/playground';
import { RegisterPage } from '../pages/register/register';
import { IntroPage } from '../pages/intro/intro';


//providers
import {AuthService} from '../providers/auth-service';

@NgModule({
  declarations: [
    MyApp,
    CommentPage,LoginPage,PlaygroundPage,RegisterPage,IntroPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      backButtonText:''

    })
    ,HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CommentPage,LoginPage,PlaygroundPage,RegisterPage,IntroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    ,AuthService
  ]
})
export class AppModule {}
