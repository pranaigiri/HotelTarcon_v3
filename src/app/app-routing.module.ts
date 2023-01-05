import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarComponent } from './bar/bar.component';
import { FaqComponent } from './footer/faq/faq.component';
import { NewAboutUsComponent } from './footer/new-about-us/new-about-us.component';
import { PrivacypolicyComponent } from './footer/privacypolicy/privacypolicy.component';
import { RefundpolicyComponent } from './footer/refundpolicy/refundpolicy.component';
import { TermsandconditionsComponent } from './footer/termsandconditions/termsandconditions.component';
import { HomeComponent } from './home/home.component';
import { HotelComponent } from './hotel/hotel.component';
import { RestaurantComponent } from './restaurant/restaurant.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},  
  {path:"hotel", component:HotelComponent},
  {path:"restaurant", component:RestaurantComponent},
  {path:"bar", component:BarComponent},
  {path:"policy", children:[
    {path:"privacy-policy", component:PrivacypolicyComponent},
    {path:"refund-policy", component:RefundpolicyComponent},
    {path:"terms-and-conditions", component:TermsandconditionsComponent},
    {path:"faq", component:FaqComponent},
    {path:"about-us", component:NewAboutUsComponent},
  ]},
  {path:"", component:HomeComponent, pathMatch:"full"},
  {path:"**", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled', // or 'top'
    anchorScrolling: 'enabled',
    scrollOffset: [0, 0] // [x, y] - adjust scroll offset
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
    
 }
