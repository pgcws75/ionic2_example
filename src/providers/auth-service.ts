import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpModule,Http, Response, Headers } from '@angular/http';


import {Observable} from 'rxjs/Observable';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*import 'rxjs/add/operator/map';
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

export class User {
  name : string;
  email : string;

  constructor (name : string , email : string ) {
    this.name = name;
    this.email = email;
  }
} 
@Injectable()
export class AuthService {
  currentUser : User;

  http : Http;


  authUrl = "/api/search";

  constructor(public _http : Http) {
    console.log('Hello AuthService Provider');

    this.http = _http;
  }
çç
  // Fetch all existing comments
   login(credentials) : Observable<User[]>{

      let body = JSON.stringify({data1:'1',data2:'2'});
      let header = "'Content-Type': 'application/x-www-form-urlencoded'";

       return this.http.post(this.authUrl,body,header)
                      // ...and calling .json() on the response to return data
                       .map((res:Response) => res.json())
                       //...errors if any
                       .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
   }


  test () {
    this.http.get(this.authUrl);
  }
  public login1(credentials) {

      // if (credentials.email === null || credentials.password === null) {
      //   return Observable.throw("Please insert credentials");
      // } else {
      //   return Observable.create(observer => {
      //
      //      // At this point make a request to your backend to make a real check!
      //     let access = (credentials.password === "pass" && credentials.email === "email");
      //     this.currentUser = new User('Simon', 'saimon@devdactic.com');
      //
      //
      //     observer.next(access);
      //     observer.complete();
      //   });
      // }
  }

}
