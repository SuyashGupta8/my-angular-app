import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardAuthService {

  constructor() { }

  authenticate(username, password){
    if(username === 'suyash' && password =='gupta'){
      sessionStorage.setItem('user', username);
      return true;
    }
    else{
      return false;
    }
  }
  isUserLoggedIn(){
    let user = sessionStorage.getItem('user');
    return !(user == null);
  }
  logOut(){
    sessionStorage.removeItem('user');
  }
}
