/* ===== EXEMPLOS DE DEFINICAO DE FUNCOES ===== */

/* ### Primeiro tipo de declaracao ### */
function PrimeiroExemplo (param1, param2)
{
    return param1 * param2;
}


/* ### Segundo exemplo de declaracao de funcao ### */
var SegundoExemplo = function (param1, param2)
{
    return param1 * param2;
};


/* ### Terceiro exemplo de declaracao de funcao ### */
var TerceiroExemplo = new Function ("param1", "param2", "return param1 / param2");


/* ### Quarto exemplo de funcao que se auto invoca ### */
(function ()
{
    console.log ("Função que se auto invocou");
})();


/* ### Quinto exemplo: funcao com propriedades ### */
function QuintoExemplo (param1, param2, param3, param4, param5)
{
    return arguments.length;
}

/* ### Diferenca entre declaracao ES5 e ES6 ### */
/* ES5 */
var ExemploES5 = function (a, b)
{
    return a * b
};

/* ES6 */
var ExemploES6 = (a, b) =>
{
    return a * b
};



window.onload = function ()
{
    /* Pega elemento */
    var div = document.getElementsByTagName ("div")[0];

    /* Concatena conteudo */
    div.innerHTML += "<p>Retorno da primeira função : ".concat (PrimeiroExemplo (10, 10)).concat (" </p>");
    div.innerHTML += "<p>Retorno da segunda função : ".concat (SegundoExemplo (5, 10)).concat (" </p>");
    div.innerHTML += "<p>Retorno da terceira função : ".concat (TerceiroExemplo (10, 2)).concat (" </p>");
    div.innerHTML += "<p>Quantos argumentos existem na quinta funcao : ".concat (QuintoExemplo (1, 2, 3, 4, 5)).concat (" </p>");
    div.innerHTML += "<p>funcao .toString () : ".concat (function () {}.toString ()).concat (" </p>");
};
