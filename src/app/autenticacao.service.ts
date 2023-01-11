import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'
import { JwtHelperService } from '@auth0/angular-jwt'



@Injectable({ providedIn: 'root' })
export class AutenticacaoService {

  jwtHelper: JwtHelperService = new JwtHelperService();
  constructor(private http: HttpClient) {
    this.jwtHelper = new JwtHelperService();
  }


  obterToken(username: string, password: string): Observable<any> {
    const params = new HttpParams()
      .set('username', username)
      .set('password', password)
      .set('grant_type', 'password');
    const headers = {
      'Authorization': 'Basic ' + btoa(environment.CLI_ID + ':' + environment.CLI_SECRET),
      'Content-Type': 'application/x-www-form-urlencoded'
    };
    return this.http.post(environment.urlToken, params.toString(), { headers });
  }


  isAuthenticated(): boolean {
    const token = this.obterTokenStorage();
    if (token) {
      const expirado = this.jwtHelper.isTokenExpired(token);
      return !expirado;
    }
    return false;
  }

  obterTokenStorage() {
    const tokenStr = localStorage.getItem('access_token');
    if (tokenStr) {
      const token = JSON.parse(tokenStr).access_token;
      return token;
    }
    return null;
  }

  getUsuarioAutenticado() {
    const token = this.obterTokenStorage();
    if (token) {
      // console.log(this.jwtHelper.decodeToken(token).name);
      // console.log(this.jwtHelper.decodeToken(token).email);
      // console.log(this.jwtHelper.decodeToken(token).preferred_username);
      // console.log(this.jwtHelper.isTokenExpired(token));
      //  console.log(this.jwtHelper.decodeToken(token).exp);

      const usuario = this.jwtHelper.decodeToken(token).name
      return usuario;
    }
  }

  getExpira() {
    const token = this.obterTokenStorage();
    if (token) {
      return this.jwtHelper.decodeToken(token).exp;
    }
  }

  encerrarSessao() {
    localStorage.removeItem('access_token');
  }

}
