import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// MODULES
import { SwiperModule } from 'swiper/angular';

// COMPONENTS
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { FooterComponent } from './footer/footer.component';
import { HotelComponent } from './hotel/hotel.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { BarComponent } from './bar/bar.component';
import { HomeComponent } from './home/home.component';
import { RazorpaytestComponent } from './razorpaytest/razorpaytest.component';
import { CheckinformComponent } from './home/checkinform/checkinform.component';
import { TarconservicesComponent } from './home/tarconservices/tarconservices.component';
import { GreetingComponent } from './home/greeting/greeting.component';
import { AboutusComponent } from './home/aboutus/aboutus.component';
import { ExploreinnComponent } from './home/exploreinn/exploreinn.component';
import { DineinnComponent } from './home/dineinn/dineinn.component';
import { NearbyComponent } from './home/nearby/nearby.component';
import { PopulardestinationComponent } from './home/populardestination/populardestination.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PrivacypolicyComponent } from './footer/privacypolicy/privacypolicy.component';
import { TermsandconditionsComponent } from './footer/termsandconditions/termsandconditions.component';
import { HttpClientModule , HttpClient} from '@angular/common/http'
// SERVICES
import { EventEmitterService } from './event-emitter.service';


//FOR FIREBASE HOSTING
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { ApiService } from './service/api.service';
import { GallerySliderComponent } from './hotel/gallery-slider/gallery-slider.component';
import { NgxUiLoaderConfig,SPINNER,POSITION,PB_DIRECTION, NgxUiLoaderHttpModule, NgxUiLoaderModule, NgxUiLoaderRouterModule } from 'ngx-ui-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPrintModule } from 'ngx-print';
import { OrdersuccessComponent } from './hotel/ordersuccess/ordersuccess.component';



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


let ngxUiLoaderConfig: NgxUiLoaderConfig = {
  "bgsColor": "#ffb705",
  "bgsOpacity": 1,
  "bgsPosition": "center-center",
  "bgsSize": 40,
  "bgsType": "square-loader",
  "blur": 12,
  "delay": 0,
  "fastFadeOut": true,
  "fgsColor": "#ffb705",
  "fgsPosition": "center-center",
  "fgsSize": 40,
  "fgsType": "square-loader",
  "gap": 19,
  "logoPosition": "center-center",
  "logoSize": 120,
  "logoUrl": "",
  "masterLoaderId": "master",
  "overlayBorderRadius": "0",
  "overlayColor": "rgba(255,255,255,0.9)",
  "pbColor": "#ffb705",
  "pbDirection": "ltr",
  "pbThickness": 3,
  "hasProgressBar": true,
  "maxTime": -1,
  "minTime": 300
}
@NgModule({
  declarations: [																			
    AppComponent,
    NavbarComponent,
    SliderComponent,
    FooterComponent,
      HotelComponent,
      RestaurantComponent,
      BarComponent,
      HomeComponent,
      GallerySliderComponent,
      RazorpaytestComponent,
      CheckinformComponent,
      TarconservicesComponent,
      GreetingComponent,
      AboutusComponent,
      ExploreinnComponent,
      DineinnComponent,
      NearbyComponent,
      PopulardestinationComponent,
      ContactusComponent,
      PrivacypolicyComponent,
      TermsandconditionsComponent,
      OrdersuccessComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    HttpClientModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderHttpModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderRouterModule,
    BrowserAnimationsModule,

    MatNativeDateModule,
    MatCardModule,
    MatDatepickerModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPrintModule
  ],

  

  providers: [EventEmitterService,ApiService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
