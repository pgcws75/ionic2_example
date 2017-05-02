import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController , Loading } from 'ionic-angular';

import { PlaygroundPage } from '../playground/playground';


/**
 * Generated class for the Comment page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html',
})
export class CommentPage {
  loading: Loading;

  constructor(public navCtrl: NavController, public navParams: NavParams,private loadingCtrl : LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Comment');
  }

  writeComment() {

    // let obj = this;
    // this.showLoading();
    // setTimeout(function () {
    //   obj.navCtrl.setRoot(PlaygroundPage);
    // },1000);
    this.showLoading();
    this.navCtrl.setRoot(PlaygroundPage);
  }


  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }


}
