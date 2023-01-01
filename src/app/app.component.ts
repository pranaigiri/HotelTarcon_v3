import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HotelTarcon_v3';

  constructor(public router:Router, private ngxLoader: NgxUiLoaderService){
    this.ngxLoader.start();
  }

  ngOnInit() {
    this.ngxLoader.stop();
  }
}
