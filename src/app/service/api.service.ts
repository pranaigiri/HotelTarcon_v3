import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, timeout } from 'rxjs';
import { HotToastService } from '@ngneat/hot-toast';

@Injectable()
export class ApiService {
    private readonly baseUrl: any = "https://localhost:44332/api";
    constructor(private http: HttpClient,private toaster:HotToastService) {
        // var check:any = window["baseUrl"];
    }

    //GetData Method
    getData(url: any) {
        return this.http.get(`${this.baseUrl}/${url}`).pipe(
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
        return this.http.get(`${this.baseUrl}/${url}/${id}`).pipe(timeout(300000),
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
        return this.http.post(`${this.baseUrl}/${url}`, obj).pipe(timeout(300000),
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
        return this.http.put(`${this.baseUrl}/${url}`, obj).pipe(timeout(300000),
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
        return this.http.delete(`${this.baseUrl}/${url}/${id}`).pipe(timeout(300000),
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





}



