//On Initialise les quatres tableaux!
var France=["Paris","Toulouse","Marseille","Lyon"];
var Algerie=["Alger","Biskra","Annaba","Oued souf"];
var Tunisie=["Sousse","Tunis","Monastir","Mahdia"];
var Maroc=["Tanger","Marrakech","Oujda","Cassablanca"];
//On déclare le tableau des villes restantes (à alimenter dans la fonction recherchePays)!
var villesRestantes=[];
//On définit déjà le selecteur du body (en tant que variable globale) pour ne pas le refaire dans toutes les fonctions!
var monBody = document.getElementById("body");


//La fonction qui va chercher les villes restantes dans chaque pays!
function recherchePays(saisie){
if (France.includes(saisie)){
  for (var i = 0; i < France.length; i++){
    //Si la saisie existe dans tableau on ne la met pas dans les villes restantes!
    if (saisie!=France[i])
      villesRestantes[i]=France[i];
    }
    //On retourne le nom du pays(pour l'afficher dans la page(message de bienvenue))
    return'France';
  }
  if (Algerie.includes(saisie)){
    for (var i = 0; i < Algerie.length; i++){
      if (saisie!=Algerie[i])
        villesRestantes[i]=Algerie[i];
      }
      return'Algerie';
    }
    if (Tunisie.includes(saisie)){
      for (var i = 0; i < Tunisie.length; i++){
        if (saisie!=Tunisie[i])
          villesRestantes[i]=Tunisie[i];
        }
        return'Tunisie';
      }
      if (Maroc.includes(saisie)){
        for (var i = 0; i < Maroc.length; i++){
          if (saisie!=Maroc[i])
            villesRestantes[i]=Maroc[i];
          }
          return'Maroc';
        }
        else
          alert ("Je ne connais pas cette ville");
      }


function afficherInput() {
  //je crée un Input !
  var monInput= document.createElement("input");
  monInput.setAttribute("type","text");
  monInput.setAttribute("id","champVille");
   monBody.appendChild(monInput);
   //je crée un bouton valider!
   var monBouton = document.createElement("button");
   var texteBouton = document.createTextNode("Valider");
   monBouton.appendChild(texteBouton);
   monBouton.setAttribute("onclick","afficherDestinations()");
   monBody.appendChild(monBouton);
   //on désactive le premier bouton uen fois les éléments créés!
  document.getElementById("premierBouton").disabled=true;
}

function afficherDestinations(){
  var valeur = document.getElementById('champVille').value;
  var pays = recherchePays(valeur);
  var maValeur= document.createTextNode("bienvenue en"+pays+".Vous pouvez encore visiter les lieux suivants");
  //Faire des sauts de ligne pour la mise en page!
  monBody.appendChild(document.createElement("br"));
  monBody.appendChild(document.createElement("br"));
  //Mettre le message correspondant au pays!
monBody.appendChild(maValeur);

//Procédure pour afficher les valeurs du tableau"villesRestantes"
var ul = document.createElement("ul");
for(var i=0;i<villesRestantes.length;i++){
  //consoles.log(villesRestantes[i]);
  //villesRestantes contient une valeur nulle que je ne dois pas afficherInput
  if (villesRestantes[i]!=null){
    var nouveauLi= document.createElement("li");
    var nouvelleVille = document.createTextNode(villesRestantes[i]);
    nouveauLi.appendChild(nouvelleVille);
    ul.appendChild(nouveauLi);
  }
}
monBody.appendChild(ul);

}

//
// function clickBouton(){
//   event.preventDefault();
//   recherchePays(valeurChampVille.value);
// }
