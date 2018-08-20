 (function global() {

var global, bouton, name, price, ref, createRandom, description, ajouter, validation, reset, tableur;

// Fait disparaitre le bouton et apparaitre le formulaire
var fadeOut = function fadeOut() {
    bouton.classList.add('hidden');
    global.classList.add('visibility');
}

// Génère le numéro ramdom
var addRandom = function addRandom() {
  ref = document.getElementById('randomRef');
  createRandom = Math.floor((Math.random() * 1000) + 1);
  ref.value = '#00' + createRandom
}

// Constructeur pour les produits
var CreateLine = function CreateLine(nom, prix, reference, details) {
  this.nom = name;
  this.prix = price;
  this.reference = ref;
  this.details = description;
}

// Recupère les value du formulaire
var addTable = function addTable() {
  name = document.getElementById('productName').value;
  price = document.getElementById('productPrice').value;
  ref = document.getElementById('randomRef').value;
  description = document.getElementById('productDescription').value;
  if (name == "" || price == "" || description == "") {
    return window.alert("Merci de remplir tout les champs")
  } else {
    var p1 = new CreateLine(name, price, ref, description);
    tableau.push(p1);
}
    addPanier();
    console.log(tableau);
    eraseAll();
};

function addPanier() {
  // ajout dans le Panier
  var tablo = document.getElementById("tablo");
  var ligne = document.createElement('tr');
  ligne.classeName='row';
  var ligneTablo = tablo.appendChild(ligne);
  ligneTablo.innerHTML += '<td>modifier</td>'+'<td>supprimer</td>'+
  '<td>'+name+'</td>'+'<td>'+price+'</td>'+'<td>'+ref+'</td>'+'<td>'+description+'</td>'

  var panier = document.getElementById('panier');
  panier.onclick = function () {
    var tablo = document.getElementById("tablo");
    global.classList.remove('visibility');
    global.classList.add('hidden');
    tablo.classList.add('visibility');
  };
};

//Vide les input pour une nouvelle saisie
var eraseAll = function eraseAll () {
  name = document.getElementById('productName').value = "";
  price = document.getElementById('productPrice').value = "";
  description = document.getElementById('productDescription').value = ""
  addRandom()
}

var tableau = [];


function start() {
  global = document.querySelector('.global');
  bouton = document.getElementById('btn');
  bouton.addEventListener("click", fadeOut);

  bouton.addEventListener('click', addRandom);
  ajouter = document.getElementById('addProduct')
  validation = ajouter.addEventListener('click', addTable)
}


window.addEventListener("DOMContentLoaded", start);

}());
