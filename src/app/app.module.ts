import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';

import {AppRoutingModule, routingComponents} from "./appRouting.module";
import {DataService} from "./add-user/data.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [ AppComponent, routingComponents],
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule ],
  providers: [DataService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
