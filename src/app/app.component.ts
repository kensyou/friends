import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor(private authenticationService: AuthenticationService, private router: Router){}

  private navigateToUserProfile() {
    this.router.navigateByUrl('/app-friends-userprofile');
  }
}
