var bullet,wall;
var speed,weight,thickness;
function setup() {
  createCanvas(1600,400);
 
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
 bullet= createSprite(50, 200, 20, 5);
 bullet.velocityX=speed;
bullet.shapeColor="white";
 wall=createSprite(1200,200,thickness,height/2);
 wall.shapeColor=color(80,80,80);
 
}

function draw() {
  background(255,255,255);  

if (hasCollided(bullet,wall)) {
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

  

  if (damage<10) {
    bullet.shapeColor=color(0,255,0);
  }
  
  if (damage>10) {
    bullet.shapeColor=color(255,0,0);
  }
}

  drawSprites();
}

function hasCollided(object1,object2) {
  if (wall.x-bullet.x<(bullet.width + wall.width/2)) {
    return true;
  }
    return false
}