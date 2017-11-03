import { Component } from '@angular/core';
import {TarefasService} from "../tarefas.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  tarefasNaLista;

  constructor(tarefasService: TarefasService){
    this.tarefasNaLista = tarefasService.tarefasNoServico;
  };

}
