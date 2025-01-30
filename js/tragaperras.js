$( document ).ready(function() {

const frutas = [
    { index: 1, nombre: 'Cereza', simbolo: '🍒' },
    { index: 2, nombre: 'Limón', simbolo: '🍋' },
    { index: 3, nombre: 'Sandía', simbolo: '🍉' },
    { index: 4, nombre: 'Uva', simbolo: '🍇' },
    { index: 5, nombre: 'Plátano', simbolo: '🍌' }
];

var cont = 10;
var bloqueado = false;

function jugar(){

    $("#win-credits").text("")
    indicesFrutas = generarTresNumerosAleatorios();

    let slot1 = $("#slot1");
    let slot2 = $("#slot2");
    let slot3 = $("#slot3");

    // slot1.text(frutas[indicesFrutas[0]].simbolo);
    // slot2.text(frutas[indicesFrutas[1]].simbolo); 
    // slot3.text(frutas[indicesFrutas[2]].simbolo);

    let frutInd = frutas.find(fruta => fruta.index == indicesFrutas[0])

    if(frutInd){
        slot1.text(frutInd.simbolo);
    }

    frutInd = frutas.find(fruta => fruta.index == indicesFrutas[1])

    if(frutInd){
        slot2.text(frutInd.simbolo);
    }

    frutInd = frutas.find(fruta => fruta.index == indicesFrutas[2])

    if(frutInd){
        slot3.text(frutInd.simbolo);
    }

    cont--;

    

    if(cont==0){
        alert("TE HAS QUEDADO SIN CRÉDITOS!");
        bloqueado = true; // No permite seguir jugando
    }

    if(indicesFrutas[0]==indicesFrutas[1] && indicesFrutas[0] == indicesFrutas[2]){
        $("#win-credits").text("¡+3 CREDITOS!")
        
        cont += 3;
    } else if(indicesFrutas[0]==indicesFrutas[1] || indicesFrutas[0] == indicesFrutas[2] || indicesFrutas[1] == indicesFrutas[2]){
        $("#win-credits").text("¡+1 CREDITOS!")
        
        cont += 1;
    }

    $("#credits-value").text(cont);


}

function generarTresNumerosAleatorios() {


    let num1 = Math.floor(Math.random()*5);
    let num2 = Math.floor(Math.random()*5);
    let num3 = Math.floor(Math.random()*5);

    arrayNum = new Array(num1, num2, num3);




    return arrayNum;
}

var but2 = $("#play-button");

but2.click(function(){
    
    if(bloqueado===false){
        jugar();
    }

})

})