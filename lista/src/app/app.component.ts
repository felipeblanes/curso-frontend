import { Component } from '@angular/core';
// import sempre deve existir para buscar o que é um componente

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nome = 'João da Silva';
}
