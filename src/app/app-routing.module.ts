import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarComponent } from './bar/bar.component';
import { FaqComponent } from './footer/faq/faq.component';
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
    {path:"faq", component:FaqComponent}
  ]},
  {path:"", component:HomeComponent, pathMatch:"full"},
  {path:"**", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
    
 }
