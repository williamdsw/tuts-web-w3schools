/* ===== EXEMPLO DE ESCOPO DE VARIAVEIS ===== */

/* "global" = pode ser usada em qualquer lugar */
var global = "Variável Global";

window.onload = function ()
{
    /* "local" = pode ser usada so no escopo da funcao */
    var local = "Variável Local";

    /* Pegando elemento */
    var textarea = document.getElementById ("txt_codigo");

    /* Concatenando valores */
    textarea.value += "===== ESCOPO DE VARIAVEIS =====";
    textarea.value += "\n GLOBAL = ".concat (global);
    textarea.value += "\n LOCAL = ".concat (local);
};