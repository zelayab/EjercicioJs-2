
const btnBox = document.getElementById("btnAddBox");
const divContainer = document.getElementById("contenedor");
const texto = document.getElementById("texto")
const imagen = document.getElementById("imagenInput")
const igLg = document.getElementById('bigImg');

/* resetea los valores de los inputs */
function reset(){
    imagen.value = '';
    texto.value = '';
}
//Img de muestra
//https://i.pinimg.com/originals/ae/bb/2a/aebb2aba5805a17893f72429b5995ee2.jpg

/* creando el div grande */
  const divBig = document.getElementById("vistaGrande");
  const bigImg = document.getElementById("bigImg");
  imagen.addEventListener("click",function(){
    bigImg.setAttribute("src",texto);
    //alterna en eliminar o crear clase
    divBig.classList.toggle("vistaGrande");
  });

 /* abriendo la imagen en otra pagina al click */
igLg.addEventListener('click', function openImg() {
    window.open(igLg.src, '_blank');
    window.focus();
    console.log(openImg);
})

//boton cerrar
  const btnClose = document.getElementById("cerrarImgGrande")
  btnClose.addEventListener("click",function(){
    //elimina la class si existe sino la agrega. alterna 
    divBig.classList.toggle("vistaGrande");
    divBig.style.display='none'
  });


/* creando boton imagen y texto */
btnBox.addEventListener('click', function () {
    /*  Mostrando div grande */
    divBig.style.display = "none";

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
    const addIgLg = igLg.setAttribute('src',imagen.value);
;
    /* blockea el divBig */
    addIg.addEventListener('click',function(){
        divBig.style.display = "block";
    });
    

    /* mostrar card */
    addBox.appendChild(addIg);
    addBox.appendChild(addText);
    addBox.appendChild(divBig);
    divContainer.appendChild(addBox);



    /* reseteo los valores del input */
    reset();
        
});




