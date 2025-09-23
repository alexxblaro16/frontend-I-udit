// Commit 1: Basic Initialization
console.log("¡Hola, mundo!");

// Commit 2: Basic User Events
const boton = document.getElementById("miBoton");
boton.addEventListener("click", () => {
  alert("¡Botón clickeado!");
});

// Commit 3: Dynamic Event with Scroll
window.addEventListener("scroll", () => {
  console.log("¡Estás desplazándote!");
});
