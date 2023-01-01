import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-policy-header',
  templateUrl: './policy-header.component.html',
  styleUrls: ['./policy-header.component.css']
})
export class PolicyHeaderComponent implements OnInit {

  //response from parent
  @Input() expectedHeaderName: any;

  constructor() { }

  ngOnInit() {
  }

}
