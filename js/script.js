
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

  // Codigo para hacer que los enlaces se desplaces 90px mas abajo con respecto al tope
  
// Obtener todos los enlaces de la barra de navegación que tienen un ID correspondiente en la página
const links = document.querySelectorAll('.link_principal[href^="#"]');
// Agregar un evento de clic a cada enlace
links.forEach(link => {
  link.addEventListener('click', e => {
    // Evitar que el enlace realice su comportamiento por defecto (navegar a otra página)
    e.preventDefault();
    // Obtener el ID del elemento al que se desea desplazar
    const id = link.getAttribute('href').substring(1);
    // Obtener el elemento al que se desea desplazar
    const target = document.getElementById(id);
    // Obtener la posición del elemento en la ventana
    const rect = target.getBoundingClientRect();
    // Calcular la posición final del desplazamiento, restando la altura del encabezado de la barra de navegación (90px)
    const finalPosition = window.pageYOffset + rect.top - document.querySelector('header.fijo').offsetHeight;
    // Desplazar la ventana de manera suave hasta el elemento deseado
    window.scrollTo({ top: finalPosition, behavior: 'smooth' });
  });
});

// Codigo para que la barra de navegacion lateral haga el desplazamiento con 90 px de mas

const linksLateral = document.querySelectorAll('.navbar_lateral .nav-link[href^="#"]');
// Agregar un evento de clic a cada enlace
linksLateral.forEach(link => {
  link.addEventListener('click', e => {
    // Evitar que el enlace realice su comportamiento por defecto (navegar a otra página)
    e.preventDefault();
    // Obtener el ID del elemento al que se desea desplazar
    const id = link.getAttribute('href').substring(1);
    // Obtener el elemento al que se desea desplazar
    const target = document.getElementById(id);
    // Obtener la posición del elemento en la ventana
    const rect = target.getBoundingClientRect();
    // Calcular la posición final del desplazamiento, restando la altura del encabezado de la barra de navegación (90px)
    const finalPosition = window.pageYOffset + rect.top - document.querySelector('header.fijo').offsetHeight;
    // Desplazar la ventana de manera suave hasta el elemento deseado
    window.scrollTo({ top: finalPosition, behavior: 'smooth' });
  });
});

// Boton de Alerta para cargar los datos que fueron administrados correctamente 

const boton_share = document.getElementById('boton_share');

boton_share.addEventListener('click', e => {
  e.preventDefault();
  Swal.fire(
    'Good job!',
    'You clicked the button!',
    'success'
  )
  console.log('Click')
})