// --- Estado y paletas ---
let paletasColores = [
  ["#111827","#2563EB","#10B981","#F59E0B","#EF4444"],
  ["#0F172A","#22D3EE","#A78BFA","#34D399","#F472B6"],
  ["#1F2937","#60A5FA","#FBBF24","#F87171","#34D399"]
];
let indicePaleta = 0;
let borrarEnCadaFrame = true;
let diametro = 40;
let modoMultiplicar = false;

// --- Setup y responsive ---
function setup() {
  const contenedor = document.getElementById("contenedor-p5");
  const lienzo = createCanvas(contenedor.clientWidth, 420);
  lienzo.parent("contenedor-p5");
  noStroke();
  background(245);

  // Si usas botones HTML:
  const btnPaleta = document.getElementById("botonCambiarPaleta");
  const btnLimpiar = document.getElementById("botonLimpiar");
  const btnGuardar = document.getElementById("botonGuardar");
  if (btnPaleta) btnPaleta.addEventListener("click", cambiarPaleta);
  if (btnLimpiar) btnLimpiar.addEventListener("click", limpiarLienzo);
  if (btnGuardar) btnGuardar.addEventListener("click", guardarPNG);
}

function windowResized() {
  const contenedor = document.getElementById("contenedor-p5");
  resizeCanvas(contenedor.clientWidth, 420);
  if (borrarEnCadaFrame) background(245);
}

// --- Utilidades ---
function colorDe(index) {
  return paletasColores[indicePaleta][1 + (index % (paletasColores[indicePaleta].length - 1))];
}
function limpiarLienzo() { background(245); }
function cambiarPaleta() { indicePaleta = (indicePaleta + 1) % paletasColores.length; }
function guardarPNG() {
  let f = new Date();
  let nombre = `poster-${f.getHours()}${f.getMinutes()}${f.getSeconds()}`;
  saveCanvas(nombre, 'png');
}

// --- Dibujo principal ---
function draw() {
  if (borrarEnCadaFrame) background(245, 245, 245, 25);

  // círculo principal
  fill(paletasColores[indicePaleta][1] + "CC");
  circle(mouseX, mouseY, diametro);

  // anillos
  for (let i = 0; i < 8; i++) {
    let angulo = frameCount * 0.02 + i * TAU / 8;
    let radio = 60 + 20 * sin(frameCount * 0.03 + i);
    let x = mouseX + cos(angulo) * radio;
    let y = mouseY + sin(angulo) * radio;
    fill(colorDe(i) + "CC");
    circle(x, y, 18);
  }
}

// --- Interacciones ---
function keyPressed() {
  if (key === 'B' || key === 'b') borrarEnCadaFrame = !borrarEnCadaFrame;
  if (key === 'M' || key === 'm') {
    modoMultiplicar = !modoMultiplicar;
    blendMode(modoMultiplicar ? MULTIPLY : BLEND);
  }
  if (key === 'S' || key === 's') guardarPNG(); // foto sin botón
}

function mouseWheel(evento) {
  diametro = constrain(diametro + (evento.deltaY > 0 ? -4 : 4), 10, 140);
}

function mousePressed() {
  // acento cromático en el gesto
  fill(paletasColores[indicePaleta][2] + "CC");
  circle(mouseX, mouseY, diametro * 0.9);
}
