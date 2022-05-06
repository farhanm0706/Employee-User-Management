import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddinfoComponent } from './addinfo/addinfo.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FulldetailsComponent } from './fulldetails/fulldetails.component';

import { IntroComponent } from './intro/intro.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UhomeComponent } from './uhome/uhome.component';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';
import { UpdateemployeedetailsComponent } from './updateemployeedetails/updateemployeedetails.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { ViewemployeedetailsComponent } from './viewemployeedetails/viewemployeedetails.component';
import { ViewfeedbackComponent } from './viewfeedback/viewfeedback.component';

const routes: Routes = [
  {path:'',redirectTo:'intro',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'signup',component:SignupComponent},
  {path:'intro',component:IntroComponent},
  {path:'userhome',component:UserhomeComponent},
  {path:'uhome',component:UhomeComponent},
  {path:'adduser',component:AdduserComponent},
 {path:'viewemployee',component:ViewemployeeComponent},
 {path:'updateemployee/:employeeId',component:UpdateemployeeComponent},
 {path:'addinfo',component:AddinfoComponent},
 {path:'feedback',component:FeedbackComponent},
 {path:'changepassword',component:ChangepasswordComponent},
 {path:'fulldetails/:empId',component:FulldetailsComponent},
 {path:'viewemployeedetails',component:ViewemployeedetailsComponent},
 {path:'updateemployeedetails/:empId',component:UpdateemployeedetailsComponent},
 {path:'viewfeedback',component:ViewfeedbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
