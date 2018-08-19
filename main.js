(function global() {

var global, bouton, name, price, ref, createRandom, description, ajouter, validation, reset;

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

// Recupère les value du tableau
var addTable = function addTable(e) {
  if (name == "" || price == "" || description == "") {
    return window.alert("Merci de remplir tout les champs")
  } else {
    name = document.getElementById('productName').value;
    price = document.getElementById('productPrice').value;
    ref = document.getElementById('randomRef').value;
    description = document.getElementById('productDescription').value;
    var p1 = new CreateLine(name, price, ref, description);
    tableau.push(p1);
    writeNewLine();
    eraseAll();
  };
};

//Vide les input pour une nouvelle saisie
var eraseAll = function eraseAll () {
  document.getElementById('productName').value = "";
  price = document.getElementById('productPrice').value = "";
  description = document.getElementById('productDescription').value = ""
  addRandom()
}

var tableau = [];

var writeNewLine = function writeNewLine () {
  console.log(tableau);
};

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
