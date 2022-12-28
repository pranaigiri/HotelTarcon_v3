import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../service/api.service';
import { CountryISO, SearchCountryField } from "ngx-intl-tel-input";
// import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  
  wordCount: any;
  @ViewChild('text') text!: ElementRef;
  words: any;
  wordCounter() {
    this.wordCount = this.text ? this.text.nativeElement.value.split(/\s+/) : 0;
    this.words = this.wordCount ? this.wordCount.length : 0;
  }

  constructor(private apiService: ApiService) { 
    // this.create();
  }

  ngOnInit() {
  }

  form: any = {};
  

  isSubmit = false;

  separateDialCode = false;
  SearchCountryField = SearchCountryField;
  // TooltipLabel = TooltipLabel;
  CountryISO = CountryISO;
  preferredCountries: CountryISO[] = [
    CountryISO.UnitedStates,
    CountryISO.UnitedKingdom
  ];

  postForm() {
    this.apiService.postData("ContactUs/PostContactUs", this.form).subscribe((res: any) => {
      //console.log(res);
    })
  }

  formSubmit() {
    alert(this.form.name);
  }
  
  // create() {
  //   this.form = this.formBuilder.group({
  //     name: ["", Validators.required],
  //     email: ["", [Validators.required, Validators.email]],
  //     username: ["", Validators.required],
  //     password: ["", Validators.required],
  //     address: ["", Validators.required],
  //     phone: [""]
  //   });
  // }

}
