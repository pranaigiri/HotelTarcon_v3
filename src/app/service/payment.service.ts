import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



const API_URL = 'https://tarconsikkimazure.azurewebsites.net/api/Payments';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

constructor(private http: HttpClient) { }


public createOrder(orderOptions:any){
  return this.http.post(API_URL + '/initialize', orderOptions);
}

public verifyPayment(customAttr:any){
  return this.http.post(API_URL + '/confirm', customAttr);
}

}
