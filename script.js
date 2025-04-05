const burger=document.getElementById('burger');
const nav=document.getElementById('nav_mobile');
const btnClose=document.getElementById('close');

burger.addEventListener('click',()=>{
    btnClose.style.display='block';
   nav.style.display='block';
    burger.style.display='none';
}
)
btnClose.addEventListener('click',()=>{


    nav.style.display='none';
    burger.style.display='block';
})

/*slide logement*/
let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }

  const offset = -currentSlide * 100;
  document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}

function changeSlide(step) {
  showSlide(currentSlide + step);
}

// Afficher la première slide au chargement
showSlide(currentSlide);

// Fonction pour mettre à jour l'iframe en fonction de l'adresse
function updateMap() {
    const adresseTexte = document.getElementById("adresse-texte").textContent;
    const adresseEncodée = encodeURIComponent(adresseTexte);
    const mapFrame = document.getElementById("map-frame");

    // Générer l'URL de l'iframe Google Maps
    const mapURL = `https://www.google.com/maps?q=${adresseEncodée}&output=embed`;
    mapFrame.src = mapURL;
  }

  // Appeler la fonction au chargement de la page
  updateMap();

//fonction pour imprimer le cv//
const printButton = document.getElementById('btnCv');

function printCV() {
    alert('Le CV va être imprimé');
    window.open('cv.html', '_blank').print();


    
  }
printButton.addEventListener('click', printCV);
