import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthModule } from './routing-login.module';
import { MaterialModule } from '../material/material.module';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SigninComponent } from './components/sign-in-form/signin.component';



@NgModule({
  declarations: [
    LoginPageComponent,
    SigninComponent,
  ],
  exports:[
    LoginPageComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AuthModule,

    ReactiveFormsModule,
  ]
})
export class LoginModule { }
