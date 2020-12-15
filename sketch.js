
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var trash,ground;
var bin1,bin2,bin3;
function preload()
{
	
}

function setup() {
	createCanvas(900, 700);
    engine = Engine.create();
	world = engine.world;
		bin1 = new strong(880, 520, 20, 100);
		bin2 = new strong(570, 520, 20, 100);
		bin3 = new strong(725, 560, 330, 20);

	trash = new paper(35, 600, 20);
	ground = new strong(450, 670, 900, 200);
    

	Engine.run(engine);
  
}


function draw() {
    Engine.update(engine)

  rectMode(CENTER);
  background("teal");
  trash.display();
  ground.display();
  bin1.display();
  bin2.display();
  bin3.display();
  whitehat();
  
  drawSprites();
 
}

function whitehat(){
  if(keyDown("up")){
	  Matter.Body.applyForce(trash.body,trash.body.position,{x:20,y:-25})

  }
  

}


