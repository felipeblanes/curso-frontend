const dias = document.querySelectorAll('.semana span');
console.log(dias);

for(let dia of dias){
  dia.addEventListener('click', (event) => {
    // event.target.style.backgroundColor = 'purple';
    // event.target.style.borderRadius = '100%';
    // console.log(event);

    event.target.classList.toggle('selecionado');
      }
    )}
