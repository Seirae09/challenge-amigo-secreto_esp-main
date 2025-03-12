// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Array para almacenar nombres y variables
let amigos = [];
let campo = document.getElementById("amigo");
let lista = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");

//Funcion para agregar nombres 
 // Si el campo esta vacio, mostrará alert
function agregarAmigo(){
    if (campo.value === "") {
        alert ("Por favor, escriba un nombre");  
    } else {
    amigos.push(campo.value);
    lista.innerHTML += `<li>${campo.value}</li>`;
    }
};

//Sorteo del amigo secreto
function sortearAmigo(){
    let sorteo = Math.floor((Math.random() * amigos.length));
    let amigoSecreto = amigos[sorteo];
    resultado.innerHTML = `<li>Tu amigo secreto es: ${amigoSecreto} </li>`;
};
