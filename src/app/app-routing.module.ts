import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { LoginComponent } from './authentication/login/login.component';
const routes: Routes = [
    {
        path: 'app-friends-about',
        loadChildren: 'app/about/about.module#AboutModule'
    },
    { path: 'auth', loadChildren: 'app/authentication/authentication.module#AuthenticationModule' },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: '**', component: NotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
