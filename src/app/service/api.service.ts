import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, timeout } from 'rxjs';
import { HotToastService } from '@ngneat/hot-toast';
import { environment } from 'src/environments/environment.prod';

@Injectable()
export class ApiService {
    private readonly baseUrl: any = environment.apiUrl;

    private readonly httpOptions = {
        headers: new HttpHeaders({
            'Content-type': 'application/json',
            'ApiKey': 'IcFq8zTB3gVz97y9GxouqnT5Np70P82fcQKicisDhtg='
        })
    }

    constructor(private http: HttpClient, private toaster: HotToastService) {
        // var check:any = window["baseUrl"];
    }

    //GetData Method
    getData(url: any) {
        return this.http.get(`${this.baseUrl}/${url}`, {
            headers: this.httpOptions.headers
        }).pipe(
            map((res: any) => {
                return res;
            }),
            catchError((error) => {
                return this.handleError(error);
            })
        );
    }

    //GetDataById Method
    getDataById(url: any, id: any) {
        return this.http.get(`${this.baseUrl}/${url}/${id}`, {
            headers: this.httpOptions.headers
        }).pipe(timeout(300000),
            map((res: any) => {
                return res;
            }),
            catchError((error) => {
                return this.handleError(error);
            })
        );
    }

    //Post Method
    postData(url: any, obj: any) {
        // return this.http.post(`${this.baseUrl}/${url}`, obj,{
        return this.http.post(url, obj, {
            headers: this.httpOptions.headers
        }).pipe(timeout(300000),
            map((res: any) => {
                return res;
            }),
            catchError((error) => {
                return this.handleError(error);
            })
        );
    }

    //Put Method
    putData(url: any, obj: any) {
        return this.http.put(`${this.baseUrl}/${url}`, obj, {
            headers: this.httpOptions.headers
        }).pipe(timeout(300000),
            map((res: any) => {
                return res;
            }),
            catchError((error) => {
                return this.handleError(error);
            })
        );
    }

    //Delete Method
    deleteDataById(url: any, id: any) {
        return this.http.delete(`${this.baseUrl}/${url}/${id}`, {
            headers: this.httpOptions.headers
        }).pipe(timeout(300000),
            map((res: any) => {
                return res;
            }),
            catchError((error) => {
                return this.handleError(error);
            })
        );
    }

    //Handler
    handleError(error: any): any {
        this.toaster.error('Oops , something went wrong.',
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
            }
        )
    }

    async getDataPromise(url: any) {
        return this.http.get(`${this.baseUrl}/${url}`, {
            headers: this.httpOptions.headers
        }).pipe(
            map((res: any) => {
                return res;
            }),
            catchError((error) => {
                return this.handleError(error);
            })
        ).toPromise();
    }




}



