import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import {FormGroup} from "@angular/forms";

@Injectable()
export class DataService {
  private messageSource = new BehaviorSubject("");
  currUserName = this.messageSource.asObservable();
  addUserName:string[];
  addUserEmail:string[]
  addUserTel:string[]
  addUserAddress:string[]
  constructor() {}

  changeName(name: string) {
    this.messageSource.next(name);
  }

  public pushDetails(name:string, email:string, tel:string, address:string) {
    this.addUserName.push(name);
    this.addUserEmail.push(email);
    this.addUserTel.push(tel);
    this.addUserAddress.push(address);
  }
}
