import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountRegistrationService {

  constructor(private http:HttpClient) { }

  public getAccounts(id)
  {
    return this.http.get("http://localhost:8080/customer/"+id+"/account");
  }
}
