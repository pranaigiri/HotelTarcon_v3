import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { SwiperModule } from 'swiper/angular';
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
import { ContactusComponent } from './contactus/contactus.component';
import { EventEmitterService } from './event-emitter.service';
import { ExploreinnComponent } from './home/exploreinn/exploreinn.component';
import { DineinnComponent } from './home/dineinn/dineinn.component';
import { NearbyComponent } from './home/nearby/nearby.component';
import { PopulardestinationComponent } from './home/populardestination/populardestination.component';



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
      ContactusComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
  ],
  providers: [EventEmitterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
