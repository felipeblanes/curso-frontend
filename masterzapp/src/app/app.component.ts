import { Component } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  referenciaDoBanco: AngularFireList<any>;
  mensagens;

  constructor(private db: AngularFireDatabase){
    this.referenciaDoBanco = this.db.list('mensagens');
    this.referenciaDoBanco.valueChanges().subscribe(mensagensDoFirebase => {
      this.mensagens = mensagensDoFirebase;
    })
  }

  enviar(conteudoDaTextArea){
    this.referenciaDoBanco.push({
      conteudo: conteudoDaTextArea
    });
  }

}


