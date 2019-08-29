import { Component, OnInit } from '@angular/core';
import{ User } from '../user'
import { HttpClient } from '@angular/common/http';
import { Repository } from '../repository-class/repository'
@Component({
  selector: 'app-gtihub',
  templateUrl: './gtihub.component.html',
  styleUrls: ['./gtihub.component.css']
})
export class GtihubComponent implements OnInit {

  user:User[]=[
    new User("Diane Mahoro"),
  ];
  repositories: Repository;
  constructor( private http:HttpClient) { }

  ngOnInit() {
    interface repos{
      name:string;
      biography: string;
      public_repos: number;
    }
    this.http.get<repos>("https://api.github.com/users/diane-mahoro?access_token=9ff0b69b6505ff7669adad39ef03ba85828b5d48").subscribe(data=>{
      this.repositories = new Repository(data.name, data.public_repos, data.biography);
    });
  }

}
