import { Component, OnInit } from '@angular/core';
//import { CustomerRegistrationService } from '../customer-registration.service';
import { customer } from '../customer'
import { CustomerRegistrationService } from '../customer-registration.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  customer: customer=new customer(0,"","",0,"");
  message:any;
  
  constructor(private service:CustomerRegistrationService) { }

  ngOnInit(){
  }


  public registerNow(){
   let resp =  this.service.doRegistration(this.customer);
  resp.subscribe((data)=>this.message=data);
  }
}
