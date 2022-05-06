import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../login';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  

 
  // status!: boolean; 

  // errorMessage:String="";
  signupForm: any;

  constructor(private route:Router,private loginService:LoginserviceService) { 
    // this.loginService.loginStatus = false;
  }

  ngOnInit(){
    // if(this.loginService.loginStatus) {
    //   this.route.navigate(['home']);

    // }
    this.signupForm = new FormGroup({
      'userData' : new FormGroup({
        'email': new FormControl(null,[Validators.required, Validators.email]),
        'password': new FormControl(null,[Validators.required, Validators.pattern("[a-z,A-Z,0-9,@$#&*]{8,15}")])
      })
    })
  }

  // userData : Login = new Login;
  // users: Login[] = [];
  // result: Boolean | undefined;
  // onSubmit(email:String,password:String){
    
  //   this.userData.email = email;
  //   this.userData.password = password;

  //   if(this.userData.email==='admin' && this.userData.password==='admin') {
  //     this.loginService.loginStatus = true;
  //     this.route.navigate(['admin']);
  //   }
  //   // console.log(this.userData);
  //   // this.loginService.checkUser(this.userData).subscribe(data=>{
  //   //   this.users = data;
  //   // });
  //   else {
  //     this.loginService.ValidUser(this.userData).subscribe(
  //       loginData=> {
  //       if(loginData) {
  //         this.loginService.loginStatus = true;
  //         this.status = true;
  //         this.loginService.setId(email);
  //         this.route.navigate(['home']);
  //       }
  //       else {
  //         this.status = false;
  //       }
  //       // console.log(this.status);
  //       console.log(this.loginService.loginStatus);
  //     });
  //   }

  // }

  // gotoAdmin(){
  //   this.route.navigate(['signup']);
  // }
    
onSubmit(){
  this.route.navigate(['/uhome']);
}
}
