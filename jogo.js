function multiplicador(){
    const quantidadeDeSlot = 3;
    var imagens = [];
    var msgTela;
    var resultados = [];
    
    imagens.push(
        "real.png",
        "realdois.jpg",
        "realtres.jpg",
        "dollar.jpg",
        "dollardois.jpg",
        "dollartres.jpeg",
        "Euro.png",
        "eurodois.jpg",
        "eurotres.jpg"
    );
    
    var divImagens = document.querySelector("#imagens");
    var divResultado = document.getElementById("resultado");

    divResultado.classList = "";
    divResultado.innerHTML = "Rodando...";

    var rodando = setInterval(rodar, 100);
    
    setTimeout(function() {
        clearInterval(rodando);
        verifiqueSeGanhou();
    }, 1000);
    

    function rodar() {
        for (var i = 0; i < quantidadeDeSlot; i++) {
            var aleatorio = 0;
            var slotName = '.slot-' + (i + 1);
            var slotAtual = divImagens.querySelector(slotName);
    
            aleatorio = Math.floor(Math.random() * imagens.length);
            slotAtual.src = imagens[aleatorio];
    
            resultados[i] = imagens[aleatorio];
        }
    }

    function verifiqueSeGanhou() {
        if (resultados[0] == resultados[1] && resultados[0] == resultados[2]) {
            msgTela = "Parabéns! Você ganhou!!!!";
            divResultado.innerHTML = msgTela;
            divResultado.classList = 'won'
        } else {
            msgTela = "Infelizmente você perdeu!!!";
            divResultado.innerHTML = msgTela;
            divResultado.classList = 'lost'
        }
    }
} 
