import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//


import { IntroPage } from '../intro/intro';
import { CommentPage } from '../../pages/comment/comment';


//provider
import {AuthService} from '../../providers/auth-service';

/**
 * Generated class for the Playground page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

 import { Http  } from '@angular/http';


@IonicPage()
@Component({
  selector: 'page-playground',
  templateUrl: 'playground.html',
})
export class PlaygroundPage {

  url : string;


  constructor( public navCtrl: NavController, public navParams: NavParams,public auth : AuthService) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Playground');

    this.auth.test();

  }

  addComment() {
    this.navCtrl.push(CommentPage);
  }
}
