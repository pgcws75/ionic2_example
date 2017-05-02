import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,Loading } from 'ionic-angular';

import { LoginPage } from '../../pages/login/login';
import { PlaygroundPage } from '../playground/playground';


/**
 * Generated class for the Register page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  loading: Loading;

  constructor(public navCtrl: NavController, public navParams: NavParams,private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Register');
  }

    openLoginPage(event) {
      event.preventDefault();

      this.navCtrl.push(LoginPage);
    }

    createCheck() {
      let obj = this;
      this.showLoading();
      setTimeout(function () {
        obj.navCtrl.setRoot(PlaygroundPage);
      },1000);
    }

    showLoading() {
      this.loading = this.loadingCtrl.create({
        content: 'Please wait...',
        dismissOnPageChange: true
      });
      this.loading.present();
    }

}
