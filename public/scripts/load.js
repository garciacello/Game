
function preload() {

  imagemCenario = loadImage('imagens/cenario/Cartoon_Forest_BG_04.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');  
  imagemInimigo= loadImage('imagens/inimigos/gotinha.png'); 
  imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somDoPulo = loadSound('sons/somPulo.mp3');
  somGameOver =loadSound('sons/GameOverSong.mp3');
  imagemTelaInicial = loadImage('imagens/cenario/telaInicial.png');
  fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');
  imagemVida =loadImage('imagens/assets/coracao.png');
  imagemGameOver = loadImage('imagens/assets/game-over.png');
}
