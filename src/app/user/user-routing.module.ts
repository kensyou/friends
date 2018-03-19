import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from '../services/authentication.guard';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/app-friends-userprofile', pathMatch:
      'full', canActivate: [AuthenticationGuard]
  },
  {
    path: 'app-friends-userprofile', component: UserProfileComponent
    , canActivate: [AuthenticationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthenticationGuard]
})
export class UserRoutingModule { }
