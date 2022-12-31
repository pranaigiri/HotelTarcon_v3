import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../service/api.service';
import { CountryISO, SearchCountryField } from "ngx-intl-tel-input";

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  constructor(private apiService: ApiService) { 

  }

  ngOnInit() {
  }

  form:any = {};
  CountryISO = CountryISO; //for initial selected country enum in international telephone list
  preferredCountries: CountryISO[] = [CountryISO.India, CountryISO.Bhutan, CountryISO.Nepal, CountryISO.Bangladesh];


  postForm() {
    // this.apiService.postData("ContactUs/PostContactUs", this.form).subscribe((res: any) => {
      console.log(this.form);
    // })
    this.form ={};

  }


}
