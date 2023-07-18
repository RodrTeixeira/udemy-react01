
function acao(){
    document.write("Executando ...</br>")
}

// Executa de tempo em tempo

// setInterval(acao, 1000);

// setTimeout(acao, 3000);

var timer = setInterval(acao, 1000);
clearInterval(timer);