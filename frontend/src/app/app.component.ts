import { Component } from '@angular/core';
import { ServiceService } from './service.service';
import { ResultComponent } from './result/result.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
 
  constructor(
    private serviceService: ServiceService
    ) { }
//1500.0,36000.0,0,754.0,585.0,7,1,1,1
Avg_Amt_Per_Transaction_Per_Day:any =1500.0 ;
Transaction_Amt:any = 36000.0;
Total_Number_of_Declines_Per_Day:any =0;
Daily_Chargeback_Avg_Amt:any =754.0;
Month_Avg_Chbk_Amt:any = 585.0;
Month_Chbk_Freq:any = 7;
is_declined_n:any = 1;
Is_Foreign_Transaction_n:any = 1;
Is_HighRisk_Country_n:any=1;
formValue:any;
  
  onSubmit(form:any){
    this.formValue=form.value;
    console.log(form.value);

    this.getIs_Fradulent_n(form.value);
  }

  data:any; 
  message:any;
  getIs_Fradulent_n(data: any) {
    console.log(data);
    return this.serviceService.predictIs_Fradulent_n(data).subscribe((response: {}) => {
      let data: any = response;
      this.data=data;
      
      console.log(response);
      if(this.data.message=="1")
      {
        this.message="Fraud"
        console.log("Fraud")
      }
      else{
        this.message="No Fraud"
        console.log(this.data.message)
      }
    });
  }

}
