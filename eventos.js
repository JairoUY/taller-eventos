document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("div").addEventListener("click", () => {
    alert("Hola! soy el div");
  });

  document.querySelector("button").addEventListener("click", (evento) => {
    alert("Hola!");
    evento.stopPropagation();
  });
});
