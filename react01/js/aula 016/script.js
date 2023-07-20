
// localStorage.setItem("nome", "Teste");
// localStorage.getItem("nome");
// localStorage.removeItem("nome");

// var nome = localStorage.nome;
// console.log(nome);

var nome = '';

if( typeof localStorage.nome == 'undefined' || localStorage.nome == 'null' ){
    localStorage.nome = prompt("Digite seu nome : ");
}
nome = localStorage.nome;

document.getElementById('nome').innerHTML = nome;