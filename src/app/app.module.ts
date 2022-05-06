import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { IntroComponent } from './intro/intro.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UhomeComponent } from './uhome/uhome.component';
import { AdduserComponent } from './adduser/adduser.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';
import { AddinfoComponent } from './addinfo/addinfo.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ViewemployeedetailsComponent } from './viewemployeedetails/viewemployeedetails.component';
import { FulldetailsComponent } from './fulldetails/fulldetails.component';
import { UpdateemployeedetailsComponent } from './updateemployeedetails/updateemployeedetails.component';
import { ViewfeedbackComponent } from './viewfeedback/viewfeedback.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AdminloginComponent,
    IntroComponent,
    UserhomeComponent,
    UhomeComponent,
    AdduserComponent,
    ViewemployeeComponent,
    UpdateemployeeComponent,
    AddinfoComponent,
    ChangepasswordComponent,
    FeedbackComponent,
    ViewemployeedetailsComponent,
    FulldetailsComponent,
    UpdateemployeedetailsComponent,
    ViewfeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
