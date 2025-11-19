// Variables del logo
let x, y;
let vx, vy;
let logoW = 120;
let logoH = 60;
let c;

// Variables de la barra central
let barX;
let barW = 40;
let barH;

// Canvas
let canvas;

function setup() {
  // Creamos el canvas y lo metemos en el contenedor grande
  canvas = createCanvas(windowWidth, 450); 
  canvas.parent("canvas");

  frameRate(60);

  // Posición inicial del logo
  x = width / 4;
  y = height / 2;

  // Velocidad inicial
  vx = 3;
  vy = 2;

  // Color inicial del logo
  c = color(255, 0, 150);

  // Barra central
  barX = width / 2;
  barH = height * 0.4;

  rectMode(CENTER);
  textAlign(CENTER, CENTER);
}

function draw() {
  // Fondo con un poco de transparencia para dejar rastro
  background(0, 30);

  // --- LÓGICA DEL MOVIMIENTO ---

  // Mover logo
  x += vx;
  y += vy;

  // Colisión con bordes horizontales (izquierda / derecha)
  if (x > width - logoW / 2 || x < logoW / 2) {
    vx = -vx;
    cambiarColor();
  }

  // Colisión con bordes verticales (arriba / abajo)
  if (y > height - logoH / 2 || y < logoH / 2) {
    vy = -vy;
    cambiarColor();
  }

  // --- BARRA CENTRAL ---

  // Dibujar barra
  noStroke();
  fill(50, 150, 255);
  rect(barX, height / 2, barW, barH, 10);

  // Detectar colisión logo–barra (colisión AABB sencillita)

  // límites de la barra
  let arribaBarra = height / 2 - barH / 2;
  let abajoBarra = height / 2 + barH / 2;
  let izquierdaBarra = barX - barW / 2;
  let derechaBarra = barX + barW / 2;

  // ¿está el logo dentro en vertical?
  let dentroVertical = y + logoH / 2 > arribaBarra && y - logoH / 2 < abajoBarra;

  // ¿está el logo dentro en horizontal?
  let dentroHorizontal = x + logoW / 2 > izquierdaBarra && x - logoW / 2 < derechaBarra;

  if (dentroVertical && dentroHorizontal) {
    vx = -vx; // rebote horizontal
    cambiarColor();
  }

  // --- DIBUJO DEL LOGO ---

  noStroke();
  fill(c);
  rect(x, y, logoW, logoH, 15);

  fill(0);
  textSize(24);
  text("LOGO", x, y);
}

// Pequeña función para cambiar el color del logo
function cambiarColor() {
  c = color(random(255), random(255), random(255));
}
