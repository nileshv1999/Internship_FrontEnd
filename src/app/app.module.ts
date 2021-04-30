import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerRegistrationService } from './customer-registration.service';
import { RegistrationComponent } from './registration/registration.component';
import { SearchDeleteComponent } from './search-delete/search-delete.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { SearchAccountComponent } from './search-account/search-account.component';
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    SearchDeleteComponent,
    HomeComponent,
    SearchAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [CustomerRegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
