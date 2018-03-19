import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../services/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupComponent implements OnInit {
  errorMessage: string;
  showError: boolean;

  constructor(private authService: AuthenticationService, private userService: UserService) { }

  ngOnInit() {
  }
  onSignup(signupFormData): void {
    this.authService.signup(signupFormData.value.email, signupFormData.value.password).then((userInfo) => {
       // Register the new user
       const user: User = new User(signupFormData.value.email,
        signupFormData.value.name, signupFormData.value.mobile, 
        userInfo.uid, 0, '');
     this.writeNewUser(user);
    }).catch((error) => {
      this.showError = true;
      this.errorMessage = error.message;
    });
  }
  private writeNewUser(user: User): void {
    this.userService.addUser(user);
 }
}
