import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EnderecoList } from './endereco/enderecoList';



@Injectable({ providedIn: 'root' })
export class EnderecoService {

  apiURL: string = environment.apiUrlBase;

  constructor(private http: HttpClient) { }

  listarClientes(): Observable<EnderecoList[]> {
    return this.http.get<EnderecoList[]>(this.apiURL + '/enderecos');
  }

}
