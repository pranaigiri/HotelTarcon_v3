import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {

  constructor(private ngxLoader: NgxUiLoaderService,private apiService:ApiService) { 
    this.getBookedDates();
  }

  bookedDates:any=[]
  getBookedDates(){
    // https://localhost:44332/api/Bookings
    this.apiService.getData('Bookings').subscribe((res:any)=>{
      console.log(res.result);
      this.bookedDates =res.result;
      sessionStorage.setItem("bookedDates",JSON.stringify(this.bookedDates));
    })
  }

  //CHECKIN AVAILABILITY 
  checkAvailabilty:boolean = true;
  roomsAvailable:boolean = true;


  ngOnInit() {
    setTimeout(() => {
      this.checkAvailabilty = false;
      this.roomsAvailable = false;
    }, 4000);
  }

}
