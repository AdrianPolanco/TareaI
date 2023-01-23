//Constructor
function Builder(title, image, description) {
    (this.title = title),
        (this.image = image),
        (this.description = description);
}

//Objetos
const bikeHobby = new Builder(
    "Montar bicicleta",
    "images/bike.jpg",
    "Entre mis hobbies esta el montar bicicleta,especialmente en lugares despejados y tranquiloscomo parques o montes, me gusta sentir el viento en mi cara."
);

console.log(bikeHobby);

//Selectores
const bodySelector = document.querySelector("body");
const spinner = document.querySelector("#spinner");
const hobbies = document.querySelector(".container");
const bike = document.querySelector(".bike");
const development = document.querySelector(".development");
//Eventos
document.addEventListener("DOMContentLoaded", cargar);
bike.addEventListener("click", crearHTML);
development.addEventListener("mouseenter", crearHTML);
//Funciones

function cargar(e) {
    bodySelector.classList.add("no-movil");
    hobbies.classList.add("no-show");
    setTimeout(() => {
        hobbies.classList.remove("no-show");
        bodySelector.classList.remove("no-movil");
        spinner.style.transition = "2s";
        spinner.classList.add("hidden");
    }, 1000);
}

function crearHTML(e) {
    const clase = e.target.classList[1];
    /*e.target.children[0].classList.add("ocultar");
    e.target.classList.remove("border");*/
    switch (clase) {
        case "bike":
            const card = document.createElement("div");
            card.classList.add("container-info", "container-info-day");
            card.innerHTML = `<header class="card-header card-header-day">
            <p>Montar bicicleta</p>
        </header>
        <img
            src="images/bike.jpg"
            alt="Bike riding"
            class="image bike-img"
        />
        
            <p class="p p-day">
                Entre mis hobbies esta el montar bicicleta,
                especialmente en lugares despejados y tranquilos
                como parques o montes, me gusta sentir el viento
                en mi cara.
            </p>
        </div>`;
            e.target.parentElement.insertBefore(card, e.target);
            e.target.parentElement.removeChild(e.target);
            card.addEventListener("click", limpiarDiv);
            break;
        case "development":
            console.log("Desarrollo");
            break;
        default:
    }
}

function limpiarDiv(e) {
    if (e.target.classList.contains("container-info")) {
        const newArticle = document.createElement("article");
        newArticle.classList.add("hobbies", "bike", "border");
        newArticle.innerHTML = ` <svg
    xmlns="http://www.w3.org/2000/svg"
    width="192"
    height="160"
    fill="currentColor"
    class="bi bi-bicycle"
    viewBox="0 0 16 16"
>
    <path
        d="M4 4.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1v.5h4.14l.386-1.158A.5.5 0 0 1 11 4h1a.5.5 0 0 1 0 1h-.64l-.311.935.807 1.29a3 3 0 1 1-.848.53l-.508-.812-2.076 3.322A.5.5 0 0 1 8 10.5H5.959a3 3 0 1 1-1.815-3.274L5 5.856V5h-.5a.5.5 0 0 1-.5-.5zm1.5 2.443-.508.814c.5.444.85 1.054.967 1.743h1.139L5.5 6.943zM8 9.057 9.598 6.5H6.402L8 9.057zM4.937 9.5a1.997 1.997 0 0 0-.487-.877l-.548.877h1.035zM3.603 8.092A2 2 0 1 0 4.937 10.5H3a.5.5 0 0 1-.424-.765l1.027-1.643zm7.947.53a2 2 0 1 0 .848-.53l1.026 1.643a.5.5 0 1 1-.848.53L11.55 8.623z"
    />
</svg>
    `;
        e.target.parentElement.insertBefore(newArticle, e.target);
        e.target.parentElement.removeChild(e.target);
        newArticle.addEventListener("click", crearHTML);
    }
}

/*

<article class="hobbies bike">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="192"
                        height="160"
                        fill="currentColor"
                        class="bi bi-bicycle"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M4 4.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1v.5h4.14l.386-1.158A.5.5 0 0 1 11 4h1a.5.5 0 0 1 0 1h-.64l-.311.935.807 1.29a3 3 0 1 1-.848.53l-.508-.812-2.076 3.322A.5.5 0 0 1 8 10.5H5.959a3 3 0 1 1-1.815-3.274L5 5.856V5h-.5a.5.5 0 0 1-.5-.5zm1.5 2.443-.508.814c.5.444.85 1.054.967 1.743h1.139L5.5 6.943zM8 9.057 9.598 6.5H6.402L8 9.057zM4.937 9.5a1.997 1.997 0 0 0-.487-.877l-.548.877h1.035zM3.603 8.092A2 2 0 1 0 4.937 10.5H3a.5.5 0 0 1-.424-.765l1.027-1.643zm7.947.53a2 2 0 1 0 .848-.53l1.026 1.643a.5.5 0 1 1-.848.53L11.55 8.623z"
                        />
                    </svg>
                </article>



<div
                        class="container-info info-bike container-info-day ocultar"
                    >
                        <header class="card-header card-header-day">
                            <p>Montar bicicleta</p>
                        </header>
                        <img
                            src="images/bike.jpg"
                            alt="Bike riding"
                            class="image bike-img"
                        />
                        <div class="p-container">
                            <p class="p p-day">
                                Entre mis hobbies esta el montar bicicleta,
                                especialmente en lugares despejados y tranquilos
                                como parques o montes, me gusta sentir el viento
                                en mi cara.
                            </p>
                        </div>
                    </div>*/
