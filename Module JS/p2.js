var saisie=0;
var tableauSaisie=[];​
​
while (saisie!=-1) {​
 saisie=prompt('Bonjour,saisir votre valeur');​
 if (saisie!=-1) {​
   if ()​
​
 }​
  tableauSaisie.push(saisie);​
  //objectif:calculer la SOMME des saisies​
}​
console.log(tableauSaisie);​
​
function somme (tableau){​
 var somme;​
 for (var i = 0; i < tableau.length; i++) {​
   somme= somme +tableau[i];​
 }​
​
var a = somme(tableauSaisie);​
}​


function moyenne(tableau){​
var moyenne;​
moyenne= somme (tableau)/tableau.length;​{
  return moyenne;​
}​
moyenne (tableauSaisie);​
}​
​
function compterZEROS (tableauSaisie){​
  var compteur=0;​
  for (var i = 0; i < tableauSaisie.length; i++) {​
   if (tableauSaisie[i]=="0")​
   compteur++;​
  }​
  return compteur;​
  }​
