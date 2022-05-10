var trex, trex_running;



function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
}

function setup(){
  createCanvas(600,200);
  
  //create a trex sprite
  trex = createSprite(20, 180, 20, 100);
  trex.addAnimation("correndo", trex_running);
  trex.scale = 20/100;
}

function draw(){
  background("white");
  
  drawSprites();
}
