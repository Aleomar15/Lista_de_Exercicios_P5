let diametro;
const diametroInicial = 50; 

function setup() {
  createCanvas(400, 400);
  diametro = diametroInicial; 
  noStroke();
  fill(255, 0, 0);
  ellipse(width / 2, height / 2, diametro, diametro); 
}


function keyPressed() {
  if (key === ' ') {
    diametro *= 1.1;
    ellipse(width / 2, height / 2, diametro, diametro);
  } else if (key === 'r' || key === 'R') {
    diametro = diametroInicial;
    background(220);
    ellipse(width / 2, height / 2, diametro, diametro);
  }
}