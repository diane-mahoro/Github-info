import { Component, OnInit } from '@angular/core';
// import{ User } from '../user'
import { RequestService } from '../http-request/request.service'
// import { HttpClient } from '@angular/common/http';
// import { Repository } from '../repository-class/repository';
@Component({
  selector: 'app-gtihub',
  templateUrl: './gtihub.component.html',
  styleUrls: ['./gtihub.component.css']
})
export class GtihubComponent implements OnInit {
  anotherprofile:any;

  // users:User;
  repositories: any;
  username:string;
  constructor( private profile:RequestService) {
    
   }
   findprofile(){
   this.profile.updateProfile(this.username);
   this.profile.getprofileinfo().subscribe(profile =>{
    // console.log(profile);
    this.anotherprofile = profile;
  }); 
  this.profile.getrepos().subscribe(repos =>{
    // console.log(repos);
    this.repositories=repos;
  });
  }

  ngOnInit() {
//   this.profile.userequest();
//  this.users= this.profile.users;
}
}