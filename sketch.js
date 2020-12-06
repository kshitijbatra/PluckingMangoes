
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint= Matter.Constraint;

var boy, boy_img;
var treeObj;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10;
var stoneObj;
var groundObj,groundObjR,groundObjL,groundObjU;
var launcherObj;
var launchingForce=100;
var distance;

function preload() {
	boy_img=loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//boy = createSprite(500,500,10,20);
	//boy.addImage(boy_img);
	treeObj = new Tree(900,365);
	mango1 = new Mango(900,300,30);
	mango2 = new Mango(825,250,30);
	mango3 = new Mango(850,200,30);
	mango4 = new Mango(800,300,30);
	mango5 = new Mango(950,150,30);
	mango6 = new Mango(970,250,30);
	mango7 = new Mango(1050,275,30);
	mango8 = new Mango(1000,300,30);
	mango9 = new Mango(900,175,30);
	mango10 = new Mango(900,250,30);
	stoneObj = new Stone(110,460,50);
	groundObj = new Ground(0,600,2600,10);
	groundObjU = new Ground(0,0,2600,10);
	groundObjR = new Ground(1300,10,10,1200);
	groundObjL = new Ground(0,0,10,1200);
	launcherObj = new Launcher(stoneObj.body,{x:110,y:460});
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1300,
		  height: 600,
		  wireframes: false
		}
	  });

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  noStroke();
  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
  image(boy_img, 100,410,150,250);

  groundObj.display();
  groundObjR.display();
  groundObjL.display();
  groundObjU.display();
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  stoneObj.display();
  launcherObj.display();
  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  detectollision(stoneObj,mango6);
  detectollision(stoneObj,mango7);
  detectollision(stoneObj,mango8);
  detectollision(stoneObj,mango9);
  detectollision(stoneObj,mango10);
  drawSprites();
 
}
function mouseDragged()
{
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased() {
	launcherObj.fly();
	distance=int(dist(stoneObj.x,stoneObj.y,mango1.x,mango1.y));
}

function keyPressed() {
	if (keyCode === 32) {
    	Matter.Body.setPosition(stoneObj.body, {x:110, y:460}) 
		launcherObj.attach(stoneObj.body);

	}
  }
  function detectollision(lstone,lmango){
	/*var collision = Matter.SAT.collides(lstone,lmango);
	if(collision.collided){
		console.log("collided");
		Matter.Body.setStatic(lmango,false);	
	}*/
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  //console.log(distance)
  //console.log(lmango.r+lstone.r)
  	if(distance<=lmango.r+lstone.r)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }