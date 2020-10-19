import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  currUserNameUser = '';
  constructor() {
  }

  ngOnInit() {
  }

}
