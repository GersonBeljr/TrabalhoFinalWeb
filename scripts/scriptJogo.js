/*--------------------------------------------*/
/* Roda o jogo */

// Coloca a estrutura de fim ao jogador
function rodadaFim() {
    PGFIM.style.display = "flex";
    INSTXTFIMJOGADOR.innerText = jogadorNome;
    INSTXTFIMPONTOS.innerText = pontos.toFixed(1);
}

// Refaz a imagem
/*
function novaImagem() {
    let novaUrl = "https://picsum.photos/300/200?random=" + Math.floor(Math.random() * 100000);
    INPIMG.src = novaUrl;
}
*/


// Configura a fase de respostas
function rodadaResposta() {
    let tempo = tempoResposta;
    PGRESPOSTA.style.display = "flex";
    INPRESPOSTAS.focus();
    INSTXTCRONOMETRORESP.innerText = tempo;

    let intervalo = setInterval(() => {
        tempo -= 1;

        if (tempo <= 0) {
            PGRESPOSTA.style.display = "none";
            clearInterval(intervalo);
            nRodada++;
            
            INPRESPOSTAS.value = '';

            if (nRodada>=nRodadasMax) {
                rodadaFim();
            } else {
                limpar();
                rodadaComeco();
            }

        } else {
            INSTXTCRONOMETRORESP.innerText = tempo;
        };

    }, 1000)

}

// Configura a o começo da rodada mostrando a imagem
function rodadaComeco() {
    let tempo = tempoImg;

    novaImagem();

    PGIMAGEM.style.display = "flex";
    INSTXTCRONOMETROIMG.innerText = tempo;

    let intervalo = setInterval(() => {
        tempo -= 0.1;

        if (tempo <= 0) {
            PGIMAGEM.style.display = "none";

            clearInterval(intervalo);
            rodadaResposta();      

        } else {
            INSTXTCRONOMETROIMG.innerText = tempo.toFixed(1);
        }
    }, 100);
}

