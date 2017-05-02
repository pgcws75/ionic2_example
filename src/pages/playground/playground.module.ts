import { NgModule } from '@angular/core';
//import { IonicModule } from 'ionic-angular';
import { PlaygroundPage } from './playground';

@NgModule({
  declarations: [
    PlaygroundPage,
  ],
  imports: [
  //  IonicModule.forChild(Playground),
  ],
  exports: [
    PlaygroundPage
  ]
})
export class PlaygroundModule {}
