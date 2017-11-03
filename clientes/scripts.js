const div = document.querySelector('div');

class Cliente {
  constructor(nome, email){
    this.nome = nome;
    this.email = email;

    this.compras = [];
  }

  calcularGastos(){
    let gastos = 0;

    for(let produto of this.compras){
      gastos = gastos + produto.valor;
    }
    return gastos;
  }

  dizerNome(){
    console.log(this.nome);
  }

  fazerCompra(item){

  }
}

const clientes = [
  new Cliente('João da Silva', 'joaodasilva@gmail.com'),
  new Cliente('Maria da Silva', 'mariadasilva@gmail.com')
];

clientes[0].compras.push({
  produto: 'Bicicleta',
  valor: 20
});

clientes[0].compras.push({
  produto: 'Betoneira',
  valor: 400
});

console.log(clientes[0].calcularGastos());

const umCliente = new Cliente('José');
const inputProduto = document.querySelector('#input-produto');
const inputValor = document.querySelector('#input-valor');
const botao = document.querySelector('button');

botao.addEventListener('click', () => {
  umCliente.compras.push({
    produto: inputProduto.value,
    valor: inputValor.value
  })
})





// let humano = new Cliente('João da Silva', 'joaodasilva@gmail.com');
// let bipede = new Cliente('Maria da Silva', 'mariadasilva@gmail.com');


// let bipede = new Cliente();
// bipede.nome = 'Maria da Silva';
// bipede.email = 'mariadasilva@gmail.com';




// let clientes = [{
//     nome: 'João da Silva',
//     email: 'joaodasilva@gmail.com',
//     idade: 23,
//     compras: [
//       {
//         produto: 'Bicicleta',
//         valor: 20
//       },
//       {
//         produto: 'Betonera',
//         valor: 400
//       }
//
//     ],
//     calcularGastos(){
//       let gastos = 0;
//
//       for(let produto of this.compras){
//         gastos = gastos + produto.valor;
//       }
//       return gastos;
//     }
//   },
//   {
//     nome: 'Maria da Silva',
//     email: 'mariadasilva@gmail.com',
//     idade: 28,
//     compras: [
//       {
//         produto: 'Moto',
//         valor: 1000
//       }
//     ],
//     calcularGastos(){
//       let gastos = 0;
//
//       for(let produto of this.compras){
//         gastos = gastos + produto.valor;
//       }
//       return gastos;
//     }
//   },
//   {
//     nome: 'Maicon Jaquison',
//     email: 'maicon@gmail.com',
//     idade: 57,
//     compras: [
//       {
//         produto: 'Luva',
//         valor: 0.2
//       }
//     ],
//     calcularGastos(){
//       let gastos = 0;
//
//       for(let produto of this.compras){
//         gastos = gastos + produto.valor;
//       }
//       return gastos;
//     }
//   }
// ]
//
// let string = '';
//
// for(let cliente of clientes){
//   string += ' ' + cliente.nome;
// }
//
// div.innerHTML = string;
//
// div.innerHTML = clientes[0].compras[1].produto;
//
// console.log(clientes[0].calcularGastos());
// console.log(clientes[1].calcularGastos());
// console.log(clientes[2].calcularGastos());
