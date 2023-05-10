
function verMas(idBoton, idElemento, textoMas, textoMenos) {
    const boton = document.getElementById(idBoton);
    const elemento = document.getElementById(idElemento);
  
    boton.addEventListener('click', function() {
      elemento.classList.toggle('mostrar');
  
      if (elemento.classList.contains('mostrar')) {
        boton.innerHTML = textoMenos;
      } else {
        boton.innerHTML = textoMas;
      }
    });
  }
  
  verMas('ver_mas_compartir', 'oculto_compartir', '...see more.', 'see less.');
  verMas('ver_mas_concectar', 'oculto_conectar', '...see more.', 'see less.');
  verMas('ver_mas_encontrar', 'oculto_Encontrar', '...see more.', 'see less.');
  verMas('ver_mas_tips', 'oculto_tips', '...see more.', 'see less.');
  verMas('ver_mas_pascua', 'oculto_pascua', '...see more.', 'see less.');
  verMas('ver_mas_chitwan', 'oculto_chitwan', '...see more.', 'see less.');
  verMas('ver_mas_sasso', 'ocultar_sasso', '...see more.', 'see less.');