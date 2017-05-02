import { NgModule } from '@angular/core';
//import { IonicModule } from 'ionic-angular';
import { CommentPage } from './comment';

@NgModule({
  declarations: [
    CommentPage,
  ],
  imports: [
  //  IonicModule.forChild(Comment),
  ],
  exports: [
    CommentPage
  ]
})
export class CommentModule {}
