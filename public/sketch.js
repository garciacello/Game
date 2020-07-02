//FUNÇÃO SETUP =========================================
//função de setup - roda apenas 1x
function setup() {
  createCanvas(windowWidth, windowHeight);  
 
  jogo = new Jogo();//instancia do jogo com construtor 'jogo.js'
  telaInicial = new TelaInicial();
  jogo.setup();//metodo 'setup' da instancia criada acima
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

//FUNÇÃO DRAW =========================================
//função dinamica que desenha algo na tela.

function draw() {
 // cenas[cenaAtual].draw();
  //}
  cenas[cenaAtual].draw()
}

