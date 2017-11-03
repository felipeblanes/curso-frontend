
class Usuario {
  constructor(nome, email) {
    this.nome = nome;
    this.email = email;

    this.tarefas = [];
  }

  inserirTarefa(titulo, duracao, descricao){
    this.tarefas.push(new Tarefa(titulo, duracao, descricao));
  }

}

class Tarefa {
  constructor(titulo, duracao, descricao) {
    this.titulo = titulo;
    this.duracao = duracao;
    this.descricao = descricao;
    this.feita = false;
  }

  fazer(){
    this.feita = true;
  }

}

const joao = new Usuario('joao', 'email');
joao.inserirTarefa('tarefa 1', '1 dia', 'teste');
joao.inserirTarefa('tarefa 2', '2 dia', 'teste2');
joao.tarefas[1].fazer();
console.log(joao);
