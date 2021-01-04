
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var bob1,bob2, bob3, bob4, bob5
function preload()
{
	
}

function setup() {
	createCanvas(1000, 800);


	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
bob1 = new Ball(200,550,50)
bob2 = new Ball(300,550,50)
bob3 = new Ball(400,550,50)
bob4 = new Ball(500,550,50)
bob5 = new Ball(600,550,50)
roof = new Roof(400,200,500,50)
chain = new Rope(bob1.body,roof.body, -200, 0)
chain2 = new Rope(bob2.body,roof.body, -100, 0)
chain3 = new Rope(bob3.body,roof.body, 0, 0)
chain4 = new Rope(bob4.body,roof.body, 100, 0)
chain5 = new Rope(bob5.body,roof.body, 200, 0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  roof.display()
  chain.display()
  chain2.display()
  chain3.display()
  chain4.display()
  chain5.display()
  keyPressed()
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-7,y:-3})
    console.log("I exist")
	
	}
}

