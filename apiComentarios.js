var miBoton = document.getElementById('miBoton');
var comentariosContainer = document.getElementById('comentariosContainer');
var comentarios = []; // Variable para almacenar los comentarios
var comentariosVisible = false; // Variable para rastrear la visibilidad de los comentarios
var limiteComentarios = 10; // Límite de comentarios a obtener

// Agrega un evento de escucha al botón
miBoton.addEventListener('click', function() {
  comentariosVisible = !comentariosVisible; // Cambiar el estado de visibilidad de los comentarios

  if (comentariosVisible) {
    if (comentarios.length > 0) {
      mostrarComentarios();
    } else {
      obtenerComentarios();
    }
  } else {
    ocultarComentarios();
  }
});

function obtenerComentarios() {
  fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(json => {
      comentarios = json.slice(0, limiteComentarios); // Obtener solo los primeros comentarios hasta el límite
      mostrarComentarios();
    });
}

function mostrarComentarios() {
  comentariosContainer.innerHTML = '';

  comentarios.forEach(comentario => {
    var comentarioDiv = document.createElement('div');
    comentarioDiv.classList.add('comentario');

    var nombreElement = document.createElement('h3');
    nombreElement.classList.add('nombre');
    nombreElement.textContent = comentario.name;
    comentarioDiv.appendChild(nombreElement);

    var emailElement = document.createElement('p');
    emailElement.classList.add('email');
    emailElement.textContent = comentario.email;
    comentarioDiv.appendChild(emailElement);

    var cuerpoElement = document.createElement('p');
    cuerpoElement.classList.add('cuerpo');
    cuerpoElement.textContent = comentario.body;
    comentarioDiv.appendChild(cuerpoElement);

    comentariosContainer.appendChild(comentarioDiv);
  });

  comentariosContainer.style.display = 'block'; // Mostrar el contenedor de comentarios
}

function ocultarComentarios() {
  comentariosContainer.innerHTML = '';
  comentariosContainer.style.display = 'none'; // Ocultar el contenedor de comentarios
}


