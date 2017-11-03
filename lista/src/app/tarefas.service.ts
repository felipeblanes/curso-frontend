import { Injectable } from '@angular/core';

@Injectable()
export class TarefasService {
  tarefasNoServico = [];
  estatisticas = {
    total: 0,
    pendentes: 0,
    feitas: 0
  };

  constructor() { }

  inserirTarefa(titulo: string){
      this.tarefasNoServico.push({
      titulo: titulo,
      feita: false
    }
  );
  this.estatisticas.total = this.tarefasNoServico.length;
  }
  

}
