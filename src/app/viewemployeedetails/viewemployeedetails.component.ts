import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdetailsService } from '../userdetails.service';

@Component({
  selector: 'app-viewemployeedetails',
  templateUrl: './viewemployeedetails.component.html',
  styleUrls: ['./viewemployeedetails.component.css']
})
export class ViewemployeedetailsComponent implements OnInit {
   useremp:any;
   
  constructor(private empser:UserdetailsService,private router :Router) { }

  ngOnInit(): void {
    this.getEmployees();
    
  }
  
  private getEmployees()
  {
    this.empser.getEmployeeList().subscribe(data=>{
      this.useremp = data;
    })
  }
 
  updateEmployeedet(empId:number){
    this.router.navigate(['/updateemployeedetails',empId]);

  }

  deleteEmployee(empId:number){
    this.empser.deleteEmployee(empId).subscribe(data=>{
      this.getEmployees();
    })
  }
  viewEmployeeDetails(empId:number){
this.router.navigate(['fulldetails',empId]);
  }
 




}
