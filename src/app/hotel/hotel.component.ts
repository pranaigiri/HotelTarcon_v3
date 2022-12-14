import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DateRange } from '@angular/material/datepicker';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ApiService } from '../service/api.service';
import { HotToastService } from '@ngneat/hot-toast';
import { DatePipe } from '@angular/common';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { WindowRefService } from '../service/window-ref.service';
import { PaymentService } from '../service/payment.service';
import { catchError, finalize, min, throwError } from 'rxjs';

import Swal from 'sweetalert2';
import { OrdersuccessComponent } from './ordersuccess/ordersuccess.component';
import { CountryISO, SearchCountryField } from "ngx-intl-tel-input";

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss'],
  providers: [DatePipe]
})
export class HotelComponent implements OnInit {

  //DISABLED DATES FOR CALENDAR
  disabledDatesArray = ["12/12/2022", "30/12/2022", "16/12/2022"];

  //ALL ROOM DETAILS
  roomDetails = [
    {
      categoryId: 1,
      categoryName: "Standard",
      amount: 3000
    },
    {
      categoryId: 2,
      categoryName: "Deluxe",
      amount: 4000
    },
    {
      categoryId: 3,
      categoryName: "Hill View",
      amount: 5000
    },
    {
      categoryId: 4,
      categoryName: "Suite",
      amount: 7500
    }

  ]

  //SELECTED ROOM DETAILS
  selectedRoomDetails: any = this.roomDetails[0];

  //OPTIONAL PLAN DETAILS
  // OpPlanDetails: any = [
  //   {
  //     opId: 0,
  //     opName: "None",
  //     opAmount: 0
  //   },
  //   {
  //     opId: 1,
  //     opName: "EP",
  //     opAmount: 300
  //   },
  //   {
  //     opId: 2,
  //     opName: "CP",
  //     opAmount: 500
  //   },
  //   {
  //     opId: 3,
  //     opName: "AP",
  //     opAmount: 1000
  //   },
  //   {
  //     opId: 4,
  //     opName: "MAP",
  //     opSelection: {
  //       breakfast: false,
  //       lunch: false,
  //       dinner: false,
  //     },
  //     opAmount: 1000
  //   }
  // ];

  openTab:any = 1;
  //DEFAULT SELECTED OP DETAILS - EP
  // selectedOpPlanDetails: any = this.OpPlanDetails[0];


  //TAXES & CHARGES
  TAX: number = 0.12;

  //TOTAL COST
  totalCost: number = 0;
  totalCostWithTax: number = 0;

  //CALCULATE TOTAL COST
  constructor(private paymentApi: PaymentService,
    private ngxLoader: NgxUiLoaderService,
    private winRef: WindowRefService,
    private apiService: ApiService,
    private hotToast: HotToastService,
    public datepipe: DatePipe,
    private formBuilder: FormBuilder) {
    this.getBookedDates();
  }

  bookedDates: any = []
  getBookedDates() {
    // https://localhost:44332/api/Bookings
    this.apiService.getData('Bookings').subscribe((res: any) => {
      this.bookedDates = res.result;
      sessionStorage.setItem("bookedDates", JSON.stringify(this.bookedDates));
    })
  }


  //VARIABLES FOR CALENDAR
  yesterday = new Date();


  //CHECKS DISABLED DATES INBETWEEN TWO DATES
  checkDisabledDatesInBetween(start: Date, end: Date): boolean {

    let foundDisableInbetween: boolean = false;

    for (let i: Date = start; i < end; i.setDate(i.getDate() + 1)) {
      if (this.disableDateFilter(i) === false) {
        foundDisableInbetween = true;
      }
    }

    return foundDisableInbetween;

  }


  //DATE RANGE SELECTION LOGIC
  @Input() selectedRangeValue: DateRange<Date> | undefined | any = {};
  @Output() selectedRangeValueChange = new EventEmitter<DateRange<Date>>();
  noOfDaysSelected: number = 0;

  tempFromDate: any;
  tempTodate: any;


  //for new phone numebr input on checkout
  CountryISO = CountryISO;
  preferredCountries: CountryISO[] = [CountryISO.India, CountryISO.Bhutan, CountryISO.Nepal, CountryISO.Bangladesh];

