
const boton2 = document.getElementById("btnAddBox");
const divContainer = document.getElementById("contenedor");
const texto = document.getElementById("texto")
const imagen = document.getElementById("imagen")
const divGrande = document.getElementById("vistaGrande")
const btnClose = document.getElementById("cerrarImgGrande")
const igLg = document.getElementById('imagenLg');

function reset(){
    imagen.value = '';
    texto.value = '';
}

 /* abriendo la imagen en otra pagina al click */
igLg.addEventListener('click', function openImg() {
    window.open(igLg.src, '_blank');
    window.focus();
    console.log(openImg);
})

/* cerrar imagen grande */
btnClose.addEventListener('click',function (){
    divGrande.style.display = "none";
});

/* creando boton imagen y texto */
boton2.addEventListener('click', function () {
    /*  Mostrando div grande */
    divGrande.style.display = "block";
   
    const addBox = document.createElement('div');
    addBox.classList.add('caja');

    /* creando el P */
    const addText = document.createElement('p');

    /* Accedo al valor del p */
    addText.textContent = document.getElementById('texto').value;

    /* creo elemento IMG */
    const addIg = document.createElement('img'); 

    /* creo clase nueva */
    addIg.classList.add('img-card');

    /* Accedo al valor de la Imagen*/
    addIg.setAttribute('src', imagen.value);

     /* sacando src de la imagen y uniendola con ImgLg */
    const addIgLg = imagenLg.setAttribute('src',imagen.value)
   
    

    

    /* mostrar card */
    addBox.appendChild(addIg);
    addBox.appendChild(addText);
    divContainer.appendChild(addBox);



    /* reseteo los valores del input */
    reset();
        
});




