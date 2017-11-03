import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { RodapeComponent } from './rodape/rodape.component';
import {TarefasService} from "./tarefas.service";

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FormComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    TarefasService
    //Chamada de todos os servicos, tem que incluir o nome da classe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
