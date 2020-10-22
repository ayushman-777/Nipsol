import { Component, OnInit } from '@angular/core';
import {DataService} from "../add-user/data.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params)=>{
      console.log(params)
    })
  }

}
