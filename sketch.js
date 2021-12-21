var player;
var ground;
var enemy;
var start; 
var gameState;
var Play;
var gun,gunImg;
var tiger;
var backround;
var fGround;
var bulletGroup;

function preload(){
  tiger = loadAnimation("tiger 1.png","tiger 2.png","tiger 3.jpg","tiger 4.jpg");
  backround = loadImage("#back.png");
  gunImage = loadImage("gun1.png")
}

function setup() {
  createCanvas(700,200);
  
  gameState = Play;
  
  fGround = createSprite(1390,100);
  fGround.addImage('running', backround);
  fGround.scale = 0.6
  fGround.velocityX = -14;
  
  player = createSprite(60,147,20,20);
  player.addAnimation("running", tiger)
  player.scale = 0.08;
  player.debug = true;
  
  ground = createSprite(260,240,890,50);
  ground.visible = false;
  
  enemy = createSprite(665,100,20,20);
  enemy.addImage("running", gunImage)
  enemy.scale = 0.1
  //enemy.visible = false;
  
  edge1 = createSprite(0,0,232342,5);
  
  hunter = createSprite(665,100,10,10);
  hunter.velocityY = -4;
}

function draw() {
  background(185,185,185);
  bulletGroup = new Group();

       if(fGround.x === 10){
          fGround.x = fGround.width /3;
       }
    player.y = World.mouseY ;
         
    if(hunter.collide(ground)){
       hunter.velocityX = -10
    }
  
  if(hunter.isTouching(edge1)){
     hunter.velocityX = 4;
     }
     

  
    player.collide(ground);
     
  //console.log(gameState);
  drawSprites();
}

function bullets(){
  if(frameCount % 40 === 0){
    var bullet = createSprite(hunter.x,hunter.y,10,40);
    bullet.velocityY = 4;
    bullet.shapeColor = "yellow";
    bullet.lifetime = 108;
    bulletGroup.add(bullet);
     }
  
}