let rectX, rectY;
let rectWidth = 50;
let rectHeight = 30;

function setup() {
  createCanvas(400, 400);
  rectX = width / 2;
  rectY = height / 2;
  noStroke();
  fill(0, 0, 255); 
  rect(rectX, rectY, rectWidth, rectHeight);
}


function mouseClicked() {
  rectX = random(width - rectWidth); 
  rectY = random(height - rectHeight); 
  background(220);
  rect(rectX, rectY, rectWidth, rectHeight);
}
