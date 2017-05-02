import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { IntroPage } from './intro';

@NgModule({
  declarations: [
    IntroPage,
  ],
  imports: [
  //  IonicModule.forChild(Intro),
  ],
  exports: [
    IntroPage
  ]
})
export class IntroModule {}
