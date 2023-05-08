// Ver mas contenido de Compartir

const verMasCompartir  = document.getElementById('ver_mas_compartir');
const ocultoCompartir  = document.getElementById('oculto_compartir');

verMasCompartir.addEventListener('click', function (){
    ocultoCompartir.classList.toggle('mostrar');

    if(ocultoCompartir.classList.contains('mostrar')){
        verMasCompartir.innerHTML = 'ver menos.';
    } else {
        verMasCompartir.innerHTML = '...ver más';
    }
});



// Ver mas contenido de Conectar con otros viajeros 

const verMasConectar  = document.getElementById('ver_mas_concectar');
const ocultoConectar  = document.getElementById('oculto_conectar');

verMasConectar.addEventListener('click', function (){
    ocultoConectar.classList.toggle('mostrar');

    if(ocultoConectar.classList.contains('mostrar')){
        verMasConectar.innerHTML = 'ver menos.';
    } else {
        verMasConectar.innerHTML = '...ver más';
    }
});

// Ver mas contenido de Descubriri un nuevo destino

const verMasEncontar  = document.getElementById('ver_mas_encontrar');
const ocultoEncontrar = document.getElementById('oculto_Encontrar');

verMasEncontar.addEventListener('click', function (){
    ocultoEncontrar.classList.toggle('mostrar');

    if(ocultoEncontrar.classList.contains('mostrar')){
        verMasEncontar.innerHTML = 'ver menos.';
    } else {
        verMasEncontar.innerHTML = '...ver más';
    }
});

// Ver mas contenido de Tips de viajeros

const verMasTips  = document.getElementById('ver_mas_tips');
const ocultoTips = document.getElementById('oculto_tips');

verMasTips.addEventListener('click', function (){
    ocultoTips.classList.toggle('mostrar');

    if(ocultoTips.classList.contains('mostrar')){
        verMasTips.innerHTML = 'ver menos.';
    } else {
        verMasTips.innerHTML = '...ver más';
    }
});