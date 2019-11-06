import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  result:string;
  
  constructor(public router:Router,public loginService:LoginserviceService) { }//DI

  ngOnInit() {
  }

  checkUser(loginRef){
    /*
    console.log(loginRef);
    if(loginRef.userId=="Ravi" && loginRef.password=="123"){
      console.log("Hello Hello");
      sessionStorage.setItem("name","Ravi");
      this.router.navigate(["/home"]);
    }
    else{
      this.result="Invalid username or password";
    }
  }*/

  this.loginService.checkUserDetails(loginRef).subscribe(info=>{
    if(info=="Success"){
      this.router.navigate(["/home"]);
    }else {
      this.result="Invalid username or password";
    }
  });
}}
