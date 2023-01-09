import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnderecoRoutingModule } from './endereco-routing.module';
import { EnderecoFormComponent } from './endereco-form/endereco-form.component';
import { EnderecoListComponent } from './endereco-list/endereco-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [EnderecoFormComponent, EnderecoListComponent],
  imports: [
    CommonModule,
    EnderecoRoutingModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule
  ], exports: [
    EnderecoFormComponent,
    EnderecoListComponent
  ]


})
export class EnderecoModule { }
