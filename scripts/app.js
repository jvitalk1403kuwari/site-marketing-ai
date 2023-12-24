const menuElementsToToggle = document.querySelectorAll(".toggle-menu-ext");
const iconeToggle = document.querySelector(".icone-toggle");

const toggleMenu = () => menuElementsToToggle.forEach(el => el.classList.toggle("hidden"));

iconeToggle.addEventListener("click" , toggleMenu);



// Créez un objet de date
let currentDate = new Date();

// Obtenez les composants de la date
// let day = currentDate.getDate();
// let month = currentDate.getMonth() + 1; // Les mois commencent à 0, donc ajoutez 1
let year = currentDate.getFullYear();

// Mettez la date dans le format souhaité (par exemple, JJ/MM/AAAA)
let formattedDate = day + '/' + month + '/' + year;

// Affichez la date dans le conteneur avec l'ID "date-container"
document.getElementById('date-container').innerText = formattedDate;