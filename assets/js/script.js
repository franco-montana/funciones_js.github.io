
function pintar () {
    ele.style.backgroundColor = 'yellow';
}
const ele = document.getElementById('ele1');

ele.addEventListener('click', pintar);


//3.2 modificar para recibir el elemento clickeado como un párametro

const element = document.getElementById('ele1');
element.addEventListener('click', function() {
    pintar(element);
});

//3.3 modificar para recibir el color como un argumento 
function pintar (elemento, color = 'green') {
    elemento.style.backgroundColor = color;
}

const elemento = document.getElementById('ele1');
elemento.addEventListener("click", function() {
    pintar(elemento,'yellow');
});