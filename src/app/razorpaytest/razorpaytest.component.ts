import { Component, NgZone } from '@angular/core';
import { ICustomWindow, WindowRefService } from './window-ref.service';

@Component({
  selector: 'app-razorpaytest',
  templateUrl: './razorpaytest.component.html',
  styleUrls: ['./razorpaytest.component.scss']
})
export class RazorpaytestComponent {

  private _window : ICustomWindow;
  public rzp : any;

  public options:any = {
    "key": "rzp_test_dfWyUJVdLV9BMA", // Enter the Key ID generated from the Dashboard
    "amount": 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Hotel Tarcon",
    "description": "Test Transaction",
    "image": "assets/tarcon_logo.png",
    "prefill": {
        "name": "Gaurav Kumar",
        "email": "gaurav.kumar@example.com",
        "contact": "9999999999"
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#eeac36",
        "backdrop_color": "rgba(0,0,0,.2)"
    },
    "handler":this.paymentHandler.bind(this),
    "modal":{
      "ondismiss":(()=>{ 
        this.zone.run(()=>{
          //add currrent page routing if payment fails
        })
      })
    }
  };

  constructor(
    private zone:NgZone,
    private winRef:WindowRefService
  ) {
      this._window = this.winRef.nativeWindow;
   }

   initPay():void{
    this.rzp = new this.winRef.nativeWindow['Razorpay'](this.options);
    this.rzp.open();
   }

   paymentHandler(res:any){

    this.zone.run(()=>{
    
      // let redirect_url:any="";
      if (typeof res.razorpay_payment_id == 'undefined' ||  res.razorpay_payment_id < 1) {
          //redirect_url = "failed_payment"
          alert("failed");
      } else {
          //redirect_url = "success_payment"
          alert("success");
      }
      // location.href = redirect_url;
    })

   }


  ngOnInit() {
  }

}
