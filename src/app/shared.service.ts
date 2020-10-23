import { Injectable } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private userDetails: FormGroup[] = [];

  constructor() { }

  addDetails(details: FormGroup): void {
    this.userDetails.push(details);
  }

  getDetails(): FormGroup[]{
    return this.userDetails;
  }
}
