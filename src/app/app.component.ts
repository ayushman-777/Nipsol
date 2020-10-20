import {Component, OnInit, VERSION} from '@angular/core';
import { Router } from '@angular/router';
import {DataService} from "./add-user/data.service";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit{
  name = 'Angular ' + VERSION.major;
  currUserNameHome: string = 'adsfas';

  constructor(public router: Router,
              private data: DataService){}

  ngOnInit(): void {
    this.data.currUserName
        .subscribe(message => this
            .currUserNameHome = message);
  }

  newMessage(name:string) {
    this.data.changeName(name);
  }
}
