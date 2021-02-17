
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var bob1,bo2,bob3,bob4,bob5;

var rope1, rope2, rope3, rope4, rope5;
var roof,world;
function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	roof = new Roof(350,50,500,30);

	bob1 = new Bob(150,400);
	bob2 = new Bob(250,400);
	bob3 = new Bob(350,400);
	bob4 = new Bob(450,400);
	bob5 = new Bob(550,400);

	
	rope1 = new Rope(bob1.body, roof.body, -200,0 );
	rope2 = new Rope(bob2.body, roof.body,-100,0);
	rope3 = new Rope(bob3.body, roof.body, 0,0);
	rope4 = new Rope(bob4.body, roof.body,100,0);
	rope5 = new Rope(bob5.body, roof.body, 200,0);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  
  
 //drawSprites();
 roof.display();

 
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();

 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();

 
 
}

function keyPressed(){
	
	if (keyCode === UP_ARROW) {
		console.log("key Pressed");
	//	Matter.Body.setStatic(bob1.body,false);
    	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-90,y:-80});

    
  	}
}


