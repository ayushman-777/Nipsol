import { Component, OnInit } from '@angular/core';
import {DataService} from "./data.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  currUserNameUser:string;
  constructor(private data: DataService) {  }

  ngOnInit() {
    this.data.currUserName
        .subscribe(message =>
            this.currUserNameUser = message);
  }
}
