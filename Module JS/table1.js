//Construire une table de multiplication entre 1 et 9 !
 var nombre = window.prompt("Entrer un chiffre");
 var nbLignes= window.prompt("Combien de lignes?");

 var s ="<table>";
s+="<tr><th> nombre  </th> <th> multiplié par</th><th>resultat </th></tr>";


for (var i = 0; i < nbLignes; i++) {
  s+=("<tr><td>"+nombre+"</td><td> x "+i+" </td><td>"+nombre*i+"</td></tr>");
}

s+="</table>";

document.write(s);
// var ligne = window.prompt("Entrer un nombre de ligne")
