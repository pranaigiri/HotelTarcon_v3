import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

    //HEADER NAME
    headerName:string = "FAQ"

  constructor() { }

  ngOnInit() {
  }

}
