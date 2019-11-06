import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  loginRef:string;
  constructor(public http:HttpClient) { }

  checkUserDetails(loginRef):Observable<string>{
    return this.http.post("http://localhost:8090/checkUserLogin",loginRef,{responseType:'text'});
  }
}
