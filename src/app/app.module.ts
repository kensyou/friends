import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { environment } from '../environments/environment';
import { AuthenticationService } from './services/authentication.service';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AuthenticationModule,
    UserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    UserModule,
  ],
  providers: [AngularFireAuth, AngularFireDatabase, AuthenticationService],
  bootstrap: [AppComponent],
  schemas: []
})
export class AppModule { }
