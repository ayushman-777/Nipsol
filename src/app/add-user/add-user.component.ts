import { Component, OnInit } from '@angular/core';
import {DataService} from "./data.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  currUserNameUser:string;
  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('', Validators.required),
    address: new FormControl(''),
    tel: new FormControl('')
  });
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
  constructor(private data: DataService, private fb: FormBuilder) {  }

  ngOnInit() {
    this.data.currUserName
        .subscribe(message =>
            this.currUserNameUser = message);
  }
newMessage(name:string) {
    this.data.changeName(name);
  }

}
