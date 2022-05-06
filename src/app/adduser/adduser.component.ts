import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddEmployee } from '../add-employee';
import { AddEmployeeServiceService } from '../add-employee-service.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  imgVisible=false;
  signupForm:any;
  addemployee:AddEmployee=new AddEmployee();


  constructor(private addemployeeservice:AddEmployeeServiceService,private router:Router) {
    
   }
   changeView1(){
    this.imgVisible=true;
  }
   saveEmployee()
   {
     this.addemployeeservice.createEmployee(this.addemployee).subscribe(data=>
       {
         console.log(data);
         this.goToEmployeeList();
       })
   }
 goToEmployeeList()
 {
   this.router.navigate(['/viewemployee']);
 }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData' : new FormGroup({
        'email': new FormControl(null,[Validators.required, Validators.email]),
        'password': new FormControl(null,[Validators.required, Validators.pattern("[a-z,A-Z,0-9,@$#&*]{8,15}")])
      })
    })
  }
  onSubmit(){
    console.log(this.addemployee);
   this.saveEmployee();
 }
}

