import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDetails } from '../user-details';
import { UserdetailsService } from '../userdetails.service';

@Component({
  selector: 'app-addinfo',
  templateUrl: './addinfo.component.html',
  styleUrls: ['./addinfo.component.css']
})
export class AddinfoComponent implements OnInit {
  imgVisible=false;
  userdet:UserDetails=new UserDetails();
   showdata=false;
   signupForm:any;
  constructor(private userser:UserdetailsService,private router:Router) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData' : new FormGroup({
        'name': new FormControl(null,[Validators.required,Validators.minLength(6), Validators.pattern("[a-zA-Z ]+")]),
        'email': new FormControl(null,[Validators.required, Validators.email]),
        'mobileNo': new FormControl(null,[Validators.required, Validators.pattern("[0-9]{10}")]),
        'fatherName': new FormControl(null,[Validators.required,Validators.minLength(6), Validators.pattern("[a-zA-Z ]+")]),
        'motherName': new FormControl(null,[Validators.required,Validators.minLength(6), Validators.pattern("[a-zA-Z ]+")]),
        'aadharNo': new FormControl(null,[Validators.required, Validators.pattern("[0-9]{12}")]),
        'accNo': new FormControl(null,[Validators.required, Validators.pattern("[0-9]{15}")]),
        'panNo': new FormControl(null,[Validators.required,Validators.minLength(9), Validators.pattern("[a-zA-Z 0-9 ]+")]),
        'ifscNo': new FormControl(null,[Validators.required,Validators.minLength(10), Validators.pattern("[a-zA-Z 0-9 ]+")]),




      })
    })
  }
  changeView1(){
    this.imgVisible=true;
  }
  onSubmit(){
    console.log(this.userdet);
   this.updateDetails();
 }
  updateDetails(){
    this.userser.createEmployee(this.userdet).subscribe(data=>{
      console.log(data);
      this.showdata=true;
    })
    

    
  }

}


