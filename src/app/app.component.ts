import { Component, VERSION } from '@angular/core';
import {GlobalConstants} from "./Common/globalConstant";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  currUserNameHome = GlobalConstants.currUserName;
}
