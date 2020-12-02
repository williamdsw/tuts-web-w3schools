/* ===== EXEMPLO DE COMPARACOES ===== */

window.onload = function (e) 
{
    /* Pegando elemento */
    var textarea = document.getElementById ("txt_codigo");

    /* Concatenando valores */
    textarea.value += " ===== COMPARAÇÕES ===== ";

    textarea.value += "\n == : igual a ";
    textarea.value += "\n >= : maior ou igual ";
    textarea.value += "\n <= : menor ou igual ";
    textarea.value += "\n > : maior que ";
    textarea.value += "\n < : menor que ";
    textarea.value += "\n != : diferente de ";
    textarea.value += "\n === : igual em valor e tipo ";
    textarea.value += "\n !== : diferente em valor ou tipo ";

    textarea.value += "\n\n ===== EXEMPLOS =====\n ";

    /* Exemplos */
    if (1 == 1) { textarea.value += "\n 1 é igual a 1 "; }
    if (10 >= 1) { textarea.value += "\n 10 é maior ou igual a 1 "; }
    if (0.5 <= 1) { textarea.value += "\n 0.5 é menor ou igual a 1 "; }
    if (234 > 100) { textarea.value += "\n 234 é maior que 100 "; }
    if (234 < 500) { textarea.value += "\n 234 é menor que 500 "; }
    if ("Meth" != "Math") { textarea.value += "\n Meth é diferente de Math "; }
    if ("Math" === "Math") { textarea.value += "\n Math é igual a Math em valor e tipo "; }
    if ("Math" !== 300) { textarea.value += "\n Math é diferente de 300 em valor e tipo "; }

    textarea.value += "\n\n ===== OPERADORES LÓGICOS =====\n ";

    textarea.value += "\n && : E ";
    textarea.value += "\n || : OU ";
    textarea.value += "\n ! : NÃO ";

    textarea.value += "\n\n ===== EXEMPLOS =====\n ";

    /* Exemplos */
    if (1 == 1 && "Math" == "Math") { textarea.value += "\n 1 é igual a 1 E Math é igual a Math "; }
    if (1 < 0.5 || 100 != 99) { textarea.value += "\n 1 é menor que 0.5 OU 100 é diferente de 99 "; }
    if (!(100 > 100)) { textarea.value += "\n 100 não é maior que 100, mas negando é true "; }

    textarea.value += "\n\n ===== OPERADOR TERNÁRIO =====\n ";

    textarea.value += "\n variavel = (condicao ? valor : valor) ";

    textarea.value += "\n\n ===== EXEMPLO =====\n ";

    /* Exemplos */
    textarea.value += (18 >= 18 ? "\n Já pode dirigir utilizando ternário" : "\n Não pode dirigir utilizando ternário");
};