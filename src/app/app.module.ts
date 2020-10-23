import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';

import {AppRoutingModule, routingComponents} from "./appRouting.module";
import {DataService} from "./add-user/data.service";
import { CovidMeterComponent } from './covid-meter/covid-meter.component';

@NgModule({
  declarations: [ AppComponent, routingComponents],
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule ],
  providers: [DataService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
