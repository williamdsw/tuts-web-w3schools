"use strict";


/* ##### HIDE / SHOW / TOGGLE ##### */

/**
 * "$(document).ready (callback)" = Executa quando o document e totalmente carregado
 */
$(document).ready (function ()
{
    $("#btnShow").on ("click", function ()
    {
        /* "show (speed, callback)" = Exibe o elemento com base na velocidade em milisegundos, 
         *                            e talvez execute uma funcao */
        $(".box").show (500);
    });

    $("#btnHide").on ("click", function ()
    {
        /* "hide (speed, callback)" = Esconde o elemento com base na velocidade em milisegundos, 
         *                            e talvez execute uma funcao */
        $(".box").hide (1000);
    });

    $("#btnToggle").on ("click", function ()
    {
        /* "toggle (speed, callback)" = Exibe / Esconde o elemento com base na velocidade em milisegundos, 
         *                              e talvez execute uma funcao */
        $(".box").toggle (2000);
    });
});
