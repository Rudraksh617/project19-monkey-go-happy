var bImage;
var monkey,monkey_running;
var ground,ground_img,score;
var FoodGroup,obstacleGroup;
var bananaImage,banana;
var SurvivalTime;
var obstacle_Image,obstacle;
function preload(){
  bImage=loadImage("jungle.jpg")
  
  player_running= loadAnimation("monkey_01.png","monkey_02.png","monkey_03.png","monkey_04.png","monkey_05.png","monkey_06.png","monkey_07.png","monkey_08.png","monkey_09.png","monkey_10.png");
  
  bananaImage= loadImage("banana.png")
obstacle_Image= loadImage("stone.png")
  FoodGroup=new Group();
  obstacleGroup=new Group();
  
}




function setup() {
  createCanvas(800, 400);
  
  score=0
  SurvivalTime=0
  
  bImage=createSprite(0,0,800,400);
  bImage.addImage("jungle.png")
  bImage.scale=2
  bImage.x=bImage.width/2
  bImageVelocityX=-4;
  
  monkey=createSprite(100,340,20,50)
  monkey.addAnimation("monkey_running",monkey_running)
  monkey.scale=0.1
  
  ground=createStprite(400,350,800,1)
  ground.VelocityX=-4
  ground.x=ground.width/2;
  ground.visible=false
  
}

function draw() {
  background("white");
  switch(score){
    case 10:monkey.scale=0.12;
      break;
      case 20:monkey.scale=0.14;  
      break;
      case 30:monkey.scale=0.16;
      break;
      case 40:monkey.scale=0.18;
      break;
      default:break;
      
  }
   
  
if(keyDown("space")&& monkey.y>=350){
  monkey.VelocityY=-10
}
  monkey.VelocityY=monkey>VelocityY+0.3
  monkey.collide(ground)
  
  ground.VelocityX=-7
  ground.x=ground.width/2;
  
 if(obstacleGroup.isTouching(monkey)){
   monkey.scale=0.2
 }
 if(monkey.isTouching(FoodGroup)){
   FoodGroup.destroyEach()
   score=score+1
   
 } 
  drawSprite();
  fill("white")
  text("score:"+score,500,50)
  
  fill("black")
  var SurvivalTime=Math.round(frameCount/frameRate());
  text("SurvivalTime:"+SurvivalTime,350,50)
  
}
function fruits(){
  if(World.frameCount%200===0){
   
  banana=createSprite(600,250,40,10);
    banana.y=random(120,200)
  banana.addImage(bananaImage)
  banana.scale=0.1
  banana.VelocityX=-3
    banana.lifetime=300
    monkey.depth=monkey.depth+1;
  FoodGroup.add(banana)
}
}
function stones(){
  
 if(World.frameCount%300===0){
  obstacle=createSprite(670,380,10,10)
  obstacle.addImage("obstacle_Image")
  obstacle.VelocityX=-4
  obsracle.scale=0.2
  obstacleGroup.add(obstacle)
  obstacle.lifetime=300
 }
}



