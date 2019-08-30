import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import "rxjs/add/operator/map";
@Injectable({
  providedIn: 'root'
})
export class RequestService {
private username:string;
private clientid='d4d002894de9c2b14dce';
private clientsecret ='199a054c2119968c86a978fe7c7fb996ef248248';
  constructor(private http:HttpClient) {  
    this.username='diane-mahoro';     
   }
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
  