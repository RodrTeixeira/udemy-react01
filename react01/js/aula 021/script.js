
function minhaLista(...nomes) {
    console.log(nomes);
}
minhaLista("Antonio", "Carlos", "Cid");

function minhaLista2(...numeros) {
    console.log(numeros);
}
minhaLista2(1,2,3,4,5);

function cadastrar(usuarios, ...novosUsuarios) {
    let totalUsuarios = [
        ...usuarios,
        ...novosUsuarios
    ];
    return console.log(totalUsuarios)

}

let usuarios = ["Pedro", "Antonio", "Joao"];

let novosUsuarios = cadastrar(usuarios, "Maria", "Clara", "Ana");
