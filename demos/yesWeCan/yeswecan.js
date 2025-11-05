const html = document.getElementById('html')
const perro = document.getElementById('perro')
const gato = document.getElementById('gato')
const tamaño = document.getElementById('tamaño')
const naranja = document.getElementById('naranja')
const paleta = document.getElementById('paleta')
const ocultar = document.getElementById('ocultar')
const mostrar = document.getElementById('mostrar')
const recargar = document.getElementById('recargar')

let texto = document.querySelector('p')
let areaTexto = document.querySelector('.texto')


html.addEventListener('click', () => {
    texto.innerHTML = 'Texto increíble cambiado con la magia de JavaScript'
})

perro.addEventListener('click', () => {
    let foto = document.querySelector('img')
    foto.src = 'img/dog.avif'
})

gato.addEventListener('click', () => {
    let foto = document.querySelector('img')
    foto.src = 'img/cat.jpg'
})

tamaño.addEventListener('click', () => {
    texto.style.fontSize = '1.5em';
})

naranja.addEventListener('click', () => {
    areaTexto.style.background = 'orange';
})

paleta.addEventListener('click', () => {
    areaTexto.style.background = 'var(--turquesa)';
})

ocultar.addEventListener('click', ()=>{
    // areaTexto.style.display = 'none'
    areaTexto.style.visibility = 'hidden'
})

mostrar.addEventListener('click', ()=>{
    // areaTexto.style.display = 'block'
     areaTexto.style.visibility = 'visible'
})

recargar.addEventListener('click', () => {
    location.reload()
})
