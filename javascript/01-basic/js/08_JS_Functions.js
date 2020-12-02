
/* ===== EXEMPLO DE FUNCOES ===== */

function myFunction ()
{
    console.log ("Função sem parâmetros");
}

function myFunction2 (p1, p2)
{
    console.log ("Função com parâmetros");
    console.log ("Parâmetro 1: " + p1);
    console.log ("Parâmetro 2: " + p2);
}

function myFunction3 (p1, p2, p3)
{
    return p1 * p2 * p3;
}

/* Chamando funcoes */
myFunction ();
myFunction2 (1, 2);
var func = myFunction3 (10, 5, 0.2);

console.log ("Multiplicação: " + func);