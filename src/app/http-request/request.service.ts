import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ User } from '../user';
import { promise } from 'protractor';
import { resolve } from 'path';
@Injectable({
  providedIn: 'root'
})
export class RequestService {
  // users:User;
private username:string;
private clientid='d4d002894de9c2b14dce';
private clientsecret ='199a054c2119968c86a978fe7c7fb996ef248248';
  constructor(private http:HttpClient) {  
    // this.users = new User("",0,"","","","");  
   }
  //  userequest(){
  //    interface show{
  //      login: string;
  //      public_repos:number;
  //      followers: any;
  //      location:any; 
  //      following:any;
  //    }
  //   let promise = new Promise((resolve,reject)=>{
  //     this.http.get<show>("https://api.github.com/users/" +this.username + "?access_token=9ff0b69b6505ff7669adad39ef03ba85828b5d48").toPromise().then(response=>{
  //       this.users.name=response.login;
  //            this.users.myrepos=response.public_repos;
  //            this.users.location=response.location;
  //            this.users.followers = response.followers;
  //            this.users.following=response.following;
  //            resolve()
  //           },
  //           error=>{
  //             this.users.name="plzzzzzzzzzzzzzzzzzzzz";
  //                 this.users.location="you can make it this time just try again";
  //                 reject(error);
  //           })
  //   })
  //  }
   getprofileinfo(){
  //  return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secet=" + this.clientsecret);
     return this.http.get("https://api.github.com/users/" +this.username + "?access_token=9ff0b69b6505ff7669adad39ef03ba85828b5d48");
   }
   getrepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secet=" + this.clientsecret);
   }
   updateProfile(username:string){
     this.username = username;
   }
}
  