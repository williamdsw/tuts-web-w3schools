/* ===== EXEMPLO DE METODOS "GET" DE DATE ===== */

window.onload = function (e)
{
    /* Exemplo de Date */
    var hoje = new Date ();
    
    /* Exemplo de funcoes */
    var data = hoje.getDate ();                             /* "getDate" = Retorna a data  */
    var dia = hoje.getDay ();                               /* "getDay" = Retorna o dia (0-6) */
    var ano = hoje.getFullYear ();                          /* "getFullYear" = Retorna o ano (YYYY)  */
    var horas = hoje.getHours ();                           /* "getHours" = Retorna a hora */
    var milissegundos = hoje.getMilliseconds ();            /* "getMilliseconds" = Retorna a data em milissegundos */
    var minutos = hoje.getMinutes ();                       /* "getMinutes" = Retorna os minutos  */
    var mes = hoje.getMonth ();                             /* "getMonth" = Retorna o mes */
    var segundos = hoje.getSeconds ();                      /* "getSeconds" = Retorna os segundos */
    var time = hoje.getTime ();                             /* "getTime" = Retorna os mili desde 1970 */
    var timezoneOffset = hoje.getTimezoneOffset ();         /* "getTimezoneOffset" = Retorna a diferenca UTC e local em minutos  */
    var data_UTC = hoje.getUTCDate ();                      /* "getUTCDate" = Retorna a data no formato UTC */
    var dia_UTC = hoje.getUTCDay ();                        /* "getUTCDay" = Retorna o dia no formato UTC */
    var ano_UTC = hoje.getUTCFullYear ();                   /* "getUTCFullYear" = Retorna o ano no formato UTC  */
    var horas_UTC = hoje.getUTCHours ();                    /* "getUTCHours" = Retorna a hora no formato UTC */
    var milissegundos_UTC = hoje.getUTCMilliseconds ();     /* "getUTCMilliseconds" = Retorna os milis no formato UTC  */
    var minutos_UTC = hoje.getUTCMinutes ();                /* "getUTCMinutes" = Retorna os minutos no formato UTC  */
    var mes_UTC = hoje.getUTCMonth ();                      /* "getUTCMonth" = Retorna o mes no formato UTC */
    var segundos_UTC = hoje.getUTCSeconds ();               /* "getUTCSeconds" = Retorna os segundos no formato UTC */


    /* Printando */
    console.log ("hoje = " + hoje);
    console.log ("data = " + data);
    console.log ("dia = " + dia);
    console.log ("ano = " + ano);
    console.log ("horas = " + horas);
    console.log ("milissegundos = " + milissegundos);
    console.log ("minutos = " + minutos);
    console.log ("mes = " + mes);
    console.log ("segundos = " + segundos);
    console.log ("time = " + time);
    console.log ("timezoneOffset = " + timezoneOffset);
    console.log ("data_UTC = " + data_UTC);
    console.log ("dia_UTC = " + dia_UTC);
    console.log ("ano_UTC = " + ano_UTC);
    console.log ("horas_UTC = " + horas_UTC);
    console.log ("milissegundos_UTC = " + milissegundos_UTC);
    console.log ("minutos_UTC = " + minutos_UTC);
    console.log ("mes_UTC = " + mes_UTC);
    console.log ("segundos_UTC = " + segundos_UTC);
};