import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';



const API_URL = environment.apiUrl+'/Payments';



@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private readonly httpOptions = {
    headers: new HttpHeaders({
        'Content-type': 'application/json',
        'ApiKey' : 'IcFq8zTB3gVz97y9GxouqnT5Np70P82fcQKicisDhtg='
    })
  }

constructor(private http: HttpClient) { }


public createOrder(orderOptions:any){
  return this.http.post(API_URL + '/initialize', orderOptions,{
    headers: this.httpOptions.headers
});
}

public verifyPayment(customAttr:any){
  return this.http.post(API_URL + '/confirm', customAttr,{
    headers: this.httpOptions.headers
});
}

}
