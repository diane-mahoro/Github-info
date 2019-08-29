import { Component, OnInit } from '@angular/core';
import{ User } from '../user'
@Component({
  selector: 'app-gtihub',
  templateUrl: './gtihub.component.html',
  styleUrls: ['./gtihub.component.css']
})
export class GtihubComponent implements OnInit {

  user:User[]=[
    new User("Diane Mahoro"),
  ];
  constructor() { }

  ngOnInit() {
  }

}
