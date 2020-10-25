import { Component, OnInit } from '@angular/core';
import {SharedService} from "../shared.service";

@Component({
  selector: 'app-covid-meter',
  templateUrl: './covid-meter.component.html',
  styleUrls: ['./covid-meter.component.css']
})
export class CovidMeterComponent implements OnInit {

  public TotalCases:any;
  public Countries = [];
  public stats = [];

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.getTotalCases().subscribe(data=>this.TotalCases = data);
    this.sharedService.getCountriesList().subscribe(data=>this.Countries = data);
    this.sharedService.getCountryStats().subscribe(data=>this.stats = data);
  }

  myselection(select: string){
    this.sharedService.changeSelectCountry(select);
  }

}
