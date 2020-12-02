/* ===== EXEMPLO DE METODOS "SET" DE DATE ===== */

window.onload = function (e) 
{
    /* Exemplo de Date */
    var aniversario = new Date ();

    /* Exemplo de funcoes */
    aniversario.setFullYear ("1994");
    aniversario.setHours ("19");
    aniversario.setMilliseconds ("666");
    aniversario.setMinutes ("15");
    aniversario.setMonth ("9");
    aniversario.setSeconds ("10");
    /* UTC... */

    /* Printando */
    console.log ("aniversario = " + aniversario);
};