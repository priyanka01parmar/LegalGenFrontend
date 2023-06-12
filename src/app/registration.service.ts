// registration.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
   apiUrl = 'https://localhost:7204/account/register';

  constructor(private http: HttpClient) {}

  // Register User
  registerUser(Email: string, Password: string, Designation: string) {
      const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
      });
      return this.http.post(this.apiUrl + "?Email=" + Email +"&Password=" + Password +"&Designation=" + Designation,{headers:headers});
  }

}
