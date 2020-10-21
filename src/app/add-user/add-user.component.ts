import { Component, OnInit } from "@angular/core";
import { DataService } from "./data.service";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.css"]
})
export class AddUserComponent implements OnInit {
  currUserNameUser: string;
  currUserPhoneUser: string;
  currUserEmailUser: string;
  currUserAddressUser: string;
  profileForm = new FormGroup({
    name: new FormControl(""),
    email: new FormControl(""),
    address: new FormControl(""),
    tel: new FormControl("", [Validators.min(10), Validators.required])
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
  constructor(private data: DataService, private fb: FormBuilder) {}

  ngOnInit() {
    this.data.currUserName.subscribe(
      message => (this.currUserNameUser = message)
    );
  }
  newMessage(name: string) {
    this.data.changeName(name);
  }
  get name() {
    return this.profileForm.get("name");
  }
  get email() {
    return this.profileForm.get("email");
  }
  get tel() {
    return this.profileForm.get("tel");
  }
  get address() {
    return this.profileForm.get("address");
  }
}
