import { Component, OnInit } from '@angular/core';
import { EnderecoService } from 'src/app/endereco.service';
import { EnderecoList } from '../enderecoList';

@Component({
  selector: 'app-endereco-list',
  templateUrl: './endereco-list.component.html',
  styleUrls: ['./endereco-list.component.css']
})
export class EnderecoListComponent implements OnInit {

  colunas = ['id', 'cep', 'logradouro', 'complemento',
    'bairro', 'localidade', 'uf', 'ibge', 'gia', 'ddd', 'siafi'];

  listaEnderecos: EnderecoList[] = [];

  constructor(private service: EnderecoService) { }

  ngOnInit(): void {


    this.service.listarClientes()
      .subscribe(resposta => {
        console.log(resposta);

      }, responseError => {
        console.log(responseError);
      });

  }




}