  selectedChange(m: any) {


    if (!this.selectedRangeValue?.start || this.selectedRangeValue?.end) {
      this.selectedRangeValue = new DateRange<Date>(m, null);
    } else {
      const start = this.selectedRangeValue.start;
      const end = m;
      if (end < start) {
        this.selectedRangeValue = new DateRange<Date>(end, start);
      } else {
        this.selectedRangeValue = new DateRange<Date>(start, end);
      }
    }
    this.selectedRangeValueChange.emit(this.selectedRangeValue);


    setTimeout(() => {
      if (this.selectedRangeValue.start && this.selectedRangeValue.end) {
        //check if theres any disable dates in between two dates
        if (this.checkDisabledDatesInBetween(this.selectedRangeValue.start, this.selectedRangeValue.end)) {
          this.hotToast.warning('Reserved Dates in between!',
            {
              position: 'bottom-center',
              style: {
                border: '1px solid #713200',
                padding: '16px',
                color: '#713200',
              },
              iconTheme: {
                primary: '#713200',
                secondary: '#FFFAEE',
              },
            });

          this.selectedRangeValue = {};
          this.totalCost = 0; this.totalCostWithTax = 0; this.TAX = 0;
        }
      }
    }, 1);

    // To calculate the no. of days selected
    this.noOfDaysSelected = ((this.selectedRangeValue.end ? this.selectedRangeValue.end : this.selectedRangeValue.start) - this.selectedRangeValue.start) / (1000 * 3600 * 24) + 1;

    this.tempFromDate = this.datepipe.transform(this.selectedRangeValue.start, 'd MMM, y');
    this.tempTodate = this.selectedRangeValue.end ? this.datepipe.transform(this.selectedRangeValue.end, 'd MMM, y') : this.tempFromDate;


    this.updatePriceAndTaxes();


  }

  //UPDATE PRICE AND TAX
  updatePriceAndTaxes() {

    this.totalCost = this.selectedRoomDetails.amount * (this.noOfDaysSelected <= 0 ? 1 : this.noOfDaysSelected);

    //Change tax according to the amount
    if (this.totalCost > 7000)
      this.TAX = 0.18
    else
      this.TAX = 0.12

    this.totalCostWithTax = this.totalCost + (this.totalCost * this.TAX);

  }


  // CHECKS DISABLE DATE FILTER FOR CALENDAR
  disableDateFilter = (d: Date | null): boolean => {


    const day = (d || new Date());

    const dayTransformed = this.datepipe.transform(day, 'dd/MM/yyyy');

    let flag: boolean = true;

    this.disabledDatesArray.forEach((disabledDate: any) => {
      disabledDate === dayTransformed ? flag = false : null;
    })

    return flag;

  }


  //CHANGE ROOM CATEGORY ON SELECT
  selectedCategory: number = 1;
  changeCategory(value: number) {
    this.selectedCategory = value;
    this.selectedRoomDetails = this.roomDetails[--value];
    //console.log(this.selectedCategory);
    this.openTab = this.selectedCategory
    this.updatePriceAndTaxes();
  }

  //CHANGE OPTIONAL PLAN ON SELECT
  selectedPlan: number = 0;
  changePlan(value: number) {
    this.selectedPlan = value;
    // this.selectedOpPlanDetails = this.OpPlanDetails[--value];
  }


  checkOutForm: boolean = false;
  checkOutBtn = 'Checkout';
  isLoading = false;
  loadingBtnAnimate() {
    this.isLoading = true;
    this.checkOutBtn = 'Processing...';

    setTimeout(() => {
      this.isLoading = false;
      this.checkOutBtn = 'Checkout';
    }, 1000)

    //SHOW CHECKOUT FORM ON SCREEN
    this.checkOutForm = true;
  }


  //CHECKOUT FORM
  contactInfoForm: any;

  contactInfoComplete: boolean = false;
  closeCheckOutForm() {
    this.checkOutForm = false;
  }


  //RAZORPAY RADIO CHECK
  paymentOptions = {
    paymentMethod: {
      razorPay: false
    }
  }


  //MAP PLAN CHECKBOX COUNTER
  mapCount: number = 0;



  //FOR CONTACT INFO FORM
  form: FormGroup = new FormGroup({
    fullname: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(undefined, [Validators.required]),
    adults: new FormControl(0),
    children: new FormControl(0),
  });
  submitted = false;

