import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { EnderecoService } from 'src/app/endereco.service';
import { EnderecoList } from '../enderecoList';

@Component({
  selector: 'app-endereco-list',
  templateUrl: './endereco-list.component.html',
  styleUrls: ['./endereco-list.component.css']
})
export class EnderecoListComponent implements OnInit {


  totalElementos = 0;
  pagina = 0;
  tamanho = 10;
  pageSizeOptions: number[] = [10];
  qtdeRegistros: number;
  listaEnderecos: EnderecoList[] = [];

  constructor(private service: EnderecoService) { }

  ngOnInit(): void {


    this.service.listarClientes()
      .subscribe(resposta => {
        this.listaEnderecos = resposta;
      }, responseError => {
        console.log(responseError);
      });

  }


  paginar(event: PageEvent) {
    this.pagina = event.pageIndex;
  }



}
