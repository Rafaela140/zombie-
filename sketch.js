var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie;
var zombie_image;
function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bgImg = loadImage("assets/bg.jpeg")
  zombie_image = loadImage("assets/zombie.png")
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adicionando a imagem de fundo
  bg = createSprite(displayWidth/2,displayHeight/2,00,20)
bg.addImage(bgImg)
bg.scale = 1.5

//criando o sprite do jogador
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)


}

function draw() {
  background(0); 




  //movendo o jogador para cima e para baixo e tornando o jogo compatível com dispositivos móveis usando toques
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}
if(keyDown("LEFT_ARROW")){
  player.x = player.x-40
}

if(keyDown("RIGHT_ARROW")){
  player.x = player.x+40
}
//solte balas e mude a imagem do atirador para a posição de tiro quando a tecla de espaço for pressionada
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//o jogador volta à imagem original quando pararmos de pressionar a barra de espaço
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}
zombies()
drawSprites();

}
function zombies(){

  if(frameCount%60===0){
    y=Math.round(random(200,500))
    console.log(y)
    zombie = createSprite(displayWidth-100,displayHeight-y,30,50)
    zombie.addImage(zombie_image) 
    zombie.scale = 0.20
    zombie.velocityX = -3
    zombie.lifetime=300

  }
  
 
}