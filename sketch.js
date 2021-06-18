var wall, bullet;
var speed , wieght, thickness;
var lbullet,lwall,bulletRightEdge


function setup() {
  createCanvas(1600,400);

  thickness=random(22,83);

  bullet=createSprite(50, 200, 50, 10);
  bullet.shapeColor = "yellow";
  wall=createSprite(1200, 200, thickness, 100);
  wall.shapeColor= "grey";
  speed = random(223,321);
  wieght= random(30,52);

  bullet.velocityX = speed;

 
    
}

function draw() {
  background("black");  

  
//if(wall.x-bullet.x < (bullet,width+wall.width)/2)
//{
  //b//ullet.velocityX=0;
  //var// deformation=0.5 * wieght * speed* speed/22509;
  //if(de/formation>180)
  //{//
     //bullet.shapeColor=color="white";
  //}
  //if(deformation<180&& deformation>100)
  //{
    // bullet.shapeColor=color="white";
  //}
 // if(deformation<100)
  //{
    // bullet.shapeColor=color="white";
  //}
//}


if(hasCollided(bullet, wall))
{
   bullet.velocityX=0;
   var damage=0.5 *wieght* speed* speed/(thickness * thickness *thickness);

   if(damage>10)
   {
      wall.shapeColor="red";
   }

   if(damage<10)
   {
      wall.shapeColor="green";
   }
}

  drawSprites();
  //return false;
}
function hasCollided(lbullet, lwall)
{
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
     return true
  }
  return false;
}