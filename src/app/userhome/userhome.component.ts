import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadStart, Router } from '@angular/router';
@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  imgVisible=true; 
  form=false;
  form2=false;
  form3=false;
  constructor() {
    
   }
   homeVisible()
   {
     this.form=true;
     this.imgVisible=false;
     this.form2=false;
     this.form3=false
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


