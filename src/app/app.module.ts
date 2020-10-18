import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import {AppRoutingModule, routingComponents} from "./appRouting.module";

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, routingComponents],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
