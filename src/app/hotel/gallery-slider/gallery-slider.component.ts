import { Component, ViewEncapsulation, ViewChild, OnInit, Input } from "@angular/core";
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);
@Component({
  selector: 'app-gallery-slider',
  templateUrl: './gallery-slider.component.html',
  styleUrls: ['./gallery-slider.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GallerySliderComponent implements OnInit {

  thumbsSwiper: any;


  //IMAGES FOR GALLERY TO BE FETCHED FROM DB
  allCategories:any=[
    { // 0 - standard
      src:[
        "assets/standard/1.jpg",
        "assets/standard/2.jpg",
        "assets/standard/3.jpg",
        "assets/standard/4.jpg",
      ]
    },
    { // 1 - suite
      src:[
        "assets/suite/1.jpg",
        "assets/suite/2.jpg",
        "assets/suite/3.jpg",
        "assets/suite/4.jpg",
      ]
    },
    { // 2 - hillview
      src:[
        "assets/hillview/1.jpg",
        "assets/hillview/2.jpg",
        "assets/hillview/3.jpg",
        "assets/hillview/4.jpg",
      ]
    },
    { // 3 - deluxe
      src:[
        "assets/deluxe/1.JPG",
        "assets/deluxe/2.JPG",
        "assets/deluxe/3.JPG",
        "assets/deluxe/4.JPG",
      ]
    }
  ]

  @Input() activeCategoryId:number = 3;

  activeCategory:any = this.allCategories[this.activeCategoryId] || {
      src:[
        "assets/standard/1.JPG",
        "assets/standard/2.JPG",
        "assets/standard/3.JPG",
        "assets/standard/4.JPG",
    ]
  
  };
  
  constructor() { }

  ngOnInit() {
    
  }


  changeGalleryCategory(categoryid:number){
    document.querySelector(".image-progress-loader")?.setAttribute("style", "display: block");
    setTimeout(() => {
      this.activeCategory = this.allCategories[categoryid - 1];
    }, 10);

  }

  loadMessage(){
    document.querySelector(".image-progress-loader")?.setAttribute("style", "display: none");
    console.log("loaded");
  }


}
