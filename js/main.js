function Adivina() {


    alert("Encuentra el número ganador");
    var N = 0;
    var int = 2;
    var G = 9;
    var C = 0;
    do {
        do {
            let cont = ["Primer", "Segundo", "Tercer"]
            alert(cont[C] + " intento");
            N = parseInt(prompt("Ingrese un número del 0 al 10"));
            if (N >= 0 && N <= 10) {
            } else { alert("Ingrese un número en el rango sugerido") }
        } while (N > 10);
        if (N == G) {
            document.write("Muy bien has encontrado el numero ganador felicidades")
        }
        if (int == 0) {
            document.write("Has perdido el número ganador era: [ " + G + " ]")
        }
        if (N > 9 && N == 10) {
            alert("Estas cerca intenta un número menor")
        }
        if (N >= 7 && N < G) {
            alert("Estas cerca intenta un número mayor")
        }
        C++;
        int--;
    } while (int >= 0 ^ N == G);
}


function MayorEdad() {
    var nombre1 = prompt("Nombre de la primera persona:");
    var edad1 = Number(prompt("Edad de " + nombre1));

    var nombre2 = prompt("Nombre de la segunda persona:");
    var edad2 = Number(prompt("Edad de " + nombre2));

    var nombre3 = prompt("Nombre de la tercera persona:");
    var edad3 = Number(prompt("Edad de " + nombre3));
    var maximo = Math.max(edad1, edad2, edad3);

    if (maximo == edad1) {
        document.write("El mayor es " + nombre1 + " con la edad de " + maximo + " años");
    }
    if (maximo == edad2) {
        document.write("El mayor es " + nombre2 + " con la edad de " + maximo + " años");
    }
    if (maximo == edad3)
        document.write("El mayor es " + nombre3 + " con la edad de " + maximo + " años");
}
function PiedraPapelTijera() {

    var jugados = 0;
    var ganados = 0;
    var perdidos = 0;
    do {
        var jugada = prompt("Escribe \"piedra\", \"papel\" o \"tijera\"");
        var aleatorio = Math.floor((Math.random() * 9) + 1);
        var elige = "";
        if (aleatorio <= 3) {
            elige = "piedra";
        }
        else if (aleatorio <= 6) {
            elige = "papel";
        }
        else {
            elige = "tijera";
        }

        if ((jugada == "piedra") && (elige == "piedra")) {
            alert(jugada + "-" + elige + ": Empate");
        }
        else if ((jugada == "piedra") && (elige == "papel")) {
            alert(jugada + "-" + elige + ": Gana PC");
            perdidos++;
        }
        else if ((jugada == "piedra") && (elige == "tijera")) {
            alert(jugada + "-" + elige + ": Gana Jugador");
            ganados++;
        }
        else if ((jugada == "papel") && (elige == "papel")) {
            alert(jugada + "-" + elige + ": Empate");
        }
        else if ((jugada == "papel") && (elige == "tijera")) {
            alert(jugada + "-" + elige + ": Gana PC");
            perdidos++;
        }
        else if ((jugada == "papel") && (elige == "piedra")) {
            alert(jugada + "-" + elige + ": Gana Jugador");
            ganados++;
        }
        else if ((jugada == "tijera") && (elige == "tijera")) {
            alert(jugada + "-" + elige + ": Empate");
        }
        else if ((jugada == "tijera") && (elige == "piedra")) {
            alert(jugada + "-" + elige + ": Gana PC");
            perdidos++;
        }
        else if ((jugada == "tijera") && (elige == "papel")) {
            alert(jugada + "-" + elige + ": Gana Jugador");
            ganados++;
        }
        jugados++;

    } while (confirm("Jugar de nuevo"));

    document.write("Partidas jugadas: " + jugados + "<br>");
    document.write("Partidas ganadas: " + ganados + "<br>");
    document.write("Partidas perdidas: " + perdidos + "<br>");
    document.write("Partidas empatadas: " + (jugados - ganados - perdidos));
}


