import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feedback } from './feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private url="http://localhost:8080/employeemanagementsystem";
  constructor( private httpclient:HttpClient)  { }
  getFeedbackList():Observable<Feedback[]>{
    return this.httpclient.get<Feedback[]>(`${this.url}/getallfeedback`);
  }
  createFeedback(userdet: Feedback): Observable<Object>{
    return this.httpclient.post(`${this.url}/addfeedbackdetails`, userdet);
  }



  deleteFeedbackById(empId: number): Observable<Object>{
    return this.httpclient.delete(`${this.url}/deletefeedback/${empId}`);
  }
}
