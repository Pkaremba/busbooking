import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PrepareComponent } from './prepare/prepare.component';
import { PlanComponent } from './plan/plan.component';
import { ProgramComponent } from './program/program.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpCleintModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PrepareComponent,
    PlanComponent,
    ProgramComponent,
    AboutUsComponent,
    ContactComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
