import { Component, OnInit } from '@angular/core';
import { AddEmployee } from '../add-employee';
import { Router } from '@angular/router';
import { AddEmployeeServiceService } from '../add-employee-service.service';
@Component({
  selector: 'app-uhome',
  templateUrl: './uhome.component.html',
  styleUrls: ['./uhome.component.css']
})
export class UhomeComponent implements OnInit {

  imgVisible=true; 
  form=false;
  form2=false;
  form3=false;
  
   homeVisible()
   {
     this.form=true;
     this.imgVisible=false;
     this.form2=false;
     this.form3=false;
     
   }
 
   changeView()
   {
     this.imgVisible=false;
   }
   changeView1()
   {
     this.imgVisible=true;
     this.form=false;
      this.form3=false;
      this.form2=false;

   }
   fun(){

    alert("Thank You for respense.We will be in soon contact you!!!");
    }
    updateDetails(){
      alert("Updated Successfully");
    }
    contactVisible()
    {
      this.form2=true;
      this.imgVisible=false;
      this.form=false;
      this.form3=false;

    }
    passwordVisible()
    {
      this.form3=true;
      this.form=false;
      this.form2=false;
      this.imgVisible=false;
    }
  ngOnInit(): void {
  }

  

}
