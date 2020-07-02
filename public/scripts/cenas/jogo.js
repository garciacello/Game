class Jogo {
  constructor(){
    this.indice = 0;
    
    this.mapa = fita.mapa;
  }
  
    // metodo para setup do jogo
    setup(){
      //instancia da variavel cenario com (imagem a ser carregada, deslocamento em pixels(?) por ciclo)
  cenario = new Cenario(imagemCenario, 6);
  pontuacao = new Pontuacao();
  vida = new Vida(fita.configuracoes.vidaMaxima,fita.configuracoes.vidaInicial);
      
  personagem = new Personagem(matrizPersonagem,
imagemPersonagem, 0, 30, 110, 135, 220, 270);
  const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104,10);
  const inimigoVoador = new Inimigo(matrizInimigoVoador,imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10 );
  
  const inimigoGrande = new Inimigo(matrizInimigoGrande,imagemInimigoGrande, width , 0, 200, 200, 400, 400,15);
  
  inimigos.push(inimigo);
  inimigos.push(inimigoGrande);
  inimigos.push(inimigoVoador);
    }  
  
  //Metodo para detectar o pulo
   keyPressed(key) {
  if (key === 'ArrowUp') {
    personagem.pula()
    somDoPulo.play()
    }
  }
  
  // Metodo que desenha o jogo
    draw(){ 
  cenario.exibe(); //chama o metodo que desenha o fundo
  cenario.move(); //chama o metodo que move o fundo
  
  vida.draw()    
  pontuacao.exibe(); //chama metodo de texto que mostra pontos 
  pontuacao.adicionarPonto(); //soma pontos enquanto o jogador não perde
  personagem.exibe();//chama o metodo exibe da hipsta
  personagem.aplicaGravidade(); // aplica a gravidade
      
  const linhaAtual = this.mapa[this.indice];
      
   //salva apenas 1 inimigo de todos disponiveis em 'inimigo'   
  const inimigo = inimigos[linhaAtual.inimigo];
    //checa se o inimigo atual ja saiu da tela   
  const inimigoVisivel = inimigo.x < -inimigo.largura; 
  
  inimigo.velocidade = linhaAtual.velocidade;
          
  inimigo.exibe() // mostra um inimigo
  inimigo.move()
    
      
//vai somando pra mudar os inimigos do array (0,1 ou 2)
    if(inimigoVisivel){
        this.indice++;
        inimigo.aparece() // chama inimigos que estao no mapa
      if (this.indice > this.mapa.length - 1){
         this.indice = 0; 
      }
    }   
  
  if (personagem.estaColidindo(inimigo)) {
      
      vida.perdeVida()
    //quando colidir 1x, encerra o jogo.
      personagem.tornarInvencivel()
    if(vida.vidas === 0) {
    //imagem de game over ajustado no centro da tela
      image(imagemGameOver, width/2 - 200,  height/3 )
      somDoJogo.stop();
      somGameOver.play();
      noLoop() //acaba o jogo quando dá o collide.
        }
      } 
     } 
  }     
  