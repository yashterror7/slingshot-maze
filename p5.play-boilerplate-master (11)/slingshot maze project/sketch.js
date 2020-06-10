const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var ground;
var ball,chain;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400,300,800,20);
  box1 = new Box(10,310,20,20);
  box2 = new Box(35,310,20,20);
  box3 = new Box(60,310,20,20);
  box4 = new Box(85,310,20,20);
  box5 = new Box(110,310,20,20);
  box6 = new Box(135,310,20,20);
  box7 = new Box(160,310,20,20);
  box8 = new Box(185,310,20,20);
  box9 = new Box(210,310,20,20);
  box10 = new Box(235,310,20,20);

ellipseMode(CENTER);
ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
ball = Circle(100,200,20);
chain = new Chain(ball,ball.position);

}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  drawSprites();
}
function mouseDragged(){
    Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
  chain.fly();
  }