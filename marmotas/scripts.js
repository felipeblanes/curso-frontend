let elementoImagem = document.querySelector('.banner img');

let banners = [
  'images/banner1.jpg', //0
  'images/banner2.jpg', //1
  'images/banner3.jpg' //2
];
let bannerAtual = 0;

function trocarBanner(){
  bannerAtual = bannerAtual + 1;
  if(bannerAtual == banners.length){
    bannerAtual = 0;
  }
  let imagem = banners[bannerAtual];
  elementoImagem.src = imagem;
}










// Trocar banner com if
// let elementoImagem = document.querySelector('.banner img');
//
// function trocarBanner(){
//   console.log(elementoImagem.src);
//   // Troca de banner utilizando if
//   if (elementoImagem.src == banner1) {
//     elementoImagem.src = banner2;
//   } else {
//     elementoImagem.src = banner1;
//   }
// }
