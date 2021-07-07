var ground;

var paper, paper1;

var apple, apple1;

var banana, banana1;

var battery, battery1;

var blackdus, blackdus1;

var bluedus, bluedus1;

var book, book1;

var bottle, bottle1;

var bttle, bottle2;

var brokenplate, brokenplate1;

var photo, photo1;

var  cup1, cup1Img;

var cup2, cup2Img;

var cup3, cup3Img;

var earbud1, earbud1Img;

var fish1, fish1Img;

var glass1, glass1Img;

var greendus1, greendus1Img;

var yellowdus1, yellowdus1Img;

var jar1, jar1Img;

var laptop, laptopImg;

var meat1, meat1Img;

var mobile1, mobile1Img;

var mouse1, mouse1Img;

var newspaper1, newspaper1Img;

var newspaper2, newspaper2Img;

var orange1, orange1Img;

var oven1, oven1Img;

var peel1, peel1Img;

var peel2, peel2Img;

var plastic1, plastic1Img;

var spoon1, spoon1Img;

var toiletpaper1, toiletpaper1Img;

var wineglass, wineglass1Img;

function preload(){
paper=loadImage("paper2.png");

apple=loadImage("apple1.png");

banana=loadImage("bananapeel.png");

battery=loadImage("battery.png");

blackdus=loadImage("black.png");

bluedus=loadImage("blue.png");

book=loadImage("book.png");

bottle=loadImage("bottle.png");

bttle=loadImage("bottle2.png");

brokenplate=loadImage("broken plate.png");

photo=loadImage("camera.png");

cup1Img=loadImage("cup2.png");

cup2Img=loadImage("cup3.png");

cup3Img=loadImage("cup4.png");

earbud1Img=loadImage("earbuds.png");

fish1Img=loadImage("fish.png");

glass1Img=loadImage("glass1.png");

greendus1Img=loadImage("green.png");

yellowdus1Img=loadImage("yellow.png");

jar1Img=loadImage("jar.png");

laptopImg=loadImage("laptop.png");

meat1Img=loadImage("meat.png");

mobile1Img=loadImage("mobile2.png");

mouse1Img=loadImage("mouse.png");

newspaper1Img=loadImage("newspaper2.png");

newspaper2Img=loadImage("newspaper3.png");

orange1Img=loadImage("orangepeel.png");

oven1Img=loadImage("oven.png");

peel1Img=loadImage("peel2.png");

peel2Img=loadImage("peel3.png");

plasticbag1Img=loadImage("plasticbag.png");

plate1Img=loadImage("plate.png");

spoon1Img=loadImage("spoon.png");

toiletpaper1Img=loadImage("toiletpaper.png");

wineglass1Img=loadImage("wineglass2.png");


}
function setup() {

  createCanvas(1300,550);
  

  ground=createSprite(450,500,1700,20);
  ground.shapeColor="black"
  
  paper1=createSprite(200,465,50,50);
  paper1.addImage("paper", paper)
  paper1.scale=0.2;

  appl1=createSprite(260,445,50,50);
  appl1.addImage("apple", apple)
  appl1.scale=0.2;

  banana1=createSprite(320,450,50,50);
  banana1.addImage("banana", banana)
  banana1.scale=0.15;

  battery1=createSprite(360,450,50,50);
  battery1.addImage("battery", battery)
  battery1.scale=0.15;


  book1=createSprite(290,410,50,50);
  book1.addImage("book", book)
  book1.scale=0.50;

  bottle1=createSprite(450,450,50,50);
  bottle1.addImage("bottle", bottle)
  bottle1.scale=0.2;

  bottle2=createSprite(395,440,50,50);
  bottle2.addImage("bttle", bttle)
  bottle2.scale=0.2;

  bottle2=createSprite(395,440,50,50);
  bottle2.addImage("bttle", bttle)
  bottle2.scale=0.2;

  brokenplate1=createSprite(120,470,50,50);
  brokenplate1.addImage("brokenplate", brokenplate)
  brokenplate1.scale=0.2;

  photo1=createSprite(490,470,50,50);
  photo1.addImage("photo", photo)
  photo1.scale=0.30;

  cup1=createSprite(520,460,50,50);
  cup1.addImage("cup", cup1Img)
  cup1.scale=0.03;

  cup2=createSprite(420,465,50,50);
  cup2.addImage("cup2", cup2Img)
  cup2.scale=0.2;

  cup3=createSprite(230,454,50,50);
  cup3.addImage("cup3", cup3Img)
  cup3.scale=0.15;

  earbud1=createSprite(540,472,50,50);
  earbud1.addImage("earbud", earbud1Img)
  earbud1.scale=0.15;

  fish1=createSprite(180,420,50,50);
  fish1.addImage("fish", fish1Img)
  fish1.scale=0.2;

  glass1=createSprite(120,420,50,50);
  glass1.addImage("glass", glass1Img)
  glass1.scale=0.2;

  

  jar1=createSprite(60,462,50,50);
  jar1.addImage("jar", jar1Img)
  jar1.scale=0.03;

  laptop=createSprite(580,465,50,50);
  laptop.addImage("laptop", laptopImg)
  laptop.scale=0.15;
  laptop.debug = true;

  meat1=createSprite(288,472,50,50);
  meat1.addImage("meat", meat1Img)
  meat1.scale=0.15;

  mobile1=createSprite(208,472,50,50);
  mobile1.addImage("mobile", mobile1Img)
  mobile1.scale=0.15;

  mouse1=createSprite(450,455,50,50);
  mouse1.addImage("mouse", mouse1Img)
  mouse1.scale=0.04;

  newspaper1=createSprite(340,410,50,50);
  newspaper1.addImage("newspaper", newspaper1Img)
  newspaper1.scale=0.04;

  newspaper2=createSprite(320,370,50,50);
  newspaper2.addImage("newspaper1", newspaper2Img)
  newspaper2.scale=0.25;

  orange1=createSprite(150,415,50,50);
  orange1.addImage("orange", orange1Img)
  orange1.scale=0.06;

  oven1=createSprite(440,415,50,50);
  oven1.addImage("oven", oven1Img)
  oven1.scale=0.30;

  peel1=createSprite(260,470,50,50);
  peel1.addImage("peel", peel1Img)
  peel1.scale=0.02;

  peel2=createSprite(220,415,50,50);
  peel2.addImage("peel1", peel2Img)
  peel2.scale=0.15;

  plasticbag1=createSprite(370,400,50,50);
  plasticbag1.addImage("orange", plasticbag1Img)
  plasticbag1.scale=0.15;

  plate1=createSprite(420,370,50,50);
  plate1.addImage("plate", plate1Img)
  plate1.scale=0.06;

  spoon1=createSprite(520,430,50,50);
  spoon1.addImage("spoon", spoon1Img)
  spoon1.scale=0.15;

  toiletpaper1=createSprite(510,400,50,50);
  toiletpaper1.addImage("toiletpaper", toiletpaper1Img)
  toiletpaper1.scale=0.18;

  wineglass1=createSprite(90,460,50,50);
  wineglass1.addImage("wineglass", wineglass1Img)
  wineglass1.scale=0.09;

  
  blackdus1=createSprite(1220,395,50,50);
  blackdus1.addImage("blackdus", blackdus)
  blackdus1.scale=0.58;

  bluedus1=createSprite(1083,400,50,50);
  bluedus1.addImage("bluedus", bluedus)
  bluedus1.scale=0.50;

  greendus1=createSprite(924,400,50,50);
  greendus1.addImage("greendus", greendus1Img)
  greendus1.scale=0.50;

  yellowdus1=createSprite(780,395,50,50);
  yellowdus1.addImage("yellowdus", yellowdus1Img)
  yellowdus1.scale=0.58;

  blackBar = createSprite(1225,315,140,10);
blackBar.shapeColor="red"
  
}

