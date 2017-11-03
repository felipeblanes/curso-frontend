const imagens = document.querySelectorAll('.card .card-img-top');
const imagemModal = document.querySelector('.modal-body img');

for(let imagem of imagens){
  imagem.addEventListener('click', () => {
    console.log(event.target.src)
    imagemModal.src = event.target.src;
    $('#exampleModalLong').modal(); //seria equivalente a fazer document.querySelector('#exampleModalLong').modal()
  })
}
