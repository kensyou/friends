import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { User } from '../../services/user';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'friends-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  errorMessage: string;
  showError: boolean;
  user: User;
  constructor(private authService: AuthenticationService, private userService: UserService, private router: Router
    , private angularFireAuth: AngularFireAuth) {
    this.angularFireAuth.auth.onAuthStateChanged(user => {
      if (user) {
        this.getUserInfo(user.uid);
      }
    })
  }

  ngOnInit() {
  }
  onLogin(loginFormData): void {
    debugger;
    this.authService.login(loginFormData.value.email,
      loginFormData.value.password).then((userInfo) => {
        // Login user
        const uid: string = userInfo.uid;
        this.getUserInfo(uid);
      }).catch((error) => {
        this.errorMessage = error.message;
        this.showError = true;
      });
  }
  private getUserInfo(uid: string) {
    this.userService.getUser(uid).subscribe(snapshot => {
      this.user = snapshot;
    });
  }
  onReset(resetFormData): void {
    this.authService.resetPassword(resetFormData.value.email).then(() =>   
    {
      alert('Reset instruction sent to your mail');
    }).catch((error) => {
      this.errorMessage = error.message;
      this.showError = true;
    });
  }
}
