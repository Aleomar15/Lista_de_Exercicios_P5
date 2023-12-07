
let aux = 1
let aux2 = 1
function setup(){
    createCanvas(400,400)
    angleMode(DEGREES)
}

function draw(){
    background(220)
    
    translate(width/2,height/2)
    rotate(frameCount*aux);
    
    rectMode(CENTER)
    rect(0,0,100,100)
}
function mousePressed(){
    aux = -1
    aux2 +=1
    if(aux2%2==0){
        aux = 1
    }
}