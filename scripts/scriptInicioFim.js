/*--------------------------------------------*/
/* INICIANDO E TERMINANDO O JOGO */

BTNINICIAR.addEventListener("click", ()=>{
    tempoImg = (INPDIFICULDADE.value)/10;
    nRodada = 0;

    PGINICIO.style.display = "none";
    rodadaComeco();
});

BTNJOGARNOVAMENTE.addEventListener("click", ()=>{
    location.reload();
});