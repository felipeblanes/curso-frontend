let titulo = document.querySelector('h1');
let texto = document.querySelector('p');
let modal = document.querySelector('.modal');

function mudarTitulo(){
  titulo.innerHTML = 'Chapolin';
}

function mudarTexto(){
  texto.style.color = 'red';
}

// Ao clicar no botao abre a janela de popup
function alternarModal(){
  modal.style.display = 'block'; //block exibe o elemento
}

// Ao clicar no botao fecha a janela de popup
function ocultarModal(){
  modal.style.display = 'none'; //none oculta o elemento
}

// Funcao exibe ou ovulta o popup 
// function alterarModal(){
//   if(modal.style.display == 'block'){
//     modal.style.display = 'none';
//   } else{
//     modal.style.display = 'block';
//   }
// }
