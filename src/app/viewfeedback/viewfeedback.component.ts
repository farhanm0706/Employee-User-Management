import { Component, OnInit } from '@angular/core';
import { Feedback } from '../feedback';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-viewfeedback',
  templateUrl: './viewfeedback.component.html',
  styleUrls: ['./viewfeedback.component.css']
})
export class ViewfeedbackComponent implements OnInit {

  constructor(private fs:FeedbackService) { }
   feedback:any;
  
  ngOnInit(): void {
    this.getEmployees();
  }
 
  private getEmployees()
  {
    this.fs.getFeedbackList().subscribe(data=>{
      this.feedback = data;
    })
  }
 

  deleteFeedback(employeeId:number){
    this.fs.deleteFeedbackById(employeeId).subscribe(data=>{
      this.getEmployees();
    })
  }

}
