const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world



function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	dustbin1 = new dustbin(600, 615, 10, 10)
	paper1 = new paper(100, 300, 20);
	ground1 = new Ground(400, 700, 800, 20)

}


function draw() {
    background(230, 230, 230);
  	//rectMode(CENTER);

	dustbin1.display();
	paper1.display();
	ground1.display();

	drawSprites();
}



function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper1.body,paper1.body.position, {x:60,y:-60});
	}
}



