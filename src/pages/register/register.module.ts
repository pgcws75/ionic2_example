import { NgModule } from '@angular/core';
//import { IonicModule } from 'ionic-angular';
import { RegisterPage } from './register';

@NgModule({
  declarations: [
    RegisterPage,
  ],
  imports: [
//    IonicModule.forChild(Register),
  ],
  exports: [
    RegisterPage
  ]
})
export class RegisterModule {}
