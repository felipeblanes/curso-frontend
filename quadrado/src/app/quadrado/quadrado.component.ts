import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quadrado',
  templateUrl: './quadrado.component.html',
  styleUrls: ['./quadrado.component.scss']
})
export class QuadradoComponent implements OnInit {
  texto: string;


  constructor() { }

  ngOnInit() {
  }

  inserir(valorTexto){
    this.texto = valorTexto.value;
    valorTexto.style.display = "none";

    console.log(this.texto);

  }

   desaparecer(quadrado){
     if(this.texto){
       quadrado.style.display = "none";
     }
   }

}
