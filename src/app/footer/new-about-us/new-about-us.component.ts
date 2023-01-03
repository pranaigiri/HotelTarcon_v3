import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-about-us',
  templateUrl: './new-about-us.component.html',
  styleUrls: ['./new-about-us.component.css']
})
export class NewAboutUsComponent implements OnInit {

    //HEADER NAME
    headerName:string = "ABOUT US"


  constructor() { }

  ngOnInit() {
  }

}
