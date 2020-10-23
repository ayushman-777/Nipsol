import {Component, OnInit} from "@angular/core";
import {DataService} from "./data.service";
import {
    FormControl,
    FormGroup,
    Validators
} from "@angular/forms";
import { Router} from "@angular/router";
import {SharedService} from "../shared.service";

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

        this.router.navigate(['./allUser']);
        this.sharedService.addDetails(this.profileForm);
        console.warn(this.profileForm.value);
    }

    constructor(private data: DataService,
                private router: Router,
                private sharedService: SharedService) {
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
