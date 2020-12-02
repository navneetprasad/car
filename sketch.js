var fixedRect, movingRect;
var car, wall;

function setup() {
  createCanvas(1200,800);
  

  car = createSprite(200,200,50,50);
  car.shapeColor = "blue";
  car.velocityX = 6;

  wall = createSprite(1000,200,20,100);
  wall.shapeColor = "red";
}

function draw() {
  background(225);
if(IsTouching(car,wall)){
car.shapeColor = "pink";
}
BounceOff(car,wall);

  
  drawSprites();
}

