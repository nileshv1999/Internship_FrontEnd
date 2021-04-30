import { Component, OnInit } from '@angular/core';
import { CustomerRegistrationService } from '../customer-registration.service';

@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrls: ['./search-delete.component.css']
})
export class SearchDeleteComponent implements OnInit {

  customers:any;
  id:number;
  constructor(private service:CustomerRegistrationService) { }

  public findUserById()
  {
    let resp= this.service.getUserById(this.id);
    resp.subscribe((data)=>this.customers=data);
  }
  
  public deleteUser(id:number)
  {
    let resp=this.service.deleteUser(id);
    resp.subscribe((data)=>this.customers=data);
  }

  ngOnInit(){
    let resp=this.service.getUsers();
    resp.subscribe((data)=>this.customers=data);
  }

}
