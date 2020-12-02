/* ===== EXEMPLO DE DATES ===== */

window.onload = function (e)
{
    /* Exemplo de Dates */
    /* --- Instancia padrao --- */
    var padrao = new Date ();

    /* --- Padrao ISO completo --- */
    var ISO_completo = new Date ("1994-10-02");

    /* --- Padrao ISO com mes e ano --- */
    var ISO_mes_ano = new Date ("1994-11");

    /* --- Padrao ISO apenas ano --- */
    var ISO_ano = new Date ("1994");

    /* --- Padrao ISO data e hora --- */
    var ISO_date_time = new Date ("1994-10-02T19:15:10Z");

    /* --- Formato curto para data --- */
    var short_date = new Date ("10-02-1994");

    /* --- Formato "longo" para data --- */
    var long_date = new Date ("October 2 1994");

    /* --- "Date.parse (str)" = Converte data em milissegundos --- */
    var milissegundos = Date.parse ("1994-10-02");


    /* Printando */
    console.log ("padrao = " + padrao);
    console.log ("ISO_completo = " + ISO_completo);
    console.log ("ISO_mes_ano = " + ISO_mes_ano);
    console.log ("ISO_ano = " + ISO_ano);
    console.log ("ISO_date_time = " + ISO_date_time);
    console.log ("short_date = " + short_date);
    console.log ("long_date = " + long_date);
    console.log ("milissegundos = " + milissegundos);
};