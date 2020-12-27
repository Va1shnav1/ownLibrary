var box1;
var box2;
var box3;
var box4;
function setup() {
  createCanvas(800,400);
  box1=createSprite(200, 0, 50, 50);
  box1.shapeColor="green";
  box1.debug="true";
  box1.velocityY=2;
  box2=createSprite(200, 400, 50, 50);
  box2.shapeColor="green";
  box2.debug="true";
  box2.velocityY=-2;
  box3=createSprite(0, 200, 50, 50);
  box3.shapeColor="green";
  box3.debug="true";
  box3.velocityX=2;
  box4=createSprite(800, 200, 50, 50);
  box4.shapeColor="green";
  box4.debug="true";
  box4.velocityX=-2;
}

function draw() {
  background(0);  
  bounceOff(box1, box2);
  bounceOff(box3, box4);
  drawSprites();
}
