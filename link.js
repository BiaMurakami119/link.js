var trex, trex_running, trex_collided;
var ground, groundImage, groundInvis;
var nuvem, nuvemImg;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png");
  nuvemImg = loadImage("cloud.png");
}

function setup() {
  createCanvas(600, 200);
  
  //crie um sprite de trex
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  
  //adicione dimensão e posição ao trex
  trex.scale = 0.5;
  trex.x = 50
  
  //crie um sprite ground (solo)
  ground = createSprite(200,170,400,20);
  ground.addImage("solo", groundImage);
  ground.velocityX = -5;

  //criar solo invisivel
  groundInvis = createSprite(200, 200, 400, 20);
  groundInvis.visible = false;
 
}

function draw() {
  background(255);
 
  //testar se o solo acabou, e recomeçar o solo
  if(ground.x < 0){
    ground.x = ground.width/2;
  }

  //console.log(trex.y);
  //pular quando a tecla espaço for pressionada
  if(keyDown("space") && trex.y > 164) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
 
 //impedir que o trex caia 
  trex.collide(groundInvis);

  gerarNuvens();

  drawSprites();
}

function gerarNuvens(){
  if(frameCount % 50 == 0){
    var y = random(10, 110);
    nuvem = createSprite(600, y, 30, 10);
    nuvem.velocityX = -4;
    nuvem.addImage("imagem da nuvem", nuvemImg);

    console.log(frameCount);
  }
}
