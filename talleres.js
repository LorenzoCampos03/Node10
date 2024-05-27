var imagenes = ['../imagenes/imagenM6.png', '../imagenes/imagenM7.png', '../imagenes/imagenM8.png'];

function carrousel(contenedor) {
    let cont = 0;
    contenedor.addEventListener('click', e => {
        let atras = contenedor.querySelector('.atras');
        let adelante = contenedor.querySelector('.adelante');
        let img = contenedor.querySelector('img');
        let tgt = e.target;
        if (tgt == atras) {
            if (cont > 0) {
                img.src = imagenes[cont - 1];
                cont--;
            } else {
                img.src = imagenes[imagenes.length - 1];
                cont = imagenes.length - 1;
            }
        } else if (tgt == adelante) {
            if (cont < imagenes.length - 1) {
                img.src = imagenes[cont + 1];
                cont++;
            } else {
                img.src = imagenes[0];
                cont = 0;
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    let contenedores = document.querySelectorAll('.contenedor-carrusel');
    contenedores.forEach(contenedor => {
        carrousel(contenedor);
    });
});