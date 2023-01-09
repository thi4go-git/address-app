import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoaModule } from './pessoa/pessoa.module';
import { EnderecoModule } from './endereco/endereco.module';
import { TemplateModule } from './template/template.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AutenticacaoService } from './autenticacao.service';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule,
    PessoaModule,
    EnderecoModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AutenticacaoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
