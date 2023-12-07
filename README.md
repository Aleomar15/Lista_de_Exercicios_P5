# Lista_de_Exercicios_P5
Lista de exercícios utilizando a biblioteca p5 

# Lista de Exercícios de Transformações e Manipulações 2D com p5js
1) Adicione um círculo que parte da posição 0,0 e se descole em direção a
extremidade inferior direita (400, 400), durante esse trajeto o circulo deve
começar da cor branca e ir sendo preenchido gradualmente pela cor
vermelha.
Quando o círculo tocar a extremidade de 400,400 faça ele retornar, dessa vez
embrancendo o preenchimento.

2) Adicione um quadrado no centro da tela rotacione em graus no sentido
horário, quando a biblioteca identificar o clique mouse, faça o quadro alterar o
sentido de rotação (Anti-horário, Horário)

3) Adicione um círculo vermelho, sem bordas no centro do canvas, faça com
que ele escalar +0.1 sempre que a teclada espaço for pressionada. Adicione
outra tecla para resetar o tamanho padrão do círculo.

4) Adicione um retângulo e faça que para cada clique, ele se movimente para
uma posição aleatória do canvas.

5) Use a seguinte estrutura para carregar uma imagem externa para dentro
da biblioteca:
let img;
function preload() {
img = loadImage('assets/laDefense.jpg');
}
function setup() {
createCanvas(400,400)
image(img, 0, 0);
}
Depois faça essa imagem se movimentar aleatoriamente colidindo com as
extremidades do canvas.
