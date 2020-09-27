
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, basket1,basket2,basket3,ball,color;

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= Bodies.rectangle(400,590,800,20,{isStatic:true});
	basket1= new BasketSide(500,570,160,20);
	basket2= new BasketSide(580,550,20,65);
	basket3= new BasketSide(420,550,20,65);
	paperBall = new Paper( 100,500,20);
	World.add(world,ground);
	Engine.run(engine);
  
	
}



function draw() {
  Engine.update(engine);
  background(0);
  basket1.display();
  basket2.display();
  basket3.display();
  paperBall.display();
rectMode(CENTER);
rect(400,590,800,20)
}


function keyPressed(){

	if(keyCode === UP_ARROW){
		Body.applyForce(paperBall.paperball, paperBall.paperball.position, {x:40,y:-80})
		
	}
}
