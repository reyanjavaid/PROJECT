 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bin,ground,ball;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
  world = engine.world;
  
	ground = new Ground(700,665,1900,10);
  bin=new dustbin (1200,650,200,10);
  ball=new PaperBall(200,450);

	//Create the Bodies Here.


	//Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  bin.display();
  ball.display();
  ground.display();
 // keyPressed(); 
  



  drawSprites();
 
}

function keyPressed() {
  if (keyDown("UP_ARROW")) {
    Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
  }
  }
  

