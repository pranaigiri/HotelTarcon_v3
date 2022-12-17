import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
      amount: 1000
    },
    {
      categoryId: 2,
      categoryName: "Suite",
      amount: 2000
    },
    {
      categoryId: 3,
      categoryName: "Hill View",
      amount: 3000
    },
    {
      categoryId: 4,
      categoryName: "Deluxe",
      amount: 4000
    }
  ]

  //SELECTED ROOM DETAILS
  selectedRoomDetails: any = this.roomDetails[0];

  //OPTIONAL PLAN DETAILS
  OpPlanDetails: any = [
    {
      opId: 1,
      opName: "EP",
      opAmount: 300
    },
    {
      opId: 2,
      opName: "CP",
      opAmount: 500
    },
    {
      opId: 3,
      opName: "AP",
      opAmount: 1000
    },
    {
      opId: 4,
      opName: "MAP",
      opSelection: {
        breakfast: false,
        lunch: false,
        dinner: false,
      },
      opAmount: 1000
    }
  ];
  //DEFAULT SELECTED OP DETAILS - EP
  selectedOpPlanDetails: any = this.OpPlanDetails[0];


  //TAXES & CHARGES
  TAX: number = 0;

  //CALCULATE TOTAL COST
  constructor(private ngxLoader: NgxUiLoaderService,
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
      console.log(res.result);
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
        }
      }
    }, 1);

    // To calculate the no. of days selected
    this.noOfDaysSelected = (this.selectedRangeValue.end - this.selectedRangeValue.start) / (1000 * 3600 * 24) + 1;
    console.log("no of days", this.noOfDaysSelected);

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
  }

  //CHANGE OPTIONAL PLAN ON SELECT
  selectedPlan: number = 1;
  changePlan(value: number) {
    this.selectedPlan = value;
    this.selectedOpPlanDetails = this.OpPlanDetails[--value];
    console.log(this.selectedOpPlanDetails);
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
  contactInfoForm:any;

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
  mapCount:number = 0;



  //FOR CONTACT INFO FORM
  form: FormGroup = new FormGroup({
    fullname: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    totalperson: new FormControl(0),
    children: new FormControl(0),
  });
  submitted = false;

  ngOnInit() {


    //LISTEN TO MAPPLAN CHECKBOX CHANGE
    let mapPlanCheckBoxes: any = document.querySelectorAll(
      '.map-li input[type="checkbox"]'
    );
    
    mapPlanCheckBoxes.forEach((checkbox: any) => {

      checkbox.addEventListener("change", () => {

        //counter to keep track of selected map plan checkboxes
        checkbox.checked ? this.mapCount++ : this.mapCount--;

        //map radio select if min 2 checkbox selected
        this.mapCount > 1 ? mapPlanRadio.checked = true : mapPlanRadio.checked = false;


        if(this.mapCount == 2){
          mapPlanCheckBoxes.forEach((checkbox:any) => {
            !checkbox.checked ? checkbox.disabled = true : null;
          })
        }else{
          mapPlanCheckBoxes.forEach((checkbox:any) => {
            checkbox.disabled = false;
          })
        }

      });

    });

    //LISTEN IF OP PLAN IS MAP
    let mapPlanRadio: any = document.querySelector("#mapPlan");
    mapPlanRadio.addEventListener("change", () => {
      if(mapPlanRadio.checked && this.mapCount < 2){
        mapPlanRadio.checked = false;
      }
    });


    //SELECT RADIO BUTTON OF OP PLANS
    let opPlanRadios:any = document.querySelectorAll('.opPlanRadio');

    //CLEAR OPPLAN CHECKBOXES & MAP PLAN CHECKBOXES
    opPlanRadios.forEach((radio: any) => {
      radio.addEventListener('change', () => {
          
          //reset count for map checkboxes
          opPlanRadios[3] != radio ? this.mapCount = 0 : null;

          //RESET ALL CHECKED PLANS
          if(radio.value != this.selectedPlan)
            radio.checked = false;
          
          //CLEAR MAP PLAN CHECKBOXES
          if(radio.value != 4){
            mapPlanCheckBoxes.forEach((checkbox: any) => {
                  checkbox.checked = false;
                  this.OpPlanDetails[3].opSelection = {
                    breakfast: false,
                    lunch: false,
                    dinner: false
                  };
                  checkbox.disabled = false;
          })
          }

      });
    });

    //FOR CONTACT INFO FORM VALIDATION
    this.form = this.formBuilder.group({
      fullname: ['', Validators.required],

      email: ['', [Validators.required, Validators.email]],

      phone: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],

      totalperson: ['', [Validators.required, Validators.max(50)]],

      children: ['', [Validators.required, Validators.max(50)]],

    });


  } //ngOnInit END


  get f(): { [key: string]: any } {
    return this.form.controls;
  }
  onContactInfoSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      this.contactInfoComplete = false;
      return;
    }else{
      this.contactInfoComplete = true;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
  }
  onReset(): void {
    this.submitted = false;
    this.contactInfoComplete = false;
    this.form.reset();
  }

}
