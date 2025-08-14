// Versión demo motivadora con extras
let borrarFondo = true;
let indicePaleta = 0;
const paletas = [
  ['#ffb703','#fb8500','#ff006e','#8338ec','#3a86ff'],
  ['#06d6a0','#ffd166','#ef476f','#118ab2','#073b4c'],
  ['#f72585','#b5179e','#7209b7','#560bad','#480ca8']
];

let tamano = 20;

function setup(){
  const contenedor = document.getElementById('contenedor-p5');
  const ancho = Math.min(contenedor.clientWidth - 12, 560);
  const alto  = Math.min(contenedor.clientHeight - 12, 380);
  const lienzo = createCanvas(ancho, alto);
  lienzo.parent('contenedor-p5');
  background(30, 35, 45);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(18);
  textFont('Courier');
}

function draw(){
  if (borrarFondo) background(30, 35, 45, 25);

  const colores = paletas[indicePaleta % paletas.length];
  const t = millis() * 0.001;
  const radio = tamano + 10 * sin(t*2.1);
  const x = mouseX + 50 * sin(t*1.7);
  const y = mouseY + 50 * cos(t*1.3);

  fill(color(colores[int((t*2 + frameCount*0.01)%colores.length)]));
  circle(x, y, radio);

  fill(255, 220);
  text("¡Flipa y reflipa!", mouseX, mouseY - 20);
}

function mousePressed(){
  indicePaleta++;
}

function keyPressed(){
  if (key.toLowerCase() === 'b') borrarFondo = !borrarFondo;
}

function mouseWheel(evento){
  tamano = constrain(tamano - evento.delta * 0.01, 5, 60);
}

function windowResized(){
  const contenedor = document.getElementById('contenedor-p5');
  const ancho = Math.min(contenedor.clientWidth - 12, 560);
  const alto  = Math.min(contenedor.clientHeight - 12, 380);
  resizeCanvas(ancho, alto);
}
