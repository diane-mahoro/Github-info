import { Component, OnInit } from '@angular/core';
// import{ User } from '../user'
import { RequestService } from '../http-request/request.service'
// import { HttpClient } from '@angular/common/http';
import { Repository } from '../repository-class/repository';
@Component({
  selector: 'app-gtihub',
  templateUrl: './gtihub.component.html',
  styleUrls: ['./gtihub.component.css']
})
export class GtihubComponent implements OnInit {
  anotherprofile:any;

  // user:User;
  repositories: any;
  constructor( private profile:RequestService ) {
     this.profile.getprofileinfo().subscribe(profile =>{
       console.log(profile);
       this.anotherprofile = profile;
     }); 
     this.profile.getrepos().subscribe(repos =>{
       console.log(repos);
       this.repositories=repos;
     });
   }

  ngOnInit() {
    // interface Repos{
    //   login:string;
    //   bio: string;
    //   public_repos: number;
    }
  //   this.http.get<Repos>("https://api.github.com/users/diane-mahoro?access_token=9ff0b69b6505ff7669adad39ef03ba85828b5d48").subscribe(data=>{
  //     this.repositories = new Repository(data.login, data.public_repos, data.bio);
  //   });
  // }

}
