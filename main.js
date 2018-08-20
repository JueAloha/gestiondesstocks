(function global() {

  var global, bouton, name, price, ref, createRandom, description, ajouter, validation, reset, tableur, buttonSuppr, listenButtonModif, deleteLine, addPanier, addTable, p1, findIndex, declencheErase;

  // Fait disparaitre le bouton et apparaitre le formulaire
  fadeOut = function fadeOut() {
    bouton.classList.add('hidden');
    global.classList.add('visibility');
  }

  // Génère le numéro ramdom
  addRandom = function addRandom() {
    ref = document.getElementById('randomRef');
    createRandom = Math.floor((Math.random() * 1000) + 1);
    ref.value = '#00' + createRandom
  }

  // Constructeur pour les produits
  CreateLine = function CreateLine(nom, prix, reference, details) {
    this.nom = name;
    this.prix = price;
    this.reference = ref;
    this.details = description;
  }

  // Recupère les value du formulaire
  addTable = function addTable() {
    name = document.getElementById('productName').value;
    price = document.getElementById('productPrice').value;
    ref = document.getElementById('randomRef').value;
    description = document.getElementById('productDescription').value;
    if (name == "" || price == "" || description == "") {
      return window.alert("Merci de remplir tous les champs")
    } else {
      p1 = new CreateLine(name, price, ref, description);
      addPanier(p1);
    }
    eraseAll();
  };

// ajout dans le Panier & écrit dans le DOM
  addPanier = function addPanier() {
    tableau.push(p1)
    console.log(tableau);
    // findIndex = tableau.indexOf(p1)
    // console.log(findIndex);
    var tablo = document.getElementById("tablo");
    var ligne = document.createElement('tr');
    var ligneTablo = tablo.appendChild(ligne);
    ligneTablo.innerHTML += '<td class="modif">modifier</td>'+'<td class="sup">supprimer</td>'+'<td>'+p1.nom+'</td>'+
    '<td>'+p1.prix+'</td>'+'<td>'+p1.reference+'</td>'+'<td>'+p1.details+'</td>';
    buttonSuppr = ligne.querySelector('.sup');
    declencheErase = buttonSuppr.addEventListener('click', deleteLine);
  };

  // supprimer la ligne dans le HTML et dans l'array
  deleteLine = function deleteLine(e) {
    var supprimeLigne = this.parentNode.remove();
    tableau.forEach(function (e) {
      declencheErase.indexOf(this)
      console.log(this);
    });
    var supprCase = tableau.splice(findIndex, 1);
    console.log(tableau);
    };


  //Vide les input pour une nouvelle saisie
  eraseAll = function eraseAll () {
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
    ajouter = document.getElementById('addProduct');
    validation = ajouter.addEventListener('click', addTable);
  }


  window.addEventListener("DOMContentLoaded", start);

}());
