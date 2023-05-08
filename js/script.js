
let botonMostrar  = document.getElementById('mostrar-contenido');
let contenidoOculto  = document.getElementById('contenido-oculto');

botonMostrar.addEventListener('click', toggleText);

function toggleText(){
    contenidoOculto.classList.toggle('mostrar');

    if(contenidoOculto.classList.contains('mostrar')){
        botonMostrar.innerHTML = 'ver menos.';
    } else {
        botonMostrar.innerHTML = '...ver más.';
    }
};