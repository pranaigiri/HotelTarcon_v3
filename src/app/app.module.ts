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
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



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
      TermsandconditionsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    HttpClientModule,
  ],
  providers: [EventEmitterService,ApiService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
