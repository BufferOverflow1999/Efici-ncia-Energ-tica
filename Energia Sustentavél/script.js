
function FEnergia(){
//Declarando as 6 variáveis
var QLamp = parseInt(document.getElementById("QLamp").value)
var ULamp = parseInt(document.getElementById("ULamp").value)
const LTconsumo = document.querySelector('#Lconsumo');
var LConsumo =  LTconsumo.options[LTconsumo.selectedIndex].value;
const TTconsumo = document.querySelector('#Tconsumo');
var QTv = parseInt(document.getElementById("QTv").value)
var UTv = parseInt(document.getElementById("UTv").value)
var TConsumo = parseInt(TTconsumo.options[TTconsumo.selectedIndex].value);
const GTconsumo = document.querySelector('#Gconsumo');
var QGela = parseInt(document.getElementById("QGela").value);
var UGela = parseInt(document.getElementById("UGela").value);
var GConsumo = parseInt(GTconsumo.options[GTconsumo.selectedIndex].value);
var KiloWatH =  0.50 //parseInt(document.getElementById("KiloWatH").value)

var resultado = ((((LConsumo* ULamp *QLamp)/1000) * 31) + ((( TConsumo* UTv * QTv)/1000) * 31) + (((GConsumo * QGela))))* KiloWatH;

document.getElementById("resultado").value= parseInt(resultado);
console.log(LConsumo);
}