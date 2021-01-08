const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



function preload(){
polygonimg = loadImage("polygon.png")
}


function setup() {
  createCanvas(900,400);
  
 engine=Engine.create()
 world=engine.world
 Engine.run(engine)


 ground = new Ground(450,380,900,20)

stand1 = new Stand(460,280,300,10)

block1 = new Box(340,265,40,40)
block2 = new Box(380,265,40,40)
block3 = new Box(420,265,40,40)
block4 = new Box(460,265,40,40)
block5 = new Box(500,265,40,40)
block6 = new Box(540,265,40,40)
block7 = new Box(580,265,40,40)

block8 = new Box(360,245,40,40)
block9 = new Box(400,245,40,40)
block10 = new Box(440,245,40,40)
block11 = new Box(480,245,40,40)
block12 = new Box(520,245,40,40)
block13  = new Box(560,245,40,40)

block14 = new Box(380,220,40,40)
block15 = new Box(420,220,40,40)
block16 = new Box(460,220,40,40)
block17 = new Box(500,220,40,40)
block18 = new Box(540,220,40,40)

block19 = new Box(400,200,40,40)
block20 = new Box(440,200,40,40)
block21 = new Box(480,200,40,40)
block22 = new Box(520,200,40,40)

ball = Bodies.circle(100,250,20)
World.add(world,ball)
sling = new SlingShot(ball,{x:100,y:250})
}

function draw() {
  background(200); 
  ground.display()
  stand1.display()
  fill("blue")
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()

  fill("pink")
  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()
  block13.display()
  fill("yellow")
  block14.display()
  block15.display()
  block16.display()
  block17.display()
  block18.display()
  fill("red")
  block19.display()
  block20.display()
  block21.display()
  block22.display()

imageMode(CENTER)
image(polygonimg,ball.position.x,ball.position.y,30,30)

  sling.display()
  
}

function mouseDragged(){
  
      Matter.Body.setPosition(ball, {x: mouseX , y: mouseY});
  }



function mouseReleased(){
  sling.fly();
  
}

function keyPressed(){
  if(keyCode === 32){
      sling.attach(ball.body);
  }
}