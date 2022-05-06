import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm:any;

  constructor() { }

  ngOnInit(): void {
    this.signupForm=new FormGroup({
      'userData':new FormGroup({
        'name':new FormControl(null,
          [Validators.required,Validators.minLength(5),
          Validators.pattern("[a-z A-Z]+")]),
        'mobileNo':new FormControl(null,[Validators.required,Validators.pattern("[0-9]{10}")]),
        'email':new FormControl(null,[Validators.required,Validators.email]),
        'password':new FormControl(null,[Validators.required, Validators.pattern("[a-zA-Z0-9@$#&]{8,15}")])  
      })
    })
  }
  onSubmit(){
    if(this.signupForm!=null){
      console.log(this.signupForm);

    }
    else{
      alert("Error");
    }
  }

}
