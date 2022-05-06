import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Feedback } from '../feedback';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  imgVisible=false;
  showdata=false;
  feedback:Feedback=new Feedback();
  signupForm: any;
  constructor( private feedser:FeedbackService) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData' : new FormGroup({
        'name': new FormControl(null,[Validators.required,Validators.minLength(6), Validators.pattern("[a-zA-Z ]+")]),
        'email': new FormControl(null,[Validators.required, Validators.email]),
        'suggestion': new FormControl(null,[Validators.required,Validators.minLength(20), Validators.pattern("[a-zA-Z .,@ ]+")]),
        




      })
    })
  }
  changeView1(){
 this.imgVisible=true;
  }
  onSubmit(){
    this.feedser.createFeedback(this.feedback).subscribe(data=>{
      console.log(data);
      this.showdata=true;

    })

  }

}
