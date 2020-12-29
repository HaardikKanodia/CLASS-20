var moving_rect;
var fixed_rect;


function setup() {
  createCanvas(1200,800);
moving_rect=createSprite(400, 200, 50, 50);
moving_rect.shapeColor="green";
fixed_rect=createSprite(600,400,50,50);
fixed_rect.shapeColor="green";




}


function draw() {
  background(255,255,255); 
  console.log(moving_rect.x-fixed_rect.x);



  if(moving_rect.x-fixed_rect.x<=fixed_rect.width/2+moving_rect.width/2&&fixed_rect.x-moving_rect.x<=fixed_rect.width/2+moving_rect.width/2&&
    moving_rect.y-fixed_rect.y<=fixed_rect.height/2+moving_rect.height/2&&fixed_rect.y-moving_rect.y<=fixed_rect.height/2+moving_rect.height/2) {
    moving_rect.shapeColor="red";
    fixed_rect.shapeColor="red";
  }
  else {
    fixed_rect.shapeColor="green";
    moving_rect.shapeColor="green";
  }


moving_rect.x=World.mouseX;
moving_rect.y=World.mouseY;


  drawSprites();
}