import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDetails } from '../user-details';
import { UserdetailsService } from '../userdetails.service';

@Component({
  selector: 'app-updateemployeedetails',
  templateUrl: './updateemployeedetails.component.html',
  styleUrls: ['./updateemployeedetails.component.css']
})
export class UpdateemployeedetailsComponent implements OnInit {

  empId:any;
  userdet:UserDetails=new UserDetails();
  signupForm: any;
  constructor(private empser:UserdetailsService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.empId=this.route.snapshot.params['empId'];
    this.empser.getEmployeeById(this.empId).subscribe(data=>
      {
        this.userdet=data;

      });
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
  onSubmit(){
    this.empser.updateEmployee(this.empId, this.userdet).subscribe( data =>{
      this.goToEmployeeList();
    });
  }

  goToEmployeeList(){
    this.router.navigate(['/viewemployeedetails']);
  }
}
