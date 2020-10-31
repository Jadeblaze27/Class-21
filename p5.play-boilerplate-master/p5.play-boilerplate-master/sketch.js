var fixedRect,  movingRect
var bloc, bloc2

function setup() {
  createCanvas(800,400);
fixedRect = createSprite(600,200,60,40);
movingRect = createSprite(400,200,40,40);
fixedRect.shapeColor = "red"
movingRect.shapeColor = "red"

bloc = createSprite(300,290,50,50)
bloc2 = createSprite(150,290,50,50)
}

function draw() {
  background("black"); 

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(isTouching(movingRect, bloc)){
    movingRect.shapeColor = "pink";
    bloc.shapeColor = "pink";
  }
  else{
movingRect.shapeColor = "blue";
bloc.shapeColor = "blue";
  }
  
  
  drawSprites();
}

