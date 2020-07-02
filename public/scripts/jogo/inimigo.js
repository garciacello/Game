class Inimigo extends Animacao {
constructor (matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite,velocidade) {
      super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)    
  
  
   //essas duas propriedades controlam o "atraso" nos inimigos, para que
    //eles não aparecam ao mesmo tempo
      this.velocidade = velocidade;
      this.x = width; 
  }// mexi aqui
    move(){
      this.x -= this.velocidade;
  
      }
    aparece(){
      this.x = width
    }
}  
