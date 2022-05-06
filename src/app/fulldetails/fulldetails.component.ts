import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserdetailsService } from '../userdetails.service';

@Component({
  selector: 'app-fulldetails',
  templateUrl: './fulldetails.component.html',
  styleUrls: ['./fulldetails.component.css']
})
export class FulldetailsComponent implements OnInit {
   
  constructor( private empser:UserdetailsService,private route:ActivatedRoute,private router :Router) { }

  useremp:any;
  empId:any;

  ngOnInit(): void {
    this.empId=this.route.snapshot.params['empId'];
    this.empser.getEmployeeById(this.empId).subscribe(data=>
      {
        this.useremp=data;

      });
      
  }


}
