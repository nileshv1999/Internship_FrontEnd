import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerRegistrationService {

  constructor(private http:HttpClient) { }



  public doRegistration(customer){
    return this.http.post("http://localhost:8080/customer/add",customer);
  }

  public getUsers(){
    return this.http.get("http://localhost:8080/customer/all");
  }

  public getUserById(id){
    return this.http.get("http://localhost:8080/customer/find/"+id);
  }

  public deleteUser(id)
  {
    return this.http.delete("http://localhost:8080/customer/delete/"+id);
  }

}
