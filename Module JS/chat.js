function chat (nom, couleur, age){
  this.nom=nom;
  this.couleur=couleur;
  this.age=age;}

function ptChat(nom, couleur, age) {
  this.nom=nom;
  this.couleur=couleur;
  this.age=age;
}

  var lilou = new chat ('lilou','blanc',3);
  var mina =  new ptChat('mina','noir',5);
  var ninou = new ptChat('ninou','marron',3);


chat.prototype.miauler= function(){
  console.log ("miaou!");
}

ptChat.prototype.miauler= function(){
  console.log ("uoaim!");
}

lilou.miauler();
mina.miauler();
ninou.miauler();
