// fonction qui génère un nombre aléatoire
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}



// on enregiste la valeur devinée par l'utilisateur

function mafonction(compteur){
while(nbAleatoire!=reponse && compteur!=0){

// on enregiste la valeur devinée par l'utilisateur
var reponse=prompt("bonjour, entrez une valeur.Nombre d'essais restant:"+compteur);
compteur=compteur-1; //ca veut dire compteur = compteur

// Ensuite, il faut comparer les deux valeurs et afficher un message à l'utilisateur

if (nbAleatoire<reponse)
alert("échec. ton nombre esr trop élevé");
else if (nbAleatoire>reponse)
alert("échec. ton nombre est trop petit")
else if (nbAleatoire==reponse) {
  alert("Bravo, tu as trouvé. le nombre est : "+nbAleatoire)
}
else {
  alert(" Ceci n'est pas un nombre");
}
}
}


var nbAleatoire= getRandomInt(11);
mafonction(3);
//var compteur=3;
//console.log(nbAleatoire);
