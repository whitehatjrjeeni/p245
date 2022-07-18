function preload()
{
img=loadImage("home.webp");
}

function setup()
{
canvas=createCanvas(640,420);
canvas.center();
}

function draw()
{
image(img,0,0,640,420);

fill("red");
text("home",120,70);
noFill();
stroke("red");
rect(80,50,450,350);
}