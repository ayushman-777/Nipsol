import { Component, OnInit } from '@angular/core';
import {SharedService} from "../shared.service";

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit {

  userDetails = [];

  constructor(private sharedService: SharedService) {
    this.userDetails = sharedService.getDetails();
  }

  ngOnInit() {

  }

}
