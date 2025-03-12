// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Array para almacenar nombres
let amigos = [];

//funcion para agregar amigos, captura el calor de entrada y la valida
function agregarAmigo (){
    let campo = document.getElementById ("amigo");
    let nombre = campo.value;

    if (nombre == ""){
        alert ("Por favor, ingrese un nombre");
        return;
    }
    amigos.push(nombre);
    campo.value = "";
    campo.focus();
    mostrarAmigos();
}

//limpiar el campo e implementa una funcion para actualizar lista
function mostrarAmigos(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for(let i = 0; i < amigos.length; i++){
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

//Sortear los amigos y mostrar el nombre sorteado 
function sortearAmigo (){
    if (amigos.length === 0) {
        alert ("Por favor, ingrese un nombre");
        return;
    }
    let amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `Tu amigo secreto es: ${amigoSecreto}`;

    //borrar la lista mostrada en el programa
    let limpiarlista = document.getElementById("listaAmigos");
    limpiarlista.innerHTML = "";
}