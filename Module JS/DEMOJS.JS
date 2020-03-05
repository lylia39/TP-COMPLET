function getRandomInt(max){

    return Math.floor(Math.random() * Math.floor(max))

}



var tirage = getRandomInt(11);

alert(tirage);



var reponse=window.prompt ("Vous avez 4 essais pour trouver le nbre entre 0 et 10 que j'ai choisi !!!" , "Saisissez votre réponse: "+tirage+" ???");

var nbreIteration = 1;



while (tirage !=reponse && nbreIteration <3){

    if (tirage < reponse){

        alert ("Votre réponse est trop grande !!! ", tirage);

    }

    else if (tirage > reponse){

        alert ("Votre réponse est trop basse !!!", tirage);

    }


    nbreIteration = nbreIteration +1;

    reponse=window.prompt ("Ré essayez une nouvelle fois !!! " , "Saisissez votre réponse: "+tirage+" ???");

}

if (tirage == reponse)

alert ("Félicitations, vous avez trouvé la bonne réponse...", tirage);

else alert ("Désolé, vous n'avez pas trouvé la bonne réponse...", tirage);



var message = "J'utilise des variables JavaScript";

var num = 42;

var text = "Ceci";

var vide, nonVide = 123;

var vrai = true, faux = false;



//alert(message);

console.log(message);

console.log(typeof num);

console.log(typeof text);

console.log(typeof vide);

console.log(typeof nonVide);

console.log(typeof vrai);

console.log(typeof faux);
