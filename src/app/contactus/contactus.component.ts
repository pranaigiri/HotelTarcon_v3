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

  form: any = {};
  CountryISO = CountryISO; //for initial selected country enum in international telephone list
  preferredCountries: CountryISO[] = [CountryISO.India, CountryISO.Bhutan, CountryISO.Nepal, CountryISO.Bangladesh];


  postForm() {
    console.log(this.form);
    var sendObject={
      contactus_form_subject:"",
      contactus_form_message:"",
      contactus_form_name:"",
      contactus_form_email:"",
      contactus_form_phone:"",
      contactus_form_countrycode:""
    }
    sendObject.contactus_form_subject=this.form.subject
    sendObject.contactus_form_message=this.form.message
    sendObject.contactus_form_name=this.form.name
    sendObject.contactus_form_email=this.form.email
    sendObject.contactus_form_phone=this.form.phone.e164Number
    sendObject.contactus_form_countrycode=this.form.phone.dialCode
    console.log(sendObject);
    
    this.apiService.postData("https://localhost:7210/api/Common/PostContactUsForm", sendObject).subscribe((res: any) => {
      console.log(sendObject);
    })
    this.form = {};

  }


}
