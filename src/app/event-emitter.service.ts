import { Injectable, EventEmitter } from '@angular/core';    
import { Subscription } from 'rxjs/internal/Subscription';    

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  updateNavItemsInvoke = new EventEmitter();    
  subsVar !: Subscription;    

  updateCheckInFormInvoke = new EventEmitter();
  subsVar2 !: Subscription;   

  
  constructor() { }

  updateNavItems(paginationName:any) {    
    this.updateNavItemsInvoke.emit(paginationName);    
  } 

  updateCheckInForm(paginationName:any){
    this.updateCheckInFormInvoke.emit(paginationName);    
  }

}
