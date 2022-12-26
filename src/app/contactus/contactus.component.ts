import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  constructor(private apiService:ApiService) { }
  form:any={};
  ngOnInit() {
  }

  postForm(){
    this.apiService.postData("ContactUs/PostContactUs",this.form).subscribe((res:any)=>{
      //console.log(res);
    })
  }

  formSubmit(){
    alert(this.form.name);
  }

}
