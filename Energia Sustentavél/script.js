function FEnergia(){


//Declarando as variáveis
var LTconsumo = document.querySelector('#Lconsumo');
var QLamp = parseInt(document.getElementById("QLamp").value)
var ULamp = parseInt(document.getElementById("ULamp").value)
var LConsumo =  LTconsumo.options[LTconsumo.selectedIndex].value;
//
var TTconsumo = document.querySelector('#Tconsumo');
var QTv = parseInt(document.getElementById("QTv").value)
var UTv = parseInt(document.getElementById("UTv").value)
var TConsumo = parseInt(TTconsumo.options[TTconsumo.selectedIndex].value);
//
var GTconsumo = document.querySelector('#Gconsumo');
var QGela = parseInt(document.getElementById("QGela").value);
var GConsumo = parseInt(GTconsumo.options[GTconsumo.selectedIndex].value);
//
var AArConsumo = document.querySelector('#Aconsumo');
var QAr = parseInt(document.getElementById('QAr').value);
var ArConsumo = parseInt(AArConsumo.options[AArConsumo.selectedIndex].value);
//

if(Number.isNaN(QLamp)){
   QLamp = 0;
   ULamp = 0;
   LConsumo = 0;
   
} else {
   QLamp = (LConsumo * ULamp * QLamp)/1000;
}

if(Number.isNaN(QTv)){
   QTv = 0;
   UTv = 0;
   TConsumo = 0;
  
   
} else {
   QTv = (QTv * UTv * TConsumo)/1000;
}

if(Number.isNaN(QGela)){
   QGela = 0;
   GConsumo = 0;
  
}

if(Number.isNaN(QAr)){
   QAr = 0;
   ArConsumo = 0;
  
}


var KiloWatH =  1.04 //parseInt(document.getElementById("KiloWatH").value)
var resultado = ((   QLamp  * 31) + ( QTv * 31) + (GConsumo * QGela) ) + (QAr * ArConsumo) * KiloWatH;

document.getElementById("resultado").value= String(resultado.toPrecision(4) + " " + "R$");

}
