function multiplicador() {
    const quantidadeDeSlot = 3;
    var imagens = [];
    var msgTela;
    var resultados = [];

    imagens.push(
        "./images/real.png",
        "./images/realdois.jpg",
        "./images/realtres.jpg",
        "./images/dollar.jpg",
        "./images/dollardois.jpg",
        "./images/dollartres.jpeg",
        "./images/Euro.png",
        "./images/eurodois.jpg",
        "./images/eurotres.jpg"
    );

    var divImagens = document.querySelector(".images");
    var divResultado = document.getElementById("results");

    divResultado.classList = "";
    divResultado.innerHTML = "Rodando...";

    var rodando = setInterval(rodar, 100);

    setTimeout(function () {
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
            msgTela = "Infelizmente você perdeu!";
            divResultado.innerHTML = msgTela;
            divResultado.classList = 'lost'
        }
    }
}
