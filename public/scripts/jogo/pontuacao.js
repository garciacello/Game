class Pontuacao {
  constructor(){
    this.pontos = 0; //sempre que jogo iniciar, começa com 0
  }
  
  exibe(){
    textAlign(RIGHT)
    fill('#fcd35')
    textSize(50); //seta o tamanho do texto
    text(parseInt(this.pontos), width - 30, 50);  //exibe os pontos, posicao x, posicao y
  }
  adicionarPonto(){
    this.pontos = this.pontos +.2;
  }
}