function draw() {
 
  background(130);  

  text("mouseX "+ "mouseY",mouseX,mouseY)
 
  blackBar.display();
 
  ground.display();
 
  paper1.display();
 
  appl1.display();
 
  banana1.display();
 
  battery1.display();
 
  
  book1.display();
 
  bottle1.display();
 
  bottle2.display();
 
  brokenplate1.display();
 
  photo1.display();
 
  cup1.display();
 
  cup2.display();

  cup3.display();

  earbud1.display();

  fish1.display();

  glass1.display();

 

  jar1.display();

  laptop.display();

  meat1.display();

  mobile1.display();

  mouse1.display();

  newspaper1.display();

  newspaper2.display();

  orange1.display();

  oven1.display();

  peel1.display();

  peel2.display();

  plasticbag1.display();

  plate1.display();

  spoon1.display();

  toiletpaper1.display();

  wineglass1.display();

  blackdus1.display();
 
  bluedus1.display();
  greendus1.display();

  yellowdus1.display();
 

  drawSprites();

//fill("white")
//textSize(22)
//text("Organic",1170,600);
  
//fill("white")
//textSize(22)
//text("Paper",985,600);

mouseDragged();
}

function mouseDragged() {
	if (mousePressedOver(laptop)){
		laptop.x = World.mouseX;
			laptop.y = World.mouseY;

	}
}
//kasturi, so this is how you have to create mousepressedOver event for 
//every item and then create a bar above every dustbin and when 
//touching the correct dustbin's bar the point should increase and 
//when touching the wrong dustbin bar it should come back to its original 
//place and lives should become less.
//and after 5 chances, the game should be over.