var zoneAffichage = document.getElementById("zone_affichage");
var memory ;
var edition =false;

function rab() {
zoneAffichage.value="";
}

function calcul() {
  var champ = zoneAffichage.value;
  try {
    zoneAffichage.value = eval(champ);
  } catch (e) {
     alert('valeur incorrecte');
  }
}


function affiche(bouton) {
zoneAffichage.value += bouton.value;
}

function init(){
  var tableauBoutonsSimples = document.getElementsByClassName("bouton_simple");
  for (var i = 0; i < tableauBoutonsSimples.length; i++) {
    tableauBoutonsSimples[i].setAttribute('onclick','affiche(this)');
  }
}

function plusmoins() {
var champ = zoneAffichage.value;
if (champ.charAt(0)=='-'){
 var nbPositif = champ.replace("-","");
 zoneAffichage.value = nbPositif;
}
else {
  zoneAffichage.value = '-'+champ;

}
}

function range_memory() {
  memory = zoneAffichage.value;
}

function affiche_memory() {
    zoneAffichage.value += memory ;
}


function raz_memory() {;
  memory = undefined;
}

function mode_edition() {
  // edition = true;
  document.getElementById("E").style.color="red";
  document.getElementById("E").setAttribute("onclick","mode_calcul()");

  var tableauBoutonsSimples = document.getElementsByClassName("bouton_libre");
  for (var i = 0; i < tableauBoutonsLibres.length; i++) {
    tableauBoutonsLibres[i].setAttribute('onclick','edit()');
}


function mode_calcul() {
  // edition = false;
  document.getElementById("E").style.color="black";
  document.getElementById("E").setAttribute("onclick","mode_edition()");
}
