
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var stone;
var plane;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	hammer = new Hammer(100,250,150,150);
	stone = new Stone(400,100,100,100);
	plane = new Plane(200,height,800,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  hammer.display();
  stone.display();
  plane.display();
  
  drawSprites();
 
}



