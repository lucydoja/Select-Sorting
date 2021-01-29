window.onload = function () {
 
//Array de iconos y numeros
//  var nombres = ["rombo", "espada", "trebol", "corazon"]
    var iconos = ["\u2666", "\u2660", "\u2663", "\u2665"];
    var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];


// Ubicacion donde voy a poner mis cartas cuando se generen y botones
    const ubiAceptar = document.getElementById("btnAceptar");
    const ubiOrdenar = document.getElementById("btnOrdenar");
    let ubiCartas = document.querySelector("#cartas");
    var numCartas = [];

// CLICK A ACEPTAR
    ubiAceptar.addEventListener("click", function () {

//Cuantas cartas me pide y reset de espacio donde van las cartas
        numCartas = [];
        var cantidadCartas = document.getElementById("input1").value;
        ubiCartas.innerHTML = " ";
        
        for (let i = 0; i < cantidadCartas; i++) {

//Generar las cartas
            let divi = document.createElement("DIV");
            divi.innerHTML = "<div class='icono1'></div><div class='numero'></div><div class='icono2'></div>";
            divi.classList.add("card");
            ubiCartas.appendChild(divi);

//Numero y simbolos random
            var randomCard = Math.floor(Math.random() * 4);
            var random = Math.floor(Math.random() * 13);
            numCartas.push(random);
            
//Ubicacion de cosas iconos y numeros
            var ubiIcono1 = document.getElementsByClassName("icono1");
            var ubiNumero = document.getElementsByClassName("numero");
            var ubiIcono2 = document.getElementsByClassName("icono2");

// if donde asigno segun icono que me salio en random
            if (randomCard == 0) {
                var simbolo1 = iconos[randomCard];
                ubiIcono1[i].innerHTML = simbolo1;
                var numero = numeros[random];
                ubiNumero[i].innerHTML = numero;
                var simbolo2 = iconos[randomCard];
                ubiIcono2[i].innerHTML = simbolo2;
                ubiIcono1[i].style.color = "red";
                ubiIcono2[i].style.color = "red";
                ubiNumero[i].style.color = "red";
            }

            else if (randomCard == 1) {
                var simbolo1 = iconos[randomCard];
                ubiIcono1[i].innerHTML = simbolo1;
                var numero = numeros[random];
                ubiNumero[i].innerHTML = numero;
                var simbolo2 = iconos[randomCard];
                ubiIcono2[i].innerHTML = simbolo2;
            }

            else if (randomCard == 2) {
                var simbolo1 = iconos[randomCard];
                ubiIcono1[i].innerHTML = simbolo1;
                var numero = numeros[random];
                ubiNumero[i].innerHTML = numero;
                var simbolo2 = iconos[randomCard];
                ubiIcono2[i].innerHTML = simbolo2;
            }

            else if (randomCard == 3) {
                var simbolo1 = iconos[randomCard];
                ubiIcono1[i].innerHTML = simbolo1;
                var numero = numeros[random];
                ubiNumero[i].innerHTML = numero;
                var simbolo2 = iconos[randomCard];
                ubiIcono2[i].innerHTML = simbolo2;
                ubiIcono1[i].style.color = "red";
                ubiIcono2[i].style.color = "red";
                ubiNumero[i].style.color = "red";
            }
        }
    });

// CLICK A ORDENAR
    ubiOrdenar.addEventListener("click", function () {
        SelectSort(numCartas);
    });

// BUBBLE SORTING
    function SelectSort(arr) {
        
        let inicio = 0;

        while (inicio < arr.length) {

            for (let i = inicio+1; i < arr.length; i++) {
                
                if (arr[inicio] > arr[i]) {
                    let vacio = arr[inicio];
                    arr[inicio] = arr[i];
                    arr[i] = vacio;

// Aqui se van acomodando los divs de la carta
                    let vacio2 = ubiCartas.children[inicio].innerHTML;
                    ubiCartas.children[inicio].innerHTML = ubiCartas.children[i].innerHTML;
                    ubiCartas.children[i].innerHTML = vacio2;
                
                }
                
            }
            inicio++;
        }
    }
}