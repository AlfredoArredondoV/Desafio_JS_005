const listaDeInvitados = document.querySelector("#invitados");
const invitadoInput = document.querySelector("#nuevoInvitado");
const btnAgregar = document.querySelector("#agregarInvitado");
const task = document.querySelector("#task");
const taskCompleted = document.querySelector("#taskCompleted");
const invitados = [
    { id: Date.now() + 1, nombre: "tarea uno" , status: "checked" },
    { id: Date.now() + 2, nombre: "tarea dos" , status: 0 },
    { id: Date.now() + 3, nombre: "tarea tres" , status: 0 },
    { id: Date.now() + 4, nombre: "tareas cuatro" , status: 0 }
];
let totalTask=0;
let totalTaskCompleted=0;
const render = (invitados) => {
    listaDeInvitados.innerHTML = "";
    invitados.forEach((item) => {
        listaDeInvitados.innerHTML += `
        <li>
        ${item.id} - ${item.nombre} 
        <input class="checkbox" id="${item.id}" type="checkbox" ${item.status}>
        <button onclick="borrar(${item.id})"><img src="assets/img/close.png" height ="8" width="8" alt=""></button>
        </li>
        `;
        totalTask++;
        if (item.status==="checked") {
            totalTaskCompleted++;
        }
    })
    task.textContent=totalTask;
    taskCompleted.textContent=totalTaskCompleted;

}
render(invitados);

btnAgregar.addEventListener("click", () => {
    /* Agregamos el invitado al arreglo */
    totalTask=0;
    totalTaskCompleted=0;
    nuevoInvitado = {id: Date.now(), nombre: invitadoInput.value, status: 0}
    invitados.push(nuevoInvitado)
    invitadoInput.value = ""
    /* Actualizamos la información en el HTML */
    let html = ""
    render(invitados);
});

// Select all checkboxes with the name 'settings' using querySelectorAll.
var checkboxes = document.querySelectorAll("input[type=checkbox]");
let enabledSettings = []

/*
For IE11 support, replace arrow functions with normal functions and
use a polyfill for Array.forEach:
https://vanillajstoolkit.com/polyfills/arrayforeach/
*/

// Use Array.forEach to add an event listener to each checkbox.
checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        enabledSettings = 
        Array.from(checkboxes) // Convert checkboxes to an array to use filter and map.
        .filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
        .map(i => i.value) // Use Array.map to extract only the checkbox values from the array of objects.
        console.log(enabledSettings);
    })
});