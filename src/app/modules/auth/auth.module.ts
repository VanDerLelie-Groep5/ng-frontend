import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SigninComponent } from './signin/signin.component';



@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    SharedModule,
  ]
})
export class AuthModule { }
