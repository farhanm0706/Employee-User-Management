import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  
   one:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }
  divVisible()
  {
    this.one=false;
  }
}
