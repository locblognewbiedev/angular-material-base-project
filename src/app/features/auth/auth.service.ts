import { Injectable } from '@angular/core';
import User from '../../models/user.type';
import { HttpClient } from '@angular/common/http';
import { BACKEND_API_ENDPOINT } from '../../eviroment/eviroment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private TOKEN_KEY = 'token_auth';
  private ROLE_KEY = 'role_auth'
  constructor(private http:HttpClient) { }

  setToken(token: string) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }
  getToken():string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }
  setRole(role:string) {
    localStorage.setItem(this.ROLE_KEY, role)
  }
  getRole() {
    return localStorage.getItem(this.ROLE_KEY);
  }
  clearToken():void {
    localStorage.removeItem(this.TOKEN_KEY);
  }
  clearRole():void {
    localStorage.removeItem(this.ROLE_KEY);
  }
  register(user:User) {
    return this.http.post<any>(BACKEND_API_ENDPOINT + 'register',user);
  }
  login(user: User) {
    return this.http.post<any>(BACKEND_API_ENDPOINT + 'login',user)
    .pipe(
      map(response => {
        // Giả sử server trả về token trong response
        const token = response.access_token;
        const role = response.role;
        this.setToken(token); // Lưu token vào storage
        this.setRole(role);
        return response; // Trả về response cho component
      })
    );
  }
}
