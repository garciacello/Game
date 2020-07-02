//Classe construtora que vai se aplicar a todos os personagens do jogo
class Animacao {
   //1: matriz do movimento, 2: imagem, 3: posicao x na tela, 4: largura do personagem, 5: altura do personagem, 6: largura de cada sprite, 7: altura de cada sprite
  
  constructor (matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){
    this.matriz = matriz;
    this.imagem = imagem;
    this.largura = largura;
    this.altura = altura;
    this.x = x; //posição eixo X inicial na tela
    this.variacaoY = variacaoY;
    this.y = height - this.altura - this.variacaoY;
    
    this.larguraSprite = larguraSprite;
    this.alturaSprite = alturaSprite;
    
        this.frameAtual = 0;
  }
  //Metdo exibe animacao
    exibe(){
       //sintaxe: image(1,2,3,4,5,6,7,8,9,10)
  //parametros: 1: imagem, 2: posicao X da imagem no canvas, 3: posicao Y da imagem no canvas, 4: largura da img, 5: altura da img, 6: posicao mapa no X, 7: posicao mapa no Y, 8: largura do mapa, 9: altura do mapa
      
       image(this.imagem, this.x, this.y, this.largura,this.altura, this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], this.larguraSprite, this.alturaSprite);
         
        this.anima(); //chama o metodo anima.
  }
      //Metodo anima do animacao.js
    anima(){
      this.frameAtual++
      
      if(this.frameAtual >= this.matriz.length -1){
        this.frameAtual = 0
    }
}
}