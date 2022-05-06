import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddEmployee } from '../add-employee';
import { AddEmployeeServiceService } from '../add-employee-service.service';

@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.css']
})
export class UpdateemployeeComponent implements OnInit {
  employeeId:any;
  addemp:AddEmployee=new AddEmployee();
  signupForm: any;
  constructor(private empser:AddEmployeeServiceService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.employeeId=this.route.snapshot.params['employeeId'];
    this.empser.getEmployeeById(this.employeeId).subscribe(data=>
      {
        this.addemp=data;

      });

      
  
    this.signupForm = new FormGroup({
      'userData' : new FormGroup({
        'email': new FormControl(null,[Validators.required, Validators.email]),
        'password': new FormControl(null,[Validators.required, Validators.pattern("[a-z,A-Z,0-9,@$#&*]{8,15}")])
      })
    })
  
      
  }
 
  onSubmit(){
    this.empser.updateEmployee(this.employeeId, this.addemp).subscribe( data =>{
      this.goToEmployeeList();
    });
  }

  goToEmployeeList(){
    this.router.navigate(['/viewemployee']);
  }
  

}
