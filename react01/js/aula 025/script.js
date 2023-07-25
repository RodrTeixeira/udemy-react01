
// SOME EVERY

let nomes = ["Matheus", "Lucas", "Antonio"];

let nomes1 = [
    {nome: "Matheus", idade: 12},
    {nome: "Alberto", idade: 18},
    {nome: "Pedro", idade: 22}
];

console.log(nomes.some(nome => nome === "Lucas"));

console.log(nomes1.every(nome1 => nome1.idade >= 12));

if(nomes1.every(nome1 => nome1.idade >= 12)) {
    console.log("Todos sao maiores que 12");
}