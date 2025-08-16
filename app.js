// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // Eliminar espacios en blanco

    // Validar que no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar al array
    amigos.push(nombre);

    // Limpiar el campo
    input.value = "";

    // Actualizar la lista en pantalla
    mostrarLista();
}

// Función para mostrar la lista de amigos
function mostrarLista() {
    const lista = document.getElementById("listaAmigos");

    // Limpiar la lista
    lista.innerHTML = "";

    // Recorrer el array y agregar cada amigo como <li>
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    const resultado = document.getElementById("resultado");

    // Validar que haya amigos
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    // Generar índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar resultado
    resultado.innerHTML = `🎉 El amigo secreto es: <strong>${amigoSorteado}</strong>`;
}
