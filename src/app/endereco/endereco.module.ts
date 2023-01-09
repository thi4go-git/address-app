import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnderecoRoutingModule } from './endereco-routing.module';
import { EnderecoFormComponent } from './endereco-form/endereco-form.component';


@NgModule({
  declarations: [EnderecoFormComponent],
  imports: [
    CommonModule,
    EnderecoRoutingModule
  ], exports: [
    EnderecoFormComponent
  ]


})
export class EnderecoModule { }
