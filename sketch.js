
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var paper;

function setup() {
	var canvas=createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(100,650,30);
	ground = new Ground(400,height,800,50);
   dustbin1 = new Dustbin(550,610,20,100)
   dustbin2 = new Dustbin(700,610,20,100)
   dustbin3 = new Dustbin(625,600,170,20)
}


function draw() {
  background("yellow");
  Engine.update(engine)
  paper.display();
  ground.display();
  //dustbin1.display();
   //dustbin2.display();
   dustbin3.display();


  
 
}
function keyPressed(){
   if (keyCode===UP_ARROW){
      Matter.Body.applyForce(paper.body,paper.position,{x:40,y:-30});   
   }  
}