  ngOnInit() {

    setTimeout(() => {
      window.scrollTo(0,0);
    }, 10);

    //ASSIGN VALUES OF PRICES AND TAXES
    this.TAX = 0.12;
    this.totalCost = this.selectedRoomDetails.amount * (this.noOfDaysSelected <= 0 ? 1 : this.noOfDaysSelected);
    this.totalCostWithTax = this.totalCost + (this.totalCost * this.TAX);


    //LISTEN TO MAPPLAN CHECKBOX CHANGE
    // let mapPlanCheckBoxes: any = document.querySelectorAll(
    //   '.map-li input[type="checkbox"]'
    // );

    // mapPlanCheckBoxes.forEach((checkbox: any) => {

    //   checkbox.addEventListener("change", () => {

    //     //counter to keep track of selected map plan checkboxes
    //     checkbox.checked ? this.mapCount++ : this.mapCount--;

    //     //map radio select if min 2 checkbox selected
    //     this.mapCount > 1 ? mapPlanRadio.checked = true : mapPlanRadio.checked = false;


    //     if (this.mapCount == 2) {
    //       mapPlanCheckBoxes.forEach((checkbox: any) => {
    //         !checkbox.checked ? checkbox.disabled = true : null;
    //       })
    //     } else {
    //       mapPlanCheckBoxes.forEach((checkbox: any) => {
    //         checkbox.disabled = false;
    //       })
    //     }

    //   });

    // });

    // //LISTEN IF OP PLAN IS MAP
    // let mapPlanRadio: any = document.querySelector("#mapPlan");
    // mapPlanRadio.addEventListener("change", () => {
    //   if (mapPlanRadio.checked && this.mapCount < 2) {
    //     mapPlanRadio.checked = false;
    //   }
    // });


    //SELECT RADIO BUTTON OF OP PLANS
    // let opPlanRadios: any = document.querySelectorAll('.opPlanRadio');

    // //CLEAR OPPLAN CHECKBOXES & MAP PLAN CHECKBOXES
    // opPlanRadios.forEach((radio: any) => {
    //   radio.addEventListener('change', () => {

    //     //reset count for map checkboxes
    //     opPlanRadios[3] != radio ? this.mapCount = 0 : null;

    //     //RESET ALL CHECKED PLANS
    //     if (radio.value != this.selectedPlan)
    //       radio.checked = false;

    //     //CLEAR MAP PLAN CHECKBOXES
    //     if (radio.value != 4) {
    //       mapPlanCheckBoxes.forEach((checkbox: any) => {
    //         checkbox.checked = false;
    //         this.OpPlanDetails[3].opSelection = {
    //           breakfast: false,
    //           lunch: false,
    //           dinner: false
    //         };
    //         checkbox.disabled = false;
    //       })
    //     }

    //   });
    // });

    //FOR CONTACT INFO FORM VALIDATION
    this.form = this.formBuilder.group({
      fullname: ['', Validators.required],

      email: ['', [Validators.required, Validators.email]],

      phone: [
        undefined,
        [
          Validators.required,
          Validators.minLength(7),
          Validators.maxLength(15)
        ],
      ],

      adults: ['', [Validators.required, Validators.max(5)]],

      children: ['', [Validators.required, Validators.max(3)]],

    });


  } //ngOnInit END


  get f(): { [key: string]: any } {
    return this.form.controls;
  }
  onContactInfoSubmit(): void {

    console.log("FORM", this.form);

    this.submitted = true;
    
    if (this.form.invalid) {
      this.contactInfoComplete = false;
      return;
    } else {
      this.contactInfoComplete = true;
    }

    this.customerDetails = this.form.value;
    console.log(this.customerDetails);
  }
  onReset(): void {
    this.submitted = false;
    this.contactInfoComplete = false;
    this.form.reset();
  }




  //------------------------------------------------------ FOR ORDER & PAYMENT ONLY ---------------------------------

  customerDetails: any = {};
  paymentStateStarted: boolean = false;


  //Store all response on completion
  successResponse: any = {
    orderRes: {},

    paymentRes: {
      response: {}
    }
  };


