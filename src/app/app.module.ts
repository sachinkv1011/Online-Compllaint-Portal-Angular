import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { AddComplaintComponent } from './add-complaint/add-complaint.component';
import { UsernavComponent } from './usernav/usernav.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { AdminViewAllComplaintsComponent } from './admin-view-all-complaints/admin-view-all-complaints.component';

const myRoute:Routes=[
  {
    path:"",component:AdminLoginComponent
  },
  {
    path:"registration",component:UserRegistrationComponent
  },
  {
    path:"userlogin",component:UserLoginComponent
  },
  {
    path:"userprofile",component:ViewProfileComponent
  },
  {
    path:"addcomplaint",component:AddComplaintComponent
  },
  {
    path:"viewAllComplaint",component:AdminViewAllComplaintsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserRegistrationComponent,
    UserLoginComponent,
    ViewProfileComponent,
    AddComplaintComponent,
    UsernavComponent,
    AdminNavComponent,
    AdminViewAllComplaintsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myRoute),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
