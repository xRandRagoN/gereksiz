class yArra {
  constructor(uzunyadakucuk) {
    var ekstra;
    if(uzunyadakucuk == "uzun") {
      ekstra = "16";
    } else {
      ekstra = "5";
    }

    this.uzunluk = Math.floor(Math.random()*ekstra)+"cm";
  }
} 
var yArram = new yArra("ezer");
console.log("yarramız: "+yArram.uzunluk);
