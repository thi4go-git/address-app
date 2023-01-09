import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  loginError: boolean;


  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("username: " + this.username + " | password: " + this.password);
    this.router.navigate(['/home']);
  }


}
