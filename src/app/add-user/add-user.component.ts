import {Component, OnInit} from "@angular/core";
import {DataService} from "./data.service";
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

    profileForm = new FormGroup({
        name: new FormControl(""),
        email: new FormControl(""),
        address: new FormControl(""),
        tel: new FormControl("", [Validators.min(10), Validators.required])
    });

    onSubmit() {

      this.data.pushDetails(this.name.value, this.email.value, this.tel.value, this.address.value )
      console.log(this.profileForm.value);
      console.warn(this.name.value, this.email.value, this.tel.value, this.address.value);
      this.profileForm.reset();
    }

    constructor(private data: DataService, private fb: FormBuilder) {
    }

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
