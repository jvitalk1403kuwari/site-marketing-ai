// Récupération de l'élément où afficher la date
let dateElement = document.getElementById('date');

// Création d'un objet Date pour obtenir la date actuelle
let dateActuelle = new Date();

// Création de variables pour stocker le jour, le mois et l'année
// let jour = dateActuelle.getDate();
// let mois = dateActuelle.getMonth() + 1; // Notez que JavaScript compte les mois à partir de 0, donc janvier est 0, février est 1, etc.
let annee = dateActuelle.getFullYear();

// Formatage de la date pour avoir le format jj/mm/aaaa
// let dateFormatee = jour + '/' + mois + '/' + annee;
let dateFormatee = + annee;

// Affichage de la date dans l'élément HTML
dateElement.textContent = dateFormatee;
