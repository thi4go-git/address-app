import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const URL_TOKEN = 'http://192.168.1.254:8180/realms/quarkus-keycloak-realm/protocol/openid-connect/token';
const CLI_ID = 'karkus-keycloak-client';
const CLI_SECRET = 'Yo0q11Jt70p6DnT0vNRM6nnBf8jDGNzl';
@Injectable({ providedIn: 'root' })
export class AutenticacaoService {

  constructor(private http: HttpClient) { }

  obterToken(username: string, password: string): Observable<any> {
    const params = new HttpParams()
      .set('username', username)
      .set('password', password)
      .set('grant_type', 'password');

    const headers = {
      'Authorization': 'Basic ' + btoa(CLI_ID + ':' + CLI_SECRET),
      'Content-Type': 'application/x-www-form-urlencoded'
    };

    return this.http.post(URL_TOKEN, params.toString(), { headers });
  }


}
