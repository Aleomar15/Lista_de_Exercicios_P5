let x = 0
let y = 0
let xSpeed = 1
let ySpeed = 1
let color = 255
let colorAux = 255
let aux = 1
function setup() {//Inicializar rotinas
    createCanvas(400,400)
    

}

function draw(){//Desenha cada frame
   background(230)
   ellipse(x,y,50,50)//esfera

   
   if(aux>0 && aux<400){
    x += xSpeed;
    y+=ySpeed;
    fill(color,colorAux-=0.5,colorAux-=0.5)
    aux+=1
   }

   if(aux == 400){
    x-= xSpeed
    y-= ySpeed
    fill(color,colorAux+=0.5,colorAux+=0.5)
   }

   if(x==0){
    aux = 1;
   }
    
}