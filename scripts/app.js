const menuElementsToToggle = document.querySelectorAll(".toggle-menu-ext");
const iconeToggle = document.querySelector(".icone-toggle");

const toggleMenu = () => menuElementsToToggle.forEach(el => el.classList.toggle("hidden"));

iconeToggle.addEventListener("click" , toggleMenu);



//-------------Fonction pour remonter en haut de la page-------------//
// Fonction pour remonter en haut de la page
function scrollTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Afficher ou masquer le bouton en fonction de la position de défilement
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  var btn = document.getElementById("scrollTopBtn");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }

  // Cacher le bouton lorsque la largeur de l'écran est inférieure à 900px
  // if (window.innerWidth < 400) {
  //   btn.style.display = "none";
  // }
}
