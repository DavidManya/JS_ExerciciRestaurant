//Fase 1
var bitllet5 = 5;
var bitllet10 = 10;
var bitllet20 = 20;
var bitllet50 = 50;
var bitllet100 = 100;
var bitllet200 = 200;
var bitllet500 = 500;

var plat1 = "";
var plat2 = "";
var plat3 = "";
var plat4 = "";
var plat5 = "";

var preu1 = 0.0;
var preu2 = 0.0;
var preu3 = 0.0;
var preu4 = 0.0;
var preu5 = 0.0;

var ArrayMenu = new Array(plat1, plat2, plat3, plat4, plat5);
var ArrayPreu = new Array(preu1, preu2, preu3, preu4, preu5);
var ArrayMoneda = new Array(bitllet5, bitllet10, bitllet20, bitllet50, bitllet100, bitllet200, bitllet500);

var Euro  = "\u20ac";

var i = 0;

//Fase 2
var numplat = 0;
var prou = 1;
var Tria = new Array();

document.writeln("Introduïrem 5 plats del menú amb el seu preu" + "<br>");
for (i = 0; i < ArrayMenu.length; i++)
{
 numplat = i + 1;
 ArrayMenu[i] = prompt("Introduiu el nom del plat " + numplat,"");
 ArrayPreu[i] = prompt("Ara introduiu el preu del plat" + numplat,"");
}

document.writeln("Heu introduït aquests plats al menú:" + "<br>");
for (i = 0; i < ArrayMenu.length; i++)
{
    document.writeln(ArrayMenu[i] + ' - ' + ArrayPreu[i] + Euro + "<br>");
}

document.writeln("Ara trieu els plats que voleu menjar:" + "<br>");
i = 0;
while (prou > 0)
{
    numplat = i + 1;
    Tria.push(prompt("Escribiu el plat " + numplat,""));
    prou = prompt("Voleu afegir algún plat més? (1:Si / 0:No)","");
}
document.writeln("Heu triat aquests plats:" + "<br>");
for (i = 0; i < Tria.length; i++)
{
    document.writeln(Tria[i] + "<br>");
}

//Fase 3
var nota = 0;
var trobat = true;
var quants = 0;

Tria.forEach(valida);
function valida(value)
{
    for (i = 0; i < ArrayMenu.length; i++)
    {
        trobat = false;
        if (ArrayMenu[i] == value)
        {
            trobat = true;
            nota = parseInt(nota) + parseInt(ArrayPreu[i]);
            break;
        }
    }
    if (!trobat)
    {
        document.writeln("El plat " + value + " no està al menú" + "<br>")
    }
}

if (nota > 0)
{
    document.writeln("El menú us costarà " + nota + Euro + "<br>")
    //Aquí mirem quants bitllets necessitem per pagar
    for (i = 6; i >= 0; i--)
    {
        if (ArrayMoneda[i] <= nota)
        {
            quants = Math.floor(nota / ArrayMoneda[i]);
            document.write("Necessiteu " + quants + " bitllet/s de " + ArrayMoneda[i] + Euro + "<br>");
            nota = nota - quants * ArrayMoneda[i];
        }
    }
    if (nota > 0)
    {
        document.write("I " + nota + " monedes d'" + Euro);
    }
}
