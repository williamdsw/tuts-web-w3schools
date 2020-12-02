/* ===== EXEMPLO DE DATES ===== */

window.onload = function (e)
{
    /* Exemplo de Dates */
    var today = new Date ();
    var birthday = new Date (1994, 9, 2, 19, 15, 10, 10);

    /* "toUTCString ()" = Retorna a data no formato UTC */
    var toUTCString = today.toUTCString ();

    /* " toDateString ()" = Retorna a data em um formato mais simples  */
    var toDateString = today.toDateString ();

    /* Printando */
    console.log ("today = " + today);
    console.log ("birthday = " + birthday);
    console.log ("toUTCString = " + toUTCString);
    console.log ("toDateString = " + toDateString);
};
