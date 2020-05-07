import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardAuthService } from '../service/hard-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username ='Enter Username';
  password=''
  invalid;
  message='Invalid login';
  constructor(private router: Router, private hrdAuth : HardAuthService) {
  router= router;
  }

  ngOnInit(): void {
  }

  onClick(){
    console.log(this.username);
    console.log(this.password);
    if(this.hrdAuth.authenticate(this.username, this.password)){
      this.router.navigate([`welcome/${this.username}`]);
      this.invalid = false;
    }else{
      this.invalid = true;
    }
  }

}