  //get random integer
  getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  //Create Order
  createOrder() {

    //console.log("-------START - createOrder")

    let orderDetails: any = {
      customerName: this.customerDetails.fullname || "",
      customerPhone: this.customerDetails.phone.e164Number || "",
      customerEmail: this.customerDetails.email || "",
      selectedRoomCategory: this.selectedRoomDetails.categoryId,
      selectedRoomName: this.selectedRoomDetails.categoryName,
      selectedRoomAmount: this.selectedRoomDetails.amount,
      fromDate: this.tempFromDate,
      toDate: this.tempTodate,
      totalCost: this.totalCostWithTax,
      totalDays: this.noOfDaysSelected <= 0 ? 1 : this.noOfDaysSelected,
      adults: this.customerDetails.adults || 0,
      children: this.customerDetails.children || 0
    };

    // if (this.selectedOpPlanDetails.opName == "MAP") {
    //   orderDetails.breakfast = this.OpPlanDetails[3].opSelection.breakfast;
    //   orderDetails.lunch = this.OpPlanDetails[3].opSelection.lunch;
    //   orderDetails.dinner = this.OpPlanDetails[3].opSelection.dinner;
    // }

    let orderOptions: any = {
      amount: orderDetails.totalCost * 100, // need to convert to paise
      currency: "INR",
      notes: orderDetails,
      receipt: "invoice_" + new Date().valueOf() + "_" + this.getRandomInt(1, 1000),
      payment_capture: false
    }

    this.paymentApi.createOrder(orderOptions).pipe(
      finalize(() => (this.ngxLoader.stop())),
      catchError(error => {
        this.hotToast.error("Server not ready!");
        return throwError(() => (error));
      })
    ).subscribe((res: any) => {
      this.paymentStateStarted = true;
      //console.log("Created Order:", res);
      this.successResponse.orderRes = res;
      this.payWithRazor(res, orderOptions);
    });

  }

  //initiate payment using generated order_id
  payWithRazor(order: any, createdOrderDetails:any) {

    //console.log("-------START - payWithRazor")
    const options: any = {
      key: 'rzp_test_KCwmTAShZCfbDS',
      amount: order.amount, // amount should be in paise format to display Rs 1255 without decimal point
      currency: 'INR',
      name: "Tarcon Sikkim", // company name or product name
      description: this.selectedRoomDetails.categoryName,  // product description
      image: 'assets/256_1.png', // company logo or product image
      order_id: order.id, // order_id created by you in backend
      prefill: {
        name: this.customerDetails.fullname,
        email: this.customerDetails.email,
        contact: this.customerDetails.phone.e164Number
      },
      modal: {
        // We should prevent closing of the form when esc key is pressed.
        escape: false,
      },
      notes: {
        // include notes if any
      },
      theme: {
        color: "#eeac36",
        backdrop_color: "rgba(0,0,0,.2)"
      }
    };
    options.handler = ((response: any, error: any) => {

      options.response = response;
      // console.log(response);
      // console.log(options);
      // console.log(error);

      if (response) {

        this.successResponse.paymentRes = options;

        console.log("SUCCESS RESPONSE", this.successResponse.paymentRes);

        let customAttr: any = {
          razorpay_order_id: order.id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
          currency: order.currency,
          amount: order.amount,
          createdOrderDetails: createdOrderDetails
        }

        // call your backend api to verify payment signature & capture transaction
        //verify payment on response
        this.paymentApi.verifyPayment(customAttr).pipe(
          finalize(() => (
            this.ngxLoader.stop()
          )),
          catchError(error => {
            return throwError(() => (error));
          })
        ).subscribe((res: any) => {
          if (res) {
            this.checkOutForm = false;
            this.hotToast.success('Payment Received!');
            this.loadInvoice();
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Payment Failed!',
              text: 'Any amount debited will be refunded within 3-7 days.',
            })
          }
          this.paymentStateStarted = false;
        });



      }

    });
    options.modal.ondismiss = (() => {
      // handle the case when user closes the form while transaction is in progress

      this.hotToast.warning('Transaction Cancelled!')

      this.ngxLoader.stop();

      this.paymentStateStarted = false;
    });

    const rzp = new this.winRef.nativeWindow.Razorpay(options);
    rzp.open();
  }

  //Variable for invoice toggle
  showingInvoice: boolean = false;
  loadInvoice() {
    //console.log("------------res", this.successResponse);
    //console.log("Loading Invoice");
    this.showingInvoice = true;
  }



  @ViewChild(OrdersuccessComponent) child: any;


  closeInvoice() {

    if (this.child.downloadedFlag) {
      this.showingInvoice = false;
      window.scrollTo(0, 0);
    } else {
      Swal.fire({
        title: 'Please save your invoice?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Download',
        confirmButtonColor: '#76d07b',
        denyButtonText: `Save Later`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.child.saveOrderDiv();
        } else if (result.isDenied) {
          this.showingInvoice = false;
        }
      })
    }

    if (this.child.downloadedFlag && this.showingInvoice == false) {
      setTimeout(() => {
        location.reload();
      }, 1000);
    }

  }


}
