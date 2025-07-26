// Espera a que el contenido del DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
  // Selecciona el botón de hamburguesa del menú de navegación
  const toggler = document.querySelector('.navbar-toggler');

  // Selecciona el span interno dentro del botón, donde se coloca el ícono
  const iconSpan = toggler.querySelector('span');

  // Agrega un evento al botón para que responda al hacer clic
  toggler.addEventListener('click', function () {
    // Alterna la clase 'open' para indicar si el menú está activo o no
    this.classList.toggle('open');

    // Si está activo (clase 'open' presente), cambia el ícono a una "X"
    if (this.classList.contains('open')) {
      iconSpan.classList.remove('navbar-toggler-icon'); // Quita el ícono predeterminado de Bootstrap
      iconSpan.innerHTML = '<i class="fas fa-times"></i>'; // Agrega el ícono de cerrar (Font Awesome)
    } else {
      iconSpan.innerHTML = ''; // Limpia el ícono anterior
      iconSpan.classList.add('navbar-toggler-icon'); // Vuelve a mostrar el ícono de hamburguesa
    }
  });
});

// ------- GALERÍA DE IMÁGENES CON MODAL Y NAVEGACIÓN --------

// Selecciona todas las imágenes de la galería que tienen la clase personalizada
const galeria = document.querySelectorAll('.galeria-img');

// Selecciona la imagen del modal donde se mostrará la imagen grande
const modalImg = document.getElementById('modalImg');

// Variable para rastrear cuál imagen está siendo visualizada
let currentIndex = 0;

// Recorre todas las imágenes y agrega un evento para cuando se haga clic en una de ellas
galeria.forEach((img, index) => {
  img.addEventListener('click', () => {
    modalImg.src = img.dataset.img; // Asigna la imagen grande usando el atributo data-img
    currentIndex = index; // Actualiza el índice actual
  });
});

// Botón para ir a la imagen anterior
document.getElementById('prevImg').addEventListener('click', () => {
  // Calcula el índice anterior (circular)
  currentIndex = (currentIndex - 1 + galeria.length) % galeria.length;
  // Actualiza la imagen mostrada en el modal
  modalImg.src = galeria[currentIndex].dataset.img;
});

// Botón para ir a la imagen siguiente
document.getElementById('nextImg').addEventListener('click', () => {
  // Calcula el índice siguiente (circular)
  currentIndex = (currentIndex + 1) % galeria.length;
  // Actualiza la imagen mostrada en el modal
  modalImg.src = galeria[currentIndex].dataset.img;
});
