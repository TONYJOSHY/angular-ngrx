import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, UserLogin, ResponseType, ResponseTypeList } from './login.model';
import { environment } from 'src/environments/environment';
import { Operator } from './operator.model';

@Injectable({
  providedIn: 'root'
})
export class EffectsService {

  baseurl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  login(loginData: UserLogin){
    let url = this.baseurl + 'v3/accounts/login/';
    return this.http.post<ResponseType<User>>(url, loginData)
  }

  logout(){
    let url = this.baseurl + 'v3/accounts/logout/';
    return this.http.get<ResponseType<string>>(url)
  }

  getOperator(params: any){
    let url = this.baseurl + 'v3/accounts/operator/';
    return this.http.get<ResponseTypeList<Operator[]>>(url, this.optionsWithParams(params))
  }

  optionsWithParams(params: any){
    const httpOptions = {
      params: new HttpParams({ fromObject: params })
    }
    return httpOptions;
  }
}