function Aleatorio() {
    var numeros = [];
    var e = 50;

    for (let i = 0; i < e; i++) {
        numeros[i] = Math.floor(Math.random() * (1 - 1000)) + 1000;
    }

    for (let i = 0; i < e; i++) {

        document.write("[ " + numeros[i] + " ]" + "<br>");

    }
}

function Notas() {
    var notas = 2;
    var contador = 1;
    let estudiantes = ["Maria", "Luis", "Luz"];
    let Maria = [];
    let Luis = [];
    let Luz = [];
    var nm = 0, nl = 0, nL = 0;

    for (let i = 0; i <= notas; i++) {
        Maria[i] = parseInt(prompt("Ingresé la " + contador + " para " + estudiantes[0]));
        Luis[i] = parseInt(prompt("Ingresé la " + contador + " para " + estudiantes[1]));
        Luz[i] = parseInt(prompt("Ingresé la " + contador + " para " + estudiantes[2]));
        contador++;
    }
    for (let i = 0; i <= notas; i++) {

        nm = parseInt(nm / 3 + Maria[i]);
    }
    if (nm >= 4) {
        document.write("Maria aprobó con una nota de: [ " + nm + " ]" + "<br>")
    } else {
        (nm < 4)
        document.write("Maria reprobó con una nota de: [ " + nm + " ]" + "<br>")
    }



    for (let i = 0; i <= notas; i++) {

        nl = parseInt(nl / 3 + Luis[i]);
    }
    if (nl >= 4) {
        document.write("Luis aprobó con una nota de: [ " + nl + " ]" + "<br>")
    } else {
        (nl < 4)
        document.write("Luis reprobó con una nota de: [ " + nl + " ]" + "<br>")
    }



    for (let i = 0; i <= notas; i++) {

        nL = parseInt(nL / 3 + Luz[i]);
    }
    if (nL >= 4) {
        document.write("Luz aprobó con una nota de: [ " + nL + " ]" + "<br>")
    } else {
        (nL < 4)
        document.write("Luz reprobó con una nota de: [ " + nL + " ]" + "<br>")
    }
}
function Factura() {
    var cliente = "", nomProduc = "";
    var id = 0, precio = 0, cantidad = 0, telefono = 0, valor = 0, iva = 0, Total;
    let fecha = Date();
    cliente = prompt("Ingrese el nombre del cliente");
    id = parseInt(prompt("Ingrese el número de identificación"));
    telefono = parseInt(prompt("Ingrese un número de telefono"))

    nomProduc = prompt("Ingrese el nombre del producto");
    precio = parseInt(prompt("Ingrese el precio unitario del producto"))
    cantidad = parseInt(prompt("Ingrese la cantidad de productos"))
    valor = precio * cantidad;
    iva = valor * 0.19;
    Total = valor + iva;
  document.write("*******************FACTURA DE VENTA*******************" +"<br>")
  document.write(fecha + "<br>")
  document.write("Nombre: " + cliente + "____________________" + "Identificación: " + id + "<br>")
  document.write("Teléfono: " + telefono + "<br>")
  document.write("******************************************************" + "<br>")
  document.write("Cantidad----------------Descripción---------------Valor" + "<br>")
  document.write(+cantidad + "------------------------" + nomProduc + "------------------$ " + valor + "<br>")
  document.write("<br>")
  document.write("<br>")
  document.write("<br>")
  document.write("<br>")
  document.write("<br>")
    document.write("IVA 19% ---------------------------------------- $ " + iva + "<br>")
    document.write("Total --------------------------------------------- $ " + Total + "<br>")
    }
function Cilindro(){
    alert("Encuentra el volumen de un cilindro")
    var base = parseInt(prompt("Ingresa el área de la base del cilindro"));
    var altura = parseInt(prompt("Ingresa la altura del cilindro"));
var ab =parseFloat(base*base*Math.PI);
var v =parseInt(ab*altura);
   
document.write("El volumen del cilindro es: "+v+" cm3")
}

function Esfera(){
    alert("Encuentra el volumen de una esfera")
    var radio = parseInt(prompt("Ingresa el radio de la esfera"));
   
var v =parseFloat(radio*radio*radio*4);
var r =parseInt(v*Math.PI/3);

document.write("El volumen de la esfera es: "+r+" cm3")
}




