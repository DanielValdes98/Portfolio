let menuVisible = false;

//Funcionn que oculta o muestra el menu
function mostrarOcultarMenu() {
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    //Oculto el menu una vez selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

document.addEventListener('DOMContentLoaded', function() {
    iniciarApp();
});

// FUNCION DE CONTACTAR VIA CORREO
// const $form = document.getElementById("formulario");

// $form.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//     event.preventDefault();
//     const form = new FormData(this);
//     console.log(form.get('name'));
// }




function iniciarApp() {
    navegacionFija();
    scrollNav();
    // descargarPDF();
}

// function descargarPDF() {   
//     let pdf = new jsPDF('p', 'pt', 'a4');
//     pdf.addEventListener('click', function() {
//         pdf.addHTML(document.querySelector('#pdf'), function() {
//             pdf.save('../img/U2_T1_H-WEB_CONECTIVIDAD.pdf');
//         });
//     });

// }

// Video 205
function navegacionFija() {
    const header = document.querySelector('.header');    
    const barra = document.querySelector('.contenedor');
    const headerTexto = document.querySelector('.header_texto');
    const about = document.querySelector('.about');
    const boton = document.querySelector('.button');

    window.addEventListener('scroll', function() {
        // console.log( header_texto.getBoundingClientRect() );
        if(header.getBoundingClientRect().bottom < 0) {
            barra.classList.add('fijo')
            headerTexto.classList.remove('header_texto')
            // boton.classList.remove('button position: absolute')
        } else {
            barra.classList.remove('fijo')
            headerTexto.classList.add('header_texto')
            // boton.classList.add('button position: relative')
        }
    });

}

// Video 206
function scrollNav() {
    const enlances = document.querySelectorAll('.navegacion a');

    enlances.forEach( enlace => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();

            const seccionScroll = e.target.attributes.href.value;
            const seccion = document.querySelector(seccionScroll);
            seccion.scrollIntoView({ behavior: "smooth" } );
            // console.log(seccionScroll);
        });
    });
}

const getUrlFromId = ref => {
    // Example ref: file-207fd9951e759130053d37cf0a558ffe84ddd1c9-mp3
    // We don't need the first part, unless we're using the same function for files and images
    const [_file, id, extension] = ref.split('-');
    return `https://cdn.sanity.io/files/${PROJECT_ID}/${DATASET}/${id}.${extension}`
}

