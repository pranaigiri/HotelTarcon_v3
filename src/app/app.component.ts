import { Component } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HotelTarcon_v3';

  constructor(private ngxLoader: NgxUiLoaderService){
    this.ngxLoader.start();
  }

  ngOnInit() {
    this.ngxLoader.stop();
  }
}
