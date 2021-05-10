var car ,wall;
var speed,weight;




function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  speed=randam(55,90,)
  weight = randam(400,1500)

}

function draw() {
  background(255,255,255);  
  drawSprites();
  car = createSprite(50,200,50,50)
  car.velocity.X = speed;
  wall = createSprite(1500,200,60,Height/2)
  wall.shapeColour(80,80,80)

  deformation = 0.5*weight*speed*speed /22500







}