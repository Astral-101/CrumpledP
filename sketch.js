
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var box1, box2, box3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	box1 = new Box(400, 600, 20, 100);

	box3 = new Box(550, 600, 20, 100);

	box2 = new Box(475, 650, 200, 20);

	ground = new Ground(400, 675, 800, 20);

	paper = new Paper(20, 650);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  box1.display();
  box3.display();
  box2.display();
  ground.display();
  paper.display();
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:650, y:200})
	}


}



