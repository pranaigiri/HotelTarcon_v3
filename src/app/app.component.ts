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

  trimmedHomeUrl(){
    let dirtyUrl = this.router.url;
    if(dirtyUrl.split('#')[0] == '/' 
    || dirtyUrl.split('#')[0] == '/home' 
    || dirtyUrl.split('#')[0] == '/hotel' 
    || dirtyUrl.split('#')[0] == '/restaurant'
    || dirtyUrl.split('#')[0] == '/bar'){
      console.log("DL",dirtyUrl);
      return dirtyUrl;
    }else{
      return null
    }
  }
}
