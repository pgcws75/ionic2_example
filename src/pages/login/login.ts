import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,Loading,AlertController } from 'ionic-angular';

import { CommentPage } from '../comment/comment';
import { PlaygroundPage } from '../playground/playground';
import { RegisterPage } from '../register/register';


import {AuthService} from '../../providers/auth-service';

import { Http  } from '@angular/http';

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  createSuccess:boolean = false;
  loading: Loading;
  CommentPage = CommentPage;


  registerCredentials = { email: '', password: '' };
 
  constructor(public http:Http,public navCtrl: NavController, public navParams: NavParams,
     private loadingCtrl: LoadingController,
     private alertCtrl: AlertController
   , public authSvr : AuthService) {
  //  this.pageTitle = "로그인";

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  public login() {

    let body = {data1:'1',data2:'2'};

    //

    this.authSvr.login(this.registerCredentials).subscribe(allowed => {
        console.log(JSON.stringify(allowed));
    });


  //  this.showPopup('알림','로그인하세요.');
    //
    // this.registerCredentials.email = 'email';
    // this.registerCredentials.password = 'pass';

  //  this.auth.login(this.registerCredentials);
     //
    //  this.showLoading('Login');
    //  this.auth.login(this.registerCredentials).subscribe(allowed => {
    //     alert(allowed);
    //  });



    // this.auth.login(this.registerCredentials).subscribe(allowed => {
    //   if (allowed) {
    //     this.showError("Login OK!");
    //   } else {
    //     this.showError("Access Denied");
    //   }
    // },
    //   error => {
    //     this.showError(error);
    //   });

//    this.showError("Access Denied");

  }

  //
  // public createAccount() {
  //   this.navCtrl.push(RegisterPage);
  // }
  //
  // showLoading(text) {
  //   this.loading = this.loadingCtrl.create({
  //     content: text,
  //     dismissOnPageChange: true
  //   });
  //   this.loading.present();
  // }
  //
  // showError(text) {
  //   this.loading.dismiss();
  //
  //   let alert = this.alertCtrl.create({
  //     title: 'Fail',
  //     subTitle: text,
  //     buttons: ['OK']
  //   });
  //   alert.present(prompt);
  // }
  //
  //
  //
  //  showPopup(title, text) {
  //   let alert = this.alertCtrl.create({
  //     title: title,
  //     subTitle: text,
  //     buttons: [
  //       {
  //         text: 'OK',
  //         handler: data => {
  //           if (this.createSuccess) {
  //             this.navCtrl.popToRoot();
  //           }
  //         }
  //       }
  //     ]
  //   });
  //   alert.present();
  // }


}
