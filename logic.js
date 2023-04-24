let parteA;
let parteB;
let operacion;

function init(){
    let resultado = document.getElementById("resultado");
    let siete = document.getElementById("siete");
    let ocho = document.getElementById("ocho");
    let nueve = document.getElementById("nueve");
    let division = document.getElementById("division");
    let cuatro = document.getElementById("cuatro");
    let cinco = document.getElementById("cinco");
    let seis = document.getElementById("seis");
    let multiplicacion = document.getElementById("multiplicacion");
    let uno = document.getElementById("uno");
    let dos = document.getElementById("dos");
    let tres = document.getElementById("tres");
    let resta = document.getElementById("resta");
    let cero = document.getElementById("cero");
    let reset = document.getElementById("reset");
    let igual = document.getElementById("igual");
    let suma = document.getElementById("suma");


    uno.onclick = function(e){
        resultado.textContent = resultado.textContent + "1";
    }
    dos.onclick = function(e){
        resultado.textContent = resultado.textContent + "2";
    }
    tres.onclick = function(e){
        resultado.textContent = resultado.textContent + "3";
    }
    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent + "4";
    }
    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent + "5";
    }
    seis.onclick = function(e){
        resultado.textContent = resultado.textContent + "6";
    }
    siete.onclick = function(e){
        resultado.textContent = resultado.textContent + "7";
    }
    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent + "8";
    }
    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent + "9";
    }
    cero.onclick = function(e){
        resultado.textContent = resultado.textContent + "0";
    }
    reset.onclick = function(e){
        resetear();
    }
    suma.onclick = function(e){
        parteA = resultado.textContent;
        operacion = "+";
        limpiar();
    }
    resta.onclick = function(e){
        parteA = resultado.textContent;
        operacion = "-";
        limpiar();
    }
    multiplicacion.onclick = function(e){
        parteA = resultado.textContent;
        operacion = "*";
        limpiar();
    }
    division.onclick = function(e){
        parteA = resultado.textContent;
        operacion = "/";
        limpiar();
    }
    igual.onclick = function(e){
        parteB = resultado.textContent;
        resolver();
    }
}

function limpiar(){
    resultado.textContent = "";
}

function resetear(){
    resultado.textContent = "";
    parteA = 0;
    parteB = 0;
    operacion = "";
}

function resolver(){
  let res = 0;
  switch(operacion){
    case "+":
      res = parseFloat(parteA) + parseFloat(parteB);
      break;
    case "-":
        res = parseFloat(parteA) - parseFloat(parteB);
        break;
    case "*":
      res = parseFloat(parteA) * parseFloat(parteB);
      break;
    case "/":
      res = parseFloat(parteA) / parseFloat(parteB);
      break;
  }
  resetear();
  resultado.textContent = res;
}