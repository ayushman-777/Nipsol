import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class DataService {
  private messageSource = new BehaviorSubject("");
  currUserName = this.messageSource.asObservable();

  constructor() {}

  changeName(name: string) {
    this.messageSource.next(name);
  }
}
