//boite de dialogue qui s'arrete a -1
var saisie = 0;
var tableauSaisies=[];

// while (saisie!=-1){
//   saisie=prompt ('Saisir une valeur');
//   if(saisie!=-1){
//     tableauSaisies.push(saisie);
//     }
//
//   }
  console.log(tableauSaisies);

 //affiche une somme!
function somme (){
  var somme;
  for (var i = 0; i < tableauSaisies.lenght; i++){
    somme= somme + tableauSaisies[i];
  }
  return somme;
}
 //Faire une moyenne !
// function moyenne() {
//   var moyenne = 0;
//   moyenne= somme()/ tableauSaisies.lenght;
//   return moyenne;
// }
// moyenne();

//faire en sorte d'ignorer si l'utilisateur saisit une chaine de caractères!
  saisie=prompt ('Saisir une valeur');
   if (isNaN(saisie)) {
     alert("not a number");
   }
   else
     alert("number");
