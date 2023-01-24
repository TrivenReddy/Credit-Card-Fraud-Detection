import { Injectable } from '@angular/core';


import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { retry, catchError } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
//1500.0,36000.0,0,754.0,585.0,7,1,1,1
  constructor(private http: HttpClient) { }


  url:any = "http://52.55.104.10/predictIs_Fradulent_n";


  predictIs_Fradulent_n(data:any): Observable<any> {
    //console.log(data);

    console.log(this.url+ "?Avg_Amt_Per_Transaction_Per_Day=" + data.Avg_Amt_Per_Transaction_Per_Day + "&Transaction_Amt="+ data.Transaction_Amt + "&Total_Number_of_Declines_Per_Day="+ data.Total_Number_of_Declines_Per_Day + "&Daily_Chargeback_Avg_Amt="+data.Daily_Chargeback_Avg_Amt+ "&Month_Avg_Chbk_Amt="+ data.Month_Avg_Chbk_Amt +"&Month_Chbk_Freq="+data.Month_Chbk_Freq+ "&is_declined_n="+ data.is_declined_n + "&Is_Foreign_Transaction_n=" + data.Is_Foreign_Transaction_n + "&Is_HighRisk_Country_n="+ data.Is_HighRisk_Country_n)


    return this.http
      .get<any>(this.url+ "?Avg_Amt_Per_Transaction_Per_Day=" + data.Avg_Amt_Per_Transaction_Per_Day + "&Transaction_Amt="+ data.Transaction_Amt + "&Total_Number_of_Declines_Per_Day="+ data.Total_Number_of_Declines_Per_Day + "&Daily_Chargeback_Avg_Amt="+data.Daily_Chargeback_Avg_Amt+ "&Month_Avg_Chbk_Amt="+ data.Month_Avg_Chbk_Amt +"&Month_Chbk_Freq="+data.Month_Chbk_Freq+ "&is_declined_n="+ data.is_declined_n + "&Is_Foreign_Transaction_n=" + data.Is_Foreign_Transaction_n + "&Is_HighRisk_Country_n="+ data.Is_HighRisk_Country_n)
  }

}

