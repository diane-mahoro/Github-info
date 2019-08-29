import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RequestService } from './http-request/request.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GtihubComponent } from './gtihub/gtihub.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GtihubComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
 