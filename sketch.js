
var monkey , monkey_running;

var ground1;

var banana ,bananaImage, obstacle, obstacleImage;

var bananaGroup, obstacleGroup;

var score;

var survivalTime = 0;

function preload(){
  
 monkey_running =      loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,400);

monkey = createSprite(80,355);
monkey.addAnimation("monkeyisrunning",monkey_running);
monkey.scale = 0.1;
  
ground1 = createSprite(400,390,800,10);
ground1.velocityX = -4
ground1.x = ground1.width /2;
console.log(ground1.x);
  
bananaGroup = createGroup();
obstacleGroup = createGroup();
  
}


function draw() {
background("lightGreen");
 if (ground1.x < 0)
{
  
      ground1.x = ground1.width/2;
  
}
  
 if(keyDown("space")&& monkey.y >= 100)
 {
        monkey.velocityY = -12;
 }
  
monkey.velocityY = monkey.velocityY + 0.6 
monkey.collide(ground1);
  
bananas1();
obstacles1();
drawSprites();

stroke("black");
textSize(20);
fill("black");  
survivalTime = Math.ceil(frameCount/frameRate())
text("survival Time:  " + survivalTime,100,50);
}


function bananas1()
{
if(frameCount % 80 === 0){
banana = createSprite(600,100);
banana.addImage(bananaImage);
banana.scale = 0.1;
banana.y = Math.round(random(120,240));
banana.velocityX = -10;
banana.lifetime = 130
bananaGroup.add(banana); 
    }
}


function obstacles1()
{
if(frameCount % 300 === 0){
obstacle = createSprite(590,355);
obstacle.addImage(obstacleImage);
obstacle.scale = 0.2;
obstacle.velocityX = -7;
obstacle.lifetime = 130
obstacleGroup.add(obstacle); 
}
}






