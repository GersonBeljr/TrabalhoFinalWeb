/*--------------------------------------------*/
/* Nova Imagem */


function novaImagem() {
    let randomImg = Math.floor((Math.random()*nImg));

    while (imgGasta.includes(randomImg)) {
        randomImg = Math.floor((Math.random()*nImg));
    }

    imgGasta.push(randomImg);

     switch (randomImg) {
    case 1:
      INPIMG.src = "src/imgs/img1.jpg";
      arrayRespostas = ["homem","mar","pedra","ceu","sol","praia","horizonte","casaco","calça","nuvem"];
      break;
    case 2:
      INPIMG.src = "src/imgs/img2.jpg";
      arrayRespostas = ["castelo","arvore","cidade","casas","muralha","igreja","montanhas","ceu","mar","telhados"];
      break;
    case 3:
      INPIMG.src = "src/imgs/img3.jpg";
      arrayRespostas = ["golden gate","ponte","cabos","vigas","aço","ceu","neblina","postes","placas","corrimão"];
      break;
    case 4:
      INPIMG.src = "src/imgs/img4.jpg";
      arrayRespostas = ["casa","bicicleta","tabua","telhado","grama","porta","roda","banco","maçaneta","frame"];
      break;
    case 5:
      INPIMG.src = "src/imgs/img5.jpg";
      arrayRespostas = ["condominio","janela","cortina","predio","porta","","","","",""];
      break;
    case 6:
      INPIMG.src = "src/imgs/img6.jpg";
      arrayRespostas = ["criança","pai","homem","filho","praia","grama","mar","farol","ceu","camisa"];
      break;
    case 7:
      INPIMG.src = "src/imgs/img7.jpg";
      arrayRespostas = ["mar","onda","oceano","lagoa","rio"];
      break;
    case 8:
      INPIMG.src = "src/imgs/img8.jpg";
      arrayRespostas = ["duna","areia","sol","ceu","nuvem","deserto","praia","horizonte","sombra","luz"];
      break;
    case 9:
      INPIMG.src = "src/imgs/img9.jpg";
      arrayRespostas = ["estatua","liberdade","tocha","cobre","ceu","nuvem","livro","biblia","base","pedra"];
      break;
    case 10:
      INPIMG.src = "src/imgs/img10.jpg";
      arrayRespostas = ["horizonte","plantaçao","grama","trigo","ceu","azul","arvore"];
      break;
    case 11:
      INPIMG.src = "src/imgs/img11.jpg";
      arrayRespostas = ["predio","trem","carro","arvore","rua","antena","casas","onibus"];
      break;
    case 12:
      INPIMG.src = "src/imgs/img12.jpg";
      arrayRespostas = ["montanha","grama",];
      break;
    case 13:
      INPIMG.src = "src/imgs/img13.jpg";
      arrayRespostas = ["lago","praia","mar","pedra"];
      break;
    case 14:
      INPIMG.src = "src/imgs/img14.jpg";
      arrayRespostas = ["escada","corrimao","janela","pilar","ceu","azul"];
      break;
    case 15:
      INPIMG.src = "src/imgs/img15.jpg";
      arrayRespostas = ["mel","colher","pote","branco","madeira"];
      break;
  }
    
}
