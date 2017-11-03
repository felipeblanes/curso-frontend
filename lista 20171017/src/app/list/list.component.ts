import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  valor = 0;
  tarefas = [
    {
      titulo: 'Comprar uma Harley',
      feita: false
    },
    {
      titulo: 'Apagar o Atom do PC',
      feita: false
    }
  ];


  incrementar(){
    this.valor++;
  }

}
