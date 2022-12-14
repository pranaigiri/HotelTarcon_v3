import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { EventEmitterService } from 'src/app/event-emitter.service';


@Component({
  selector: 'app-checkinform',
  templateUrl: './checkinform.component.html',
  styleUrls: ['./checkinform.component.scss']
})
export class CheckinformComponent implements OnInit {


    //VARIABLES FOR CALENDAR
    yesterday = new Date();


  constructor(public router: Router, private eventEmitterService: EventEmitterService) { 

  }

  ngOnInit() {

    //SUBSCRIBE EMITTER
    if (this.eventEmitterService.subsVar2 == undefined) {    
      this.eventEmitterService.subsVar2 = this.eventEmitterService.    
      updateNavItemsInvoke.subscribe((res:any) => {    
        this.updateCheckInForm(res);
        //console.log("res",res);
      });    
    } 

  }

    //EVENT EMITTER FUNCTION
    
    updateCheckInForm(paginationName:any){
      // let allCheckInForms = document.querySelectorAll(".block-form");

      // allCheckInForms.forEach(checkInForm => {
      //  checkInForm.classList.remove("active");
      // });
      // allCheckInForms[1].parentElement?.setAttribute("style","width:100%");
      // if(paginationName == "swiper-pagination-bullet2" || location.pathname == "/restaurant"){
      //   allCheckInForms[1].parentElement?.setAttribute("style","width:auto");
      //   allCheckInForms[1].classList.add("active");
      // }else if(paginationName == "swiper-pagination-bullet3" || location.pathname == "/bar"){
      //   allCheckInForms[1].parentElement?.setAttribute("style","width:auto");
      //   allCheckInForms[2].classList.add("active");
      // }else{
      //   allCheckInForms[0].classList.add("active");
      // }
    }


    button = 'Check Availability';
    isLoading = false;
    click() {
      this.isLoading = true;
      this.button = 'Hold your bags..';
  
      setTimeout(() => {
        this.isLoading = false;
        this.button = 'Check Availability';

        //console.log('Done loading');

      }, 2000)
    }

}
