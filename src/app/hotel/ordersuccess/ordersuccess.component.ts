import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { title } from 'process';

import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-ordersuccess',
  templateUrl: './ordersuccess.component.html',
  styleUrls: ['./ordersuccess.component.scss']
})
export class OrdersuccessComponent implements OnInit {

  //response from parent
  @Input() expectedSuccessRes: any;

  constructor(private hotToast: HotToastService) { }

  downloadedFlag:boolean = false;

  //save document
  saveOrderDiv() {

    let doc = new jsPDF();
  
    // Source HTMLElement or a string containing HTML.
    let elementHTML:any = document.querySelector("#print-order-success-div");

    doc.html(elementHTML, {
        callback: (doc) => {
            // Save the PDF
            doc.save('tarcon_invoice_'+ Date.now() +'.pdf');
            this.hotToast.success("Downloaded");
            this.downloadedFlag = true;
        },
        x: 15,
        y: 15,
        width: 170, //target width in the PDF document
        windowWidth: 650 //window width in CSS pixels
    });

   }


   //Close button
   @Output() childTrigger = new EventEmitter<boolean>();
   hideOrderSuccess(){
      this.childTrigger.emit(true);
   }

  ngOnInit() {

    console.log("EXPECTED RES", this.expectedSuccessRes);

  }


}
