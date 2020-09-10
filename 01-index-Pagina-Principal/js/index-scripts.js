//---Funcion que tome el id del contenedor nuevo, y el id de la nueva descripcion.
function Expandir(id1) {
    const Expandir = document.getElementById(id1);
    Expandir.style.display = "block";
}

function Contraer(id2) {
    const Expandir = document.getElementById(id2);
    Expandir.style.display = "none";
}
//Funcion para cambiar de color y seleccionar id del favorito
function Favorito(id) {
    let corazon = document.getElementById(id);
    if (corazon.style.color == "red") {

        corazon.innerHTML = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-heart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd"  d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
      </svg>`;
        corazon.style.fontSize = "20px";
        corazon.style.color = "";

    } else {

        corazon.innerHTML = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-suit-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
        </svg>`;
        corazon.style.fontSize = "25px";
        corazon.style.color = "red";
    }


}
//Metodo utilizado en la sección de categoria para expandir las imagenes svg
function ExpandirCategoria(id1) {
    console.log(id1);
    const Expandir = document.getElementById(id1);
    Expandir.style.transition = "1s";
    Expandir.style.webkitTransform = "scale(1.1)";
}

function ContraerCategoria(id2) {
    const Expandir = document.getElementById(id2);
    Expandir.style.webkitTransform = "scale(1)";
}