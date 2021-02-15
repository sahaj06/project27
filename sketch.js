
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof , rope1 , rope2 , rope3 , rope4 , bob1 , bob2 , bob3 , bob4 , bobDiameter;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

roof = new Roof(100,200,50,350)

bob1 = new Bob(150,200,10)
bob2 = new Bob(150,200,10)
bob3 = new Bob(150,200,10)
bob4 = new Bob(150,200,10)

rope1 = new Rope(bob1.body,roof.body,-bobDiameter * 2, 0);
rope2 = new Rope(bob2.body,roof.body,-bobDiameter * 2, 0)
rope3 = new Rope(bob3.body,roof.body,-bobDiameter * 2, 0)
rope4 = new Rope(bob4.body,roof.body,-bobDiameter * 2, 0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();

roof.display();
rope4.display();
rope3.display()
rope2.display();
rope1.display();

  drawSprites();
 

}



