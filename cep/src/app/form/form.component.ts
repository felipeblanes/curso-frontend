import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface Endereco {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  unidade: string;
  ibge: string;
  gia: string;
}


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  cep: string;
  resposta: Endereco;
  historico = [];

  constructor(private http: HttpClient) {
    const historicoString = localStorage.getItem('dados'); //Carrega as informacoes que estao no local storage na inicializacao
    if(historicoString){
      this.historico = JSON.parse(historicoString); //transforma variavel em vetor
    }
  }

  ngOnInit() {
  }

  consultarCep() {
    this.http.get(`https://viacep.com.br/ws/${this.cep}/json/`)
      .subscribe((response) => {
        this.resposta = response as Endereco;
        // subscribe - espera a resposta do servidor e executa a funcao no momento que recebe a informacao
        this.historico.unshift(response); //unshift igual ao push, mas coloca no comeco do vetor

        const historicoString = JSON.stringify(this.historico); // transforma o vetor historico em string (funcao JSON.stringfy)
        localStorage.setItem('dados', historicoString) //Armazena os dados da variavel historicoString no Local Storage do browser
      });
  }

}




