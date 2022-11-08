import { Component, HostListener, OnInit } from '@angular/core';
import {  Router, Event, NavigationEnd, NavigationError, NavigationStart } from '@angular/router';
import { EventEmitterService } from '../event-emitter.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  allNavMenus:any = {
    defaultNav:[
      {navMenu:"Home", link:"section-home"},
      {navMenu:"Services", link:"section-service"},
      {navMenu:"About", link:"section-about"},
      {navMenu:"Contact", link:"section-contact"}
    ],
    hotelNav:[
      {navMenu:"Home", link:"section-home"},
      {navMenu:"Rooms", link:"section-rooms"},
      {navMenu:"Nearzone", link:"section-nearbypoints"},
      {navMenu:"Availability", link:"section-checkavailability"},
      {navMenu:"Contact", link:"section-contact"}
    ],
    restaurantNav:[
      {navMenu:"Home", link:"section-home"},
      {navMenu:"Food Menu", link:"section-foodmenu"},
      {navMenu:"Contact", link:"section-contact"}
    ],
    barNav:[
      {navMenu:"Home", link:"section-home"},
      {navMenu:"Bar Menu", link:"section-barmenu"},
      {navMenu:"Contact", link:"section-contact"}
    ]
  };

      
  
  
      navMenus:any = [];

      //RELOAD NAVIGATION LINKS
      loadNavItems(paginationName:any){
        this.navMenus = [];
        if(location.pathname == "/restaurant" || this.router.url == '/restaurant' || paginationName == 'swiper-pagination-bullet1'){
          this.navMenus = this.allNavMenus.restaurantNav;
        }
        else if(location.pathname == "/hotel" || this.router.url == '/hotel' || paginationName == 'swiper-pagination-bullet0'){
          this.navMenus = this.allNavMenus.hotelNav;
        }
        else if(location.pathname == "/bar" || this.router.url == '/bar' || paginationName == 'swiper-pagination-bullet2'){
          this.navMenus = this.allNavMenus.barNav;
        }else{
          this.navMenus = this.allNavMenus.defaultNav;
        }
      }



  constructor(private router: Router, private eventEmitterService: EventEmitterService) {
      
   }

   



  ngOnInit() {

    this.loadNavItems(null);

    // console.log("Comp Name",location.pathname);
    // if(location.pathname != "/"){
    //   document.querySelector(".c-navbar")?.classList.add("shadow-lg", "expand");
    //   document.querySelector(".bookBtn")?.classList.remove("btn-outline-primary");
    //   document.querySelector(".bookBtn")?.classList.add("btn-primary")
    // }

    if (this.eventEmitterService.subsVar==undefined) {    
      this.eventEmitterService.subsVar = this.eventEmitterService.    
      updateNavItemsInvoke.subscribe((res:any) => {    
        this.updateNavItems(res.value);
        //console.log("res",res);
      });    
    } 

  }

      //EVENT EMITTER
      updateNavItems(paginationName:any){
        this.loadNavItems(paginationName);
      }



    //Make navbar transparent/solid on scroll
    flag:boolean = false;
    @HostListener('window:scroll', ['$event']) onScrollEvent($event : any){
      //console.log(window.scrollY);
        let navbar = <HTMLDivElement>document.querySelector(".c-navbar");
        let bookBtn = <HTMLButtonElement>document.querySelector(".bookBtn");
        let navmenu:any = document.querySelector(".nav-menu");
        let navLogo:any = document.querySelector(".tarcon-logo");

        // if(location.pathname == "/"){
          if(window.scrollY < 200 && window.innerWidth > 990 && this.flag == false){
            this.flag = true;
            navbar.classList.remove("shadow-lg", "expand");
            bookBtn.classList.remove("btn-primary");
            bookBtn.classList.add("btn-outline-primary");

          } if(window.scrollY > 200 && this.flag == true || window.scrollY > 200 ){
            this.flag = false;
            navbar.classList.add("shadow-lg", "expand");
            bookBtn.classList.remove("btn-outline-primary");
            bookBtn.classList.add("btn-primary");
          }
        // }
  
  
  
    }
  
  
    //toggle phone navbar
    togglePhoneNav($event:any){
      
  
      let burger:any = $event.target;
      let phonenav:any = document.querySelector(".phone-nav");
  
      burger.classList.add("c-rotate");
  
      if(burger.classList.contains("fa-bars")){
        phonenav.style.display = "block";
        burger.classList.remove("fa-bars");
        burger.classList.add("fa-xmark");
      }else{
        burger.classList.remove("fa-xmark");
        burger.classList.add("fa-bars");
        setTimeout(() => {
          phonenav.style.display = "none";
        }, 400);
      }
  
      setTimeout(() => {
        burger.classList.remove("c-rotate");
      }, 500);
  

      setTimeout(() => {
        document.querySelector(".phone-nav")?.classList.toggle("opened");
      }, 10);
  
    }




}
