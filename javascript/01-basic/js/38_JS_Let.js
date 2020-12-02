/* ===== EXEMPLOS DE 'LET' ===== */

/* "let" = Permite controlar variaveis dependendo do escopo */

/* global */
var x = 100;

/* escopo local de LET */
function Modificar ()
{
    let x = 666;

    return x;
}

window.onload = function ()
{
    /* Pegando elemento */
    var textarea = document.getElementById ("txt_codigo");

    /* Concatenando valores */
    textarea.value += "\n (GLOBAL) var x = ".concat (x);
    textarea.value += "\n (LOCAL)  let x = ".concat (Modificar ());

    /* Exemplo VAR - FOR */
    var contador_var = 0;
    textarea.value += "\n\n EXEMPLO DE VAR - LOOP ";
    textarea.value += "\n Valor Inicial = ".concat (contador_var);

    /* Aqui sera modificado o valor */
    for (var contador_var = 0; contador_var < 10; contador_var++)  {}

    textarea.value += "\n Valor Final = ".concat (contador_var);

    /* Exemplo LET - FOR */
    let contador_let = 0;
    textarea.value += "\n\n EXEMPLO DE LET - LOOP ";
    textarea.value += "\n Valor Inicial = ".concat (contador_let);

    /* Aqui nao sera modificado o valor */
    for (let contador_let = 0; contador_let < 10; contador_let++)  {}

    textarea.value += "\n Valor Final = ".concat (contador_let);
};