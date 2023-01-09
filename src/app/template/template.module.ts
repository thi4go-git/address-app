import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { CorpoComponent } from './corpo/corpo.component';
import { MatTabsModule } from '@angular/material/tabs';
import { EnderecoModule } from '../endereco/endereco.module';



@NgModule({
  declarations: [CabecalhoComponent, CorpoComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    EnderecoModule
  ], exports: [
    CabecalhoComponent,
    CorpoComponent
  ]
})
export class TemplateModule { }
