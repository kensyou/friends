import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthenticationService } from '../services/authentication.service'
import { PasswordEqualValidator } from './password-equal-validator';
import { UserService } from '../services/user.service';
import { ErrorAlertComponent } from '../error-alert/error-alert.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthenticationRoutingModule
  ],
  declarations: [LoginComponent, SignupComponent, PasswordEqualValidator, ErrorAlertComponent],
  providers: [AuthenticationService, UserService]
})
export class AuthenticationModule { }
