import { Component } from '@angular/core';
import {TarefasService} from "../tarefas.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  tarefasNoForm;




  constructor(tarefasService: TarefasService) {
    this.tarefasNoForm = tarefasService.tarefasNoServico;
  }

  inserir(input: HTMLInputElement){
    this.tarefasNoForm.push({
      titulo: input.value,
      feita: false
    });

    input.value = '';
    console.log(this.tarefasNoForm);
  }

}
