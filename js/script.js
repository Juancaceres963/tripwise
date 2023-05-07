
let botonMostrar  = document.getElementById('mostrar-contenido');
let contenidoOculto  = document.getElementById('contenido-oculto');

botonMostrar.addEventListener('click', function(){
    if (contenidoOculto.style.display === 'none'){
        contenidoOculto.style.display = 'block';
    } else {
        contenidoOculto.style.display = 'none';
    }
})