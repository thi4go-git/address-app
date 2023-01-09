import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from 'src/app/autenticacao.service';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

  constructor(private authService: AutenticacaoService) { }

  usuarioLogado: string;
  expira: number;

  dataExpira: Date;

  ngOnInit(): void {
    this.expira = this.authService.getExpira();
    const today = new Date()
    this.dataExpira = new Date((today.getTime() + 1800 ));
    this.usuarioLogado = this.authService.getUsuarioAutenticado();

  }

}
