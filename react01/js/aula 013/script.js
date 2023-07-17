
document.write("</br> Escolha seu Pedido: </br>")
document.write("</br> 0 - Sorvete ")
document.write("</br> 1 - Suco ")
document.write("</br> 2 - Agua </br> </br>")

// Switch

function pedir(){

    x = prompt("O que deseja pedir? ")

    switch(x){
        case "0":
            alert("Voce pediu Sorvete !");
            break;
        case "1":
            alert("Voce pediu Suco !");
            break;
        case "2":
            alert("Voce pediu Agua !");
            break;
        default:
             alert("Nao existe esta opcao !");
            break;
    }
}