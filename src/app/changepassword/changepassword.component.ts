import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
   imgVisible=false;
  constructor() { }

  ngOnInit(): void {
  }
  changeView1(){
    this.imgVisible=true;
  }

}
