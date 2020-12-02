/* ===== EXEMPLOS DE DEBUGGING (DEBUGAR) ===== */

/* "debug" = E o ato de procurar e corrigir bugs */

window.onload = function ()
{
    /* Exemplo */
    var a = 1;
    var b = 2;
    var c = a + b;

    /* Primeira forma de debug */
    console.log (c);

    /* ""debugger" = Segunda forma de debug, ira ativar o debug caso o navegador tiver */
    debugger;

    /* Pegando elemento */
    var textarea = document.getElementById ("txt_codigo");

    /* Concatenando valores */
    textarea.value += "\n a : ".concat (a);
    textarea.value += "\n b : ".concat (b);
    textarea.value += "\n c = a + b : ".concat (c);
}