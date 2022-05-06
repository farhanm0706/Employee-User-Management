import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  private url="http://localhost:8080/employeemanagementsystem/login";
  userId:any;
  loginStatus: boolean = false;
  constructor(
    private http:HttpClient
  ) { }

  public ValidUser(data:Login):Observable<Boolean>{
    return this.http.post<Boolean>(this.url,data);
  }
  setId(data:any){
    this.userId=data;
  }
}
