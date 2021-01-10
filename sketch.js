//Create variables here
var dogHappy, dogSad, happyDog, database, foodS, foodStock;
function preload()
{
  //load images here
  dogHappy=loadImage("images/dogImg1.png");
  dogSad=loadImage("images/dogImg.png");
}

function setup() {
  createCanvas(500, 500);
dog = createSprite(250,250);
dog.addImage(dogSad)
dog.scale=0.3
database=firebase.database();
foodStock=database.ref('food')
foodStock.on("value", readStock);
}


function draw() {  
background(46, 139, 87)
if(keyWentDown(UP_ARROW)) {
writeStock(foodS);
dog.addImage(dogHappy);
}
  drawSprites();
  //add styles here
fill("red");
textSize(20);
textAlign(CENTER,CENTER);
text("Food Remaining="+foodS,250,100)


}

function readStock(data) {
foodS=data.val();
}

function writeStock(x) {

if(x<0) {
x=0;
}else{
x=x-1;
}

database.ref('/').update({
food:x
})
}