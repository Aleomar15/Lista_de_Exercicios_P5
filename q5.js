let x = 200
let y = 200
let xSpeed = 2
let ySpeed = 3
let img;
function preload() {
img = loadImage('image/Bola8.jpg');
}
function setup() {//Inicializar rotinas
    createCanvas(400,400)
    

}

function draw(){//Desenha cada frame
   background(230)
   image(img, x, y);

   x += xSpeed
   y += ySpeed

   if(x > 375 || x < 25){
        xSpeed = -xSpeed
   }
   if(y > 375 || y < 25){
        ySpeed = -ySpeed
    }

}