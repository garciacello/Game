function setup() {
  createCanvas(windowWidth, windowHeight);  
 
  jogo = new Jogo();
  telaInicial = new TelaInicial();
  jogo.setup();
  cenas = {
    jogo,
    telaInicial
  }
  
  botaoGerenciador = new BotaoGerenciador('Iniciar', width / 2, height / 2)
  
   frameRate(40)
  somDoJogo.loop(); 
}

function keyPressed(){
  jogo.keyPressed(key);
}

function draw() {
 // cenas[cenaAtual].draw();
  //}
  cenas[cenaAtual].draw()
}

