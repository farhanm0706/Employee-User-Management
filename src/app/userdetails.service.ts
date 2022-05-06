import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDetails } from './user-details';

@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {
  private url="http://localhost:8080/employeemanagementsystem";


  constructor(private httpClient:HttpClient) { }
  
  getEmployeeList():Observable<UserDetails[]>{
    return this.httpClient.get<UserDetails[]>(`${this.url}/getallemployeeDetails`);
  }
  createEmployee(userdet: UserDetails): Observable<Object>{
    return this.httpClient.post(`${this.url}/addempdetails`, userdet);
  }

  getEmployeeById(empId: number): Observable<UserDetails>{
    return this.httpClient.get<UserDetails>(`${this.url}/getemployeedetailsbyid/${empId}`);
  }

  updateEmployee(empId: number, userdet: UserDetails): Observable<Object>{
    return this.httpClient.put(`${this.url}/editempdetails/${empId}`, userdet);
  }

  deleteEmployee(empId: number): Observable<Object>{
    return this.httpClient.delete(`${this.url}/deleteempdetails/${empId}`);
  }

}
