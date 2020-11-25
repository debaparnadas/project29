//consts
  const Engine = Matter.Engine;
  const World = Matter.World;
  const Bodies = Matter.Bodies;
  const Body = Matter.Body;
  const Constraint = Matter.Constraint;

//variables
  var ground, base, hexagon, slingshot;
  var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16;

function setup() {

  //creating engine and world
    engine = Engine.create();
    world = engine.world;

  //canvas  
    createCanvas(800,400);
  
  //creating the bodies  
    ground = new Ground(0,395,1600,10);
    base = new Ground(420,275,300,10);
    
    box1 = new Box(330,235,30,40);
    box2 = new Box(360,235,30,40);
    box3 = new Box(390,235,30,40);
    box4 = new Box(420,235,30,40);
    box5 = new Box(450,235,30,40);
    box6 = new Box(480,235,30,40);
    box7 = new Box(510,235,30,40);
    
    box8 = new Box(360,195,30,40);
    box9 = new Box(390,195,30,40);
    box10 = new Box(420,195,30,40);
    box11 = new Box(450,195,30,40);
    box12 = new Box(480,195,30,40);

    box13 = new Box(390,155,30,40);
    box14 = new Box(420,155,30,40);
    box15 = new Box(450,155,30,40);

    box16 = new Box(420,115,30,40);

    //stand1 = new Stand(390,300,250,10);
    //stand2 = new Stand(700,200,200,10);


    hexagon = new Polygon(60,250,30,30);

    slingshot = new SlingShot(hexagon.body,{x:60,y:250});

  Engine.run(engine);

}

function draw() {
  rectMode(CENTER);
  background(0);
  
  //displaying the bodies
    ground.display();
    base.display();
    
    fill("pink");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    
    fill("turquoise");
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    fill("orange");
    box13.display();
    box14.display();
    box15.display();

    fill("white");
    box16.display();

    //stand1.display();
    //stand2.display();

    hexagon.display();

    slingshot.display();
}

function mouseDragged () {
  Matter.Body.setPosition(hexagon.body,{x:mouseX,y:mouseY});
}

function mouseReleased () {
  slingshot.fly();
}

function keyPressed () {
  if (keyCode===32) {
    Matter.Body.setPosition(hexagon.body,{x:60,y:250});
    slingshot.attach();
  }
}