import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from '../autenticacao.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  loginError: boolean;
  //
  erros: string[];


  constructor(
    private router: Router,
    private authService: AutenticacaoService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService
      .obterToken(this.username, this.password)
      .subscribe(response => {
        console.log(response);
      }, errorResponse => {
        console.log(errorResponse.message);
      }
      )

  }


}
