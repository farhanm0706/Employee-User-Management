import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { AddEmployee } from './add-employee';
@Injectable({
  providedIn: 'root'
})
export class AddEmployeeServiceService {
  private url="http://localhost:8080/employeemanagementsystem";

  constructor(private httpClient:HttpClient) { }

  getEmployeeList():Observable<AddEmployee[]>{
    return this.httpClient.get<AddEmployee[]>(`${this.url}/getallemployee`);
  }
  createEmployee(addemp: AddEmployee): Observable<Object>{
    return this.httpClient.post(`${this.url}/addemp`, addemp);
  }

  getEmployeeById(employeeId: number): Observable<AddEmployee>{
    return this.httpClient.get<AddEmployee>(`${this.url}/getemployeebyid/${employeeId}`);
  }

  updateEmployee(employeeId: number, employee: AddEmployee): Observable<Object>{
    return this.httpClient.put(`${this.url}/editemp/${employeeId}`, employee);
  }

  deleteEmployee(employeeId: number): Observable<Object>{
    return this.httpClient.delete(`${this.url}/deleteemp/${employeeId}`);
  }
}
