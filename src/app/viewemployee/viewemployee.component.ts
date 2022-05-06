import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddEmployee } from '../add-employee';
import { AddEmployeeServiceService } from '../add-employee-service.service';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent implements OnInit {
  imgVisible=false;
  addemp: any;

  constructor(private empservice:AddEmployeeServiceService,private router :Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }
  changeView1(){
    this.imgVisible=true;
  }
  private getEmployees()
  {
    this.empservice.getEmployeeList().subscribe(data=>{
      this.addemp = data;
    })
  }
  updateEmployee(employeeId:number){
    this.router.navigate(['updateemployee',employeeId]);

  }

  deleteEmployee(employeeId:number){
    this.empservice.deleteEmployee(employeeId).subscribe(data=>{
      this.getEmployees();
    })
  }

}
