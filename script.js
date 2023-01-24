//Selectores
const bodySelector = document.querySelector("body");
const spinner = document.querySelector("#spinner");
const hobbies = document.querySelector(".container");
const bike = document.querySelector(".bike");
const development = document.querySelector(".development");
const gaming = document.querySelector(".gaming");
const swim = document.querySelector(".swim");
const watch = document.querySelector(".watch");
const music = document.querySelector(".music");

const dayMode = document.querySelector("#toggle-icon");

//Eventos
document.addEventListener("DOMContentLoaded", cargar);
bike.addEventListener("click", crearHTML);
development.addEventListener("click", crearHTML);
gaming.addEventListener("click", crearHTML);
swim.addEventListener("click", crearHTML);
watch.addEventListener("click", crearHTML);
music.addEventListener("click", crearHTML);

//Funcimouseout
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
            const cardBike = document.createElement("div");
            cardBike.classList.add(
                "container-info",
                "container-info-day",
                "my-bike"
            );
            cardBike.innerHTML = `<header class="card-header card-header-day">
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
            e.target.parentElement.insertBefore(cardBike, e.target);
            e.target.parentElement.removeChild(e.target);
            cardBike.addEventListener("click", limpiarDiv);

            break;
        case "development":
            const cardDevelopment = document.createElement("div");
            cardDevelopment.classList.add(
                "container-info",
                "container-info-day",
                "my-development"
            );
            cardDevelopment.innerHTML = `
            <header class="card-header card-header-day">
                            <p>Programar</p>
                        </header>
                        <img
                            src="images/development.jpg"
                            alt="Software development"
                            class="image development-img"
                        />
                        <div class="p-container">
                            <p class="p p-day">
                                Me gusta desarrollar aplicaciones web y aprender
                                todo lo que tenga que ver con ello,
                                especialmente el desarrollo web frontend
                            </p>
                        </div>`;
            e.target.parentElement.insertBefore(cardDevelopment, e.target);
            e.target.parentElement.removeChild(e.target);
            cardDevelopment.addEventListener("click", limpiarDiv);

            break;
        case "gaming":
            const cardGaming = document.createElement("div");
            cardGaming.classList.add(
                "container-info",
                "container-info-day",
                "my-gaming"
            );
            cardGaming.innerHTML = `
            <header class="card-header card-header-day">
                            <p>Videojuegos</p>
                        </header>
                        <img
                            src="images/gaming.jpg"
                            alt="Gaming"
                            class="image gaming-img"
                        />
                        <div class="p-container">
                            <p class="p p-day">
                                Soy un gran fan de los videojuegos online,
                                especialmente de consola o PC, son un gran hobby
                                en mis tiempos libres para entretenerme y hacer
                                amistades.
                            </p>
                        </div>`;
            e.target.parentElement.insertBefore(cardGaming, e.target);
            e.target.parentElement.removeChild(e.target);
            cardGaming.addEventListener("click", limpiarDiv);

            break;
        case "swim":
            const cardSwim = document.createElement("div");
            cardSwim.classList.add(
                "container-info",
                "container-info-day",
                "my-swim"
            );
            cardSwim.innerHTML = `
            <header class="card-header card-header-day">
                            <p>Nadar</p>
                        </header>
                        <img
                            src="images/swim.jpg"
                            alt="Swimming"
                            class="image swim-img"
                        />
                        <div class="p-container">
                            <p class="p p-day">
                                La natación es uno de mis deportes preferidos,
                                siempre que tengo la oportunidad nado en playas
                                o piscinas, aunque hare todo lo posible para
                                prácticarlo como deporte regularmente algún día!
                            </p>
                        </div>`;
            e.target.parentElement.insertBefore(cardSwim, e.target);
            e.target.parentElement.removeChild(e.target);
            cardSwim.addEventListener("click", limpiarDiv);
            break;
        case "watch":
            const cardWatch = document.createElement("div");
            cardWatch.classList.add(
                "container-info",
                "container-info-day",
                "my-watch"
            );
            cardWatch.innerHTML = `
            <header class="card-header card-header-day">
                            <p>Ver series y documentales</p>
                        </header>
                        <img
                            src="images/watch.jpg"
                            alt="Watching series"
                            class="image watch-img"
                        />
                        <div class="p-container">
                            <p class="p p-day">
                                Encuentro muy entretenido el ver series y
                                documentales (especialmente), suelen ser
                                generalmente históricos, militares o de
                                supervivencia, aunque ocasionalmente también veo
                                series de anime japonesas.
                            </p>
                        </div>`;
            e.target.parentElement.insertBefore(cardWatch, e.target);
            e.target.parentElement.removeChild(e.target);
            cardWatch.addEventListener("click", limpiarDiv);
            break;
        case "music":
            const cardMusic = document.createElement("div");
            cardMusic.classList.add(
                "container-info",
                "container-info-day",
                "my-music"
            );
            cardMusic.innerHTML = `
            <header class="card-header card-header-day">
                            <p>Escuchar música</p>
                        </header>
                        <img
                            src="images/music.jpg"
                            alt="Listening music"
                            class="image music-img"
                        />
                        <div class="p-container">
                            <p class="p p-day">
                                Uno de mis hobbies más frecuentes es escuchar
                                musica en mi bocina o celular dependiendo la
                                hora, especialmente bachata y en menor medida,
                                pop.
                            </p>
                        </div>
                        `;
            e.target.parentElement.insertBefore(cardMusic, e.target);
            e.target.parentElement.removeChild(e.target);
            cardMusic.addEventListener("click", limpiarDiv);
            break;
        default:
    }
}

function limpiarDiv(e) {
    if (e.target.classList.contains("container-info")) {
        const clase = e.target.classList[2];
        switch (clase) {
            case "my-bike":
                const newArticleBike = document.createElement("article");
                newArticleBike.classList.add("hobbies", "bike", "border");
                newArticleBike.innerHTML = ` <svg
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
                e.target.parentElement.insertBefore(newArticleBike, e.target);
                e.target.parentElement.removeChild(e.target);
                newArticleBike.addEventListener("click", crearHTML);
                break;
            case "my-development":
                const newArticleDevelopment = document.createElement("article");
                newArticleDevelopment.classList.add(
                    "hobbies",
                    "development",
                    "border"
                );
                newArticleDevelopment.innerHTML = ` <svg
                xmlns="http://www.w3.org/2000/svg"
                width="192"
                height="160"
                fill="currentColor"
                class="bi bi-pc-display-horizontal"
                viewBox="0 0 16 16"
            >
                <path
                    d="M1.5 0A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10H6v1H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5v-1h4.5A1.5 1.5 0 0 0 16 8.5v-7A1.5 1.5 0 0 0 14.5 0h-13Zm0 1h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5ZM12 12.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0ZM1.5 12h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1ZM1 14.25a.25.25 0 0 1 .25-.25h5.5a.25.25 0 1 1 0 .5h-5.5a.25.25 0 0 1-.25-.25Z"
                />
            </svg>
        `;
                e.target.parentElement.insertBefore(
                    newArticleDevelopment,
                    e.target
                );
                e.target.parentElement.removeChild(e.target);
                newArticleDevelopment.addEventListener("click", crearHTML);
                break;
            case "my-gaming":
                const newArticleGaming = document.createElement("article");
                newArticleGaming.classList.add("hobbies", "gaming", "border");
                newArticleGaming.innerHTML = ` <svg
                xmlns="http://www.w3.org/2000/svg"
                width="192"
                height="160"
                fill="currentColor"
                class="bi bi-controller"
                viewBox="0 0 16 16"
            >
                <path
                    d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1v-1z"
                />
                <path
                    d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729c.14.09.266.19.373.297.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.34 2.34 0 0 1 .433-.335.504.504 0 0 1-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a13.748 13.748 0 0 0-.748 2.295 12.351 12.351 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.354 12.354 0 0 0-.339-2.406 13.753 13.753 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27-1.036 0-2.063.091-2.913.27z"
                />
            </svg>
        `;
                e.target.parentElement.insertBefore(newArticleGaming, e.target);
                e.target.parentElement.removeChild(e.target);
                newArticleGaming.addEventListener("click", crearHTML);
                break;
            case "my-swim":
                const newArticleSwim = document.createElement("article");
                newArticleSwim.classList.add("hobbies", "swim", "border");
                newArticleSwim.innerHTML = ` <svg
                xmlns="http://www.w3.org/2000/svg"
                width="192"
                height="160"
                fill="currentColor"
                class="bi bi-water"
                viewBox="0 0 16 16"
            >
                <path
                    d="M.036 3.314a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0L.314 3.964a.5.5 0 0 1-.278-.65zm0 3a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0L.314 6.964a.5.5 0 0 1-.278-.65zm0 3a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0L.314 9.964a.5.5 0 0 1-.278-.65zm0 3a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.757-.703a.5.5 0 0 1-.278-.65z"
                />
            </svg>
            `;
                e.target.parentElement.insertBefore(newArticleSwim, e.target);
                e.target.parentElement.removeChild(e.target);
                newArticleSwim.addEventListener("click", crearHTML);
                break;
            case "my-watch":
                const newArticleWatch = document.createElement("article");
                newArticleWatch.classList.add("hobbies", "watch", "border");
                newArticleWatch.innerHTML = ` <svg
                xmlns="http://www.w3.org/2000/svg"
                width="192"
                height="160"
                fill="currentColor"
                class="bi bi-tv-fill"
                viewBox="0 0 16 16"
            >
                <path
                    d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM2 2h12s2 0 2 2v6s0 2-2 2H2s-2 0-2-2V4s0-2 2-2z"
                />
            </svg>
            `;
                e.target.parentElement.insertBefore(newArticleWatch, e.target);
                e.target.parentElement.removeChild(e.target);
                newArticleWatch.addEventListener("click", crearHTML);
                break;
            case "my-music":
                const newArticleMusic = document.createElement("article");
                newArticleMusic.classList.add("hobbies", "music", "border");
                newArticleMusic.innerHTML = ` <svg
                xmlns="http://www.w3.org/2000/svg"
                width="192"
                height="160"

                class="bi bi-music-note-beamed"
                viewBox="0 0 16 16"
            >
                <path
                    d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z"
                />
                <path
                    fill-rule="evenodd"
                    d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"
                />
                <path
                    d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z"
                />
            </svg>
            `;
                e.target.parentElement.insertBefore(newArticleMusic, e.target);
                e.target.parentElement.removeChild(e.target);
                newArticleMusic.addEventListener("click", crearHTML);
                break;
            default:
        }
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
