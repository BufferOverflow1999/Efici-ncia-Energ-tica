
function FEnergia(){
//Declarando as 6 variáveis
var QLamp = parseInt(document.getElementById("QLamp".value))
var ULamp = parseInt(document.getElementById("ULamp").value)
var LConsumo = parseInt(document.getElementById("LConsumo").value)
var QTv = parseInt(document.getElementById("QTv").value)
var UTv = parseInt(document.getElementById("UTv").value)
var TConsumo = parseInt(document.getElementById("TConsumo").value)
var QGela = parseInt(document.getElementById("QGela").value)
var UGela = parseInt(document.getElementById("UGela").value)
var GConsumo = parseInt(document.getElementById("GConsumo").value)
var KiloWatH = parseInt(document.getElementById("KiloWatH").value)

var resultado = ((((LConsumo * ULamp *QLamp)/1000) * 31) + (((TConsumo * UTv * QTv)/1000) * 31) + (((GConsumo * UGela * QGela)/1000) * 31)) * KiloWatH

parseInt(document.getElementById("resultado").value) = LConsumo

}