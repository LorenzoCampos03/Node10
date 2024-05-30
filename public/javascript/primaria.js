var imagenes = ['./imagenes/imagenM6.png', './imagenes/imagenM7.png', './imagenes/imagenM8.png'];

var cont = 0;

function carrousel(contenedor) {
     contenedor.addEventListener('click', e => {
          let atras = contenedor.querySelector('.atras');
          let adelante = contenedor.querySelector('.adelante');
          let img = contenedor.querySelector('img');
          tgt = e.target;
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
     let contenedor = document.querySelector('.contenedor-carrusel');
     carrousel(contenedor);
});

/*---------Menu----------*/

const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn"); // Corrección aquí

[openMenuBtn, closeMenuBtn].forEach((btn) => {
     btn.addEventListener("click", () => {
          menu.classList.toggle("open");
          menu.style.transition = "transform 0.5s ease";
     });
});

menu.addEventListener("transitionend", function(){
     this.removeAttribute("style");
});

menu.querySelectorAll(".dropdown > i").forEach((arrow) =>{
     arrow.addEventListener("click", function(){
          this.closest(".dropdown").classList.toggle("active");
     });
});