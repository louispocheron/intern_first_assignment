// DECLARER LES BOUTONS QU'ON VA SE SERVIR
const imgcrop = document.getElementById("imgcrop");
const recadrer = document.querySelector('.recadrer');
const sauvegardercrop = document.querySelector(".sauvegardercrop");
let cropresult = document.querySelector(".cropresult");
const buttonsavedel = document.querySelector(".buttonsaveno");
const deleteimg = document.querySelector(".deleteb");
const photocontainer = document.querySelector(".photocontainer");
const resetcropper = document.querySelector(".resetcropper");
let imgcontainer = document.querySelector(".imgcontainer");
const buttoncontainer = document.querySelector(".buttoncontainer");

 // RECUPER LE BOUTON POUR METTRE UN FILTRE ET L'IMAGE A APPLIQUER LE FILTRE
        // IMPORTANT DE PAS CHANGER LA MANIERE DE RECUPERER LES IMAGES 
const slideshowimg = document.getElementsByClassName("imga")
const filterbutton = document.querySelector('.filterbutton'); 
const imgfilter = document.querySelector(".splide__slide");
let imgtest = document.querySelector(".imga");
const ulimg = document.querySelector(".splide__list");

// RECUPERE LA DIV DANS LAQUELLE LE CAROUSSEL VA ETRE 
    const splidepush = document.querySelector(".splide");

cropperimg();

// CREATION DE l'INSTANCE DE CROPPER
function cropperimg(){
    let cropper = new Cropper(imgcrop, {
                // aspectRatio: 16 / 9,  // POUR GARDER LES DIMENSIONS!! 
            autoCropArea: 0.8,
            zoomOnTouch: false,
        });

        // RETURN DE l'INSTANCE POUR RECUPERER SA VALUE DANS LA FONCTION SUIVANTE 
        return cropper; 
};


console.log("yolooaaa");


console.log("yobg");
// EVENT DU BOUTON DELETE 
deleteimg.addEventListener("click", function(){ 

    let cropper = cropperimg();
    createimgcropped().destroy();
    console.log("photo container remove");
})



// RECUPERE L'URL DE LA NOUVELLE IMAGE QUI VA ETRE MODIFIER 
function urltest(){  
    // REPRENDRE L'INSTANCE DE CROPPER DE LA FONCTION AU DESSUS
    let cropper = cropperimg();

    // RECUPERER LES DIMENSION ET LA POSITION DE L'IMAGE REDIMMENSIONNER
    let canvas = imgcrop.cropper.getCroppedCanvas();

    // RECUPERER L'URL DE L'IMAGE EN FORMAT base64
    const urlImg = canvas.toDataURL();
    return urlImg;
};


// TODO 
function createimgcropped(){

    if(!document.querySelector(".cropresult")){

    }
    else{

        let img = document.createElement("img"); 
        img.src = urltest();
        img.className = 'imgmodifiercrop';
        cropresult.appendChild(img);

    }
    let imagecreated = document.querySelector(".imgmodifiercrop");

    return imagecreated
}



// DEUXIEME BOUTTON POUR RETOURNER L'IMAGE 
const arrow = document.querySelector('.arrow');


// APPELLER LA FONCTION AU CLICK DU BOUTTON "ARROW"
arrow.addEventListener("click", function(){
    let cropper = cropperimg();
    // console.log(imgcrop.cropper.getData([2]));
     let data = imgcrop.cropper.getData();
     console.log(data.scaleX);

     if(data.scaleX == 1){
         imgcrop.cropper.scaleX(-1)
     }
     else{
         imgcrop.cropper.scaleX(1)
     }   
});


// JS POUR ZOOM IN OU ZOOM OUT 
const zoomin = document.querySelector(".zoomin");
const zoomout = document.querySelector(".zoomout");

// EVENT DU ZOOMIN
zoomin.addEventListener("click", function(){
    let cropper = cropperimg();

    // NIVEAU DE ZOOM IN, POUR QUE CE SOIS FLUIDE LAISSER 0.1
    imgcrop.cropper.zoom(0.1);
});

zoomout.addEventListener("click", function(){
    let cropper = cropperimg();

    // NIVEAU DE ZOOM OUT
    imgcrop.cropper.zoom(-0.1);
});

console.log("sasqssa");

// CAROUSSEL POUR LES FILTRES DE PHOTOS
    filterbutton.addEventListener("click", function(){    

        // BOUCLE QUI PASSE DANS CHAQUE IMAGE POUR DES FILTRES DIFFERENT
            // !IMPORTANT: SI ON VEUT RAJOUTER UN FILTRE, NE PAS TOUCHER AU JS NI AU CSS, JUSTE RAJOUTER UNE IMAGE AVEC UNE SRC BLANK ET class = "imga ${nomdufiltre}"
      for(let i = 0; i < slideshowimg.length; i++){
          let pushurl = slideshowimg[i];
          pushurl.src = urltest();
          let namefilter = slideshowimg[i].className;
          console.log(namefilter);
          
        //   EVENT AU CLICK QUI PERMET DE CLICKER SUR LE FILTRE QUE L'ONT VEUT ET EN CREER UNE NOUVELLE IMAGE
          slideshowimg[i].addEventListener("click", function(){
            let imgfilternew = document.createElement("img");
            imgfilternew.src = pushurl.src;
            imgfilternew.classList = namefilter;
            cropresult.appendChild(imgfilternew);
        });
          
      }
        // INITIALISATION DE SPLIDES JS ( CARROUSEL )
            var splide = new Splide( splidepush, {
                perPage: 1,
                perMove: 1,
                pagination: false
            });
  
  splide.mount();

    // DESTROY L'INSTANCE DE CROPPER QUAND ON COMMENCE A CHOISIR DES FILTRES 
        let cropper = cropperimg();
        imgcrop.cropper.destroy();
        imgcontainer.style.display = "none";
        buttoncontainer.style.display = "none";



    });

    // RESET L'IMAGE COMME ELLE L'ETAIT AU DEBUT
    resetcropper.addEventListener("click", function(){
        let cropper = cropperimg();
        imgcrop.cropper.reset();
    });

    // []
 // TODO AJAX POUR PUSH L'IMAGE TOTALEMENT MODIFIEE ET CROPPEE DANS LA BASE DE DONNEE






















// const croppedImage = document.getElementById("croppedImage");
// const cropButton = document.getElementById("cropButton");
// const myGreatImage = document.getElementById("myGreatImage");
// let cropper = null;
// cropButton.addEventListener("click", cropImage);

// function getImage(){
//     let newImg = new Image(imgcrop.width, imgcrop.height);
//     newImg.id = "myGreatImage"
//     newImg.src = URL.createObjectURL(imgcrop.dataset.url + ".js");
//     imgcrop.appendChild(newImg);

//     console.log(newImg);

//     // processImage();
// }
// getImage();

// function processImage(){
//     cropper = new Cropper(myGreatImage, {
//         // aspectRatio: 16/9,
//         crop(event){
//             console.log(event);
//             const canvas = this.cropper.getCroppedCanvas();
//             croppedImage.src = canvas.toDataUrl("image/jpeg");
//         }
//     })
// }

// function cropImage() {
//     // A FAIRE 
// }
// getImage();
// console.log("test du test");

// console.log('after');



