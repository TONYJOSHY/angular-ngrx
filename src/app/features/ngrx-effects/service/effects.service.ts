import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, UserLogin, ResponseType } from './login.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EffectsService {

  baseurl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  login(loginData: UserLogin){
    let url = this.baseurl + 'v3/accounts/login/'
    return this.http.post<ResponseType<User>>(url, loginData)
  }
}
