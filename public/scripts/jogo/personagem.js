class Personagem extends Animacao {
    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){
      
      super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);
      
      this.variacaoY = variacaoY;
       //yInicial é o eixo Y original do personagem (no chão) 
      this.yInicial = height - this.altura - this.variacaoY;
      //Passa o valor de yInicial para o Y.
      this.y = this.yInicial; 
        //altura do pulo: começa 0 e recebe um valor no pula()
      this.velocidadeDoPulo = 0;
      //pixels por ciclo que a personagem é puxada pra baixo
      this.gravidade = 6;
      this.alturaDoPulo = -50
      this.pulos = 0; //controla vezes de pulos
      this.invencivel = false;
    }
   
    //Metodo pula (com if p/ controlar o double jump)
    pula() {
      if(this.pulos < 3){
      this.velocidadeDoPulo = this.alturaDoPulo
    // pixels pra "cima"    
      this.pulos++  
    }
    }
  //Metodo aplicaGravidade
  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade
    
    if(this.y > this.yInicial){
    this.y = this.yInicial
      this.pulos = 0
    }
  }
  
  tornarInvencivel(){
    this.invencivel = true
    setTimeout(()=> {
      this.invencivel = false
    }, 1000)
  }
  
  
  
  //Metodo estaColidindo - https://github.com/bmoren/p5.collide2D
  //o parametro 'inimigo' é um objeto, então ele traz consigo todas as propriedades
  //do objeto para que eu possa usar na função 'collideRectRect'
   estaColidindo(inimigo){
     if(this.invencivel){
       return false;
     }
     const precisao = .7
     const colisao = collideRectRect(
       this.x,
       this.y,              
       this.largura * precisao,
       this.altura * precisao,
       inimigo.x,
       inimigo.y,
       inimigo.largura * precisao,
       inimigo.altura * precisao
    );
     return colisao;
  }
}