// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Paso 1: Crear un array para almacenar los nombres de los amigos.
let amigos = [];

// Paso 2: Implementa una función para agregar amigos.
 
function agregarAmigo() {
    // Usamos 'amigoEntrada' como acordamos para referirnos al campo de texto.
    let amigoEntrada = document.getElementById('amigo');
    let nombreAmigo = amigoEntrada.value;

    // Validamos que el campo no esté vacío.
    if (nombreAmigo == '') {
        alert('Por favor, inserte un nombre.');
        return; // Detiene la función si el campo está vacío.
    }

    // Si el nombre es válido, lo agregamos al final del array 'amigos'.
    amigos.push(nombreAmigo);

    // Llamamos a la función para que la lista en pantalla se actualice.
    actualizarListaAmigos();

    // Limpiamos el campo de texto para que el usuario pueda agregar otro nombre.
    amigoEntrada.value = '';
}

//Paso 3: Implementa una función para actualizar la lista de amigos en el HTML.
 
function actualizarListaAmigos() {
    let contenedorAmigos = document.getElementById('listaAmigos');

    // Limpia para evitar duplicados.
    contenedorAmigos.innerHTML = '';

    // 'for' para recorrer cada nombre en el array 'amigos'.
    for (let i = 0; i < amigos.length; i++) {
        contenedorAmigos.innerHTML += '<li>' + amigos[i] + '</li>';
    }
}

// Paso 4: Implementa una función para sortear los amigos.

function sortearAmigo() {
    // Mejora: Validamos que haya al menos 2 amigos en la lista para el sorteo, xq sino no tiene sentido.
    if (amigos.length < 2) {
        alert('Agrega al menos 2 amigos para poder sortear.');
        return;
    }

    // Número de índice aleatorio.
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Se usa el índice aleatorio para seleccionar un nombre del array.
    let amigoSecreto = amigos[indiceAleatorio];

    // Se obtiene el elemento donde se mostrará el resultado.
    let resultado = document.getElementById('resultado');
    // Muestra el nombre del amigo secreto en la página.
    resultado.innerHTML = '¡El amigo secreto es: ' + amigoSecreto + '!';
}

/**
 * Función para reiniciar el juego.
 * Limpia el array de amigos y los textos en pantalla para empezar de nuevo.
 */
function reiniciar() {
    amigos = [];
    // Limpia tanto la lista de amigos en pantalla como el resultado del sorteo.
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
}
