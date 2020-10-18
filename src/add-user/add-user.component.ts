import { Component, OnInit } from '@angular/core';
import {GlobalConstants} from "../Common/globalConstant";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  currUserName = GlobalConstants.currUserName;
  constructor() {
  }

  ngOnInit() {
  }

}
