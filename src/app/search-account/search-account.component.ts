import { Component, OnInit } from '@angular/core';
import { AccountRegistrationService } from '../account-registration.service';

@Component({
  selector: 'app-search-account',
  templateUrl: './search-account.component.html',
  styleUrls: ['./search-account.component.css']
})
export class SearchAccountComponent implements OnInit {

  id:number;
  accounts:any;
  constructor(private service:AccountRegistrationService) { }

  ngOnInit(): void {
    let resp=this.service.getAccounts(this.id);
    resp.subscribe((data)=>this.accounts=data);
  }

}
