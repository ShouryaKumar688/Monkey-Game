
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0; 

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  monkey = createSprite(50,300,20,20);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale = 0.120;
  
  ground = createSprite(200,375,600,20);
  ground.velocityX = -3
  
}


function draw() {
 background(155);
 console.log(monkey.y)
   
 FoodGroup = new Group(); 
 obstacleGroup = new Group();
  
 food(); 
 rock();
  
 if(keyWentDown("space")) {
    monkey.velocityY = -16;
 }
  
 monkey.velocityY += 0.7; 
 if(ground.x < 100){
   ground.x = 200;
 } 
 
  
  
 monkey.collide(ground);
 drawSprites(); 
  
stroke("white");
textSize(20); 
fill("white"); 
text("Score: "+ score, 500,50); 
stroke("black"); 
textSize(20); 
fill("black"); 
survivalTime=Math.ceil(frameCount/frameRate());
text("Survival Time: "+ survivalTime, 100,50); 
}

function food(){
  if(frameCount%80===0){
    banana = createSprite(400,random(120,200),20,20);
    banana.addImage(bananaImage);
    banana.scale=0.085;
    banana.lifetime=80;
    banana.velocityX=-5;
    FoodGroup.add(banana);
  }
}

function rock(){
  if(frameCount%300===0){
    boulder=createSprite(400,325,20,20);
    boulder.addImage(obstaceImage);
    boulder.scale=0.25 ;
    boulder.velocityX=-4;
    boulder.lifetime = 100;
    obstacleGroup.add(boulder)
  }
}




