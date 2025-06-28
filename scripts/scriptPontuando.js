/*--------------------------------------------*/
/* Pontuando */

// Aumento a pontuação
function pontuando() {
    pontosRecebidos = 10/tempoImg;
    pontos += pontosRecebidos;
};

// Limpa o quadro das resposta  
function limpar() {
    INSTXTQUADRO.innerHTML = "";
}

// Avalia se a resposta do usuario é valida
function respondendo() {
    resposta = INPRESPOSTAS.value;

    const p = document.createElement("p");
    p.textContent = resposta;
    p.className = arrayRespostas.includes(resposta.toLowerCase()) ? "certo" : "errado";

    if (arrayRespostas.includes(resposta.toLowerCase())) {
        pontuando();
        let indice = arrayRespostas.indexOf(resposta);
        arrayRespostas.splice(indice, 1);
    }

    INSTXTQUADRO.appendChild(p);
}

// Faz com que o input de resposta funcione com enter
INPRESPOSTAS.addEventListener("keydown", () => {
    if (event.key === "Enter" && !(INPRESPOSTAS.value == "")) {
        respondendo();
        INPRESPOSTAS.value = "";
        INPRESPOSTAS.focus();
    }
})