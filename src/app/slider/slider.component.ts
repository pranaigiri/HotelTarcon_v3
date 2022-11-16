import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, HostListener, NgZone, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation, Swiper, SwiperOptions, Virtual } from "swiper";
import { SwiperComponent } from 'swiper/angular';
import { EventEmitterService } from '../event-emitter.service';

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Virtual]);

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SliderComponent implements OnInit {

  constructor(private router: Router, private eventEmitterService: EventEmitterService, private ngZone: NgZone,private scroller:ViewportScroller) {

  }

  //CALL NAV COMPONENT FUNCTION
  updateNavItems(paginationName: any) {
    this.eventEmitterService.updateNavItems(paginationName);
  }

  //CALL CHECKIN FORM COMPONENT FUNCTION
  updateCheckInForm(paginationName: any) {
    this.eventEmitterService.updateCheckInForm(paginationName);
  }

  getInitialIndex() {
    return location.pathname == "/bar" ? 3 : location.pathname == "/restaurant" ? 2 : location.pathname == "/hotel" ? 1 : 0;
  }

  //KEEP TRACK OF UPDATED SLIDE
  activeSlideIndex: number = this.getInitialIndex();

  //SWIPER SETTINGS
  config: SwiperOptions = {
    slidesPerView: 1,
    initialSlide: this.getInitialIndex(),
    navigation: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        let string = '<span id="' + className + index + '" class="' + className + '">';
        if (index == 0) {
          string += 'HOME</span>'
        }
        if (index == 1) {
          string += 'HOTEL</span>'
        }
        if (index == 2) {
          string += 'RESTAURANT</span>'
        }
        if (index == 3) {
          string += 'BAR</span>'
        }

        return string;
      }
    },
    on: {
      slideChange: index => {
        this.ngZone.run(() => this.updateSlideAndPage(index.activeIndex));
      },
    },
    scrollbar: { draggable: true },
    loop: true
  };



  ngOnInit() {

  }

  //UPDATE SLIDE AND PAGE ON PAGINATION CLICK
  updateSlideAndPage(slideIndex: any) {
    console.log("ru", this.router.url);
    console.log("lp", location.pathname);
    console.log("slideindex",slideIndex);
    slideIndex == 4 ? this.router.navigate(['/', 'bar']) : slideIndex == 3 ? this.router.navigate(['/', 'restaurant']) : slideIndex == 2 ? this.router.navigate(['/', 'hotel']) : this.router.navigate(['/', '/']);
  }


  @HostListener('click', ['$event']) onMouseClick(event: any) {
    //console.log(event.target.id);
    this.updateNavItems(event.target.id);
    this.updateCheckInForm(event.target.id);

  }


  scrollFunc(obj:any){
this.scroller.scrollToAnchor(obj)
  }



}