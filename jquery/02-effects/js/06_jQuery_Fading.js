"use strict";


/* ##### FADING ##### */

/**
 * "$(document).ready (callback)" = Executa quando o document e totalmente carregado
 */
$(document).ready (function ()
{
    /* Pegando elementos */
    let divRed = document.getElementsByClassName ("box")[0];
    let divBlue = document.getElementsByClassName ("box")[1];
    let divGreen = document.getElementsByClassName ("box")[2];
    let divBlack = document.getElementsByClassName ("box")[3];
    let divYellow = document.getElementsByClassName ("box")[4];
    let divPink = document.getElementsByClassName ("box")[5];

    /* Evento */
    $("#btnFadeIn").on ("click", function ()
    {
        /* "fadeIn (speed, callback)" = Exibe o(s) elemento(s) de acordo com a opacidade e velocidade */
        $(divRed).fadeIn ();
        $(divBlue).fadeIn ("fast");
        $(divGreen).fadeIn ("slow");
        $(divBlack).fadeIn (1000);
        $(divYellow).fadeIn (2000);
        $(divPink).fadeIn (3000);
    });

    /* Evento */
    $("#btnFadeOut").on ("click", function ()
    {
        /* "fadeOut (speed, callback)" = Esconde o(s) elemento(s) de acordo com a opacidade e velocidade */
        $(divRed).fadeOut ();
        $(divBlue).fadeOut ("fast");
        $(divGreen).fadeOut ("slow");
        $(divBlack).fadeOut (1000);
        $(divYellow).fadeOut (2000);
        $(divPink).fadeOut (3000);
    });

    /* Evento */
    $("#btnFadeToggle").on ("click", function ()
    {
        /* "fadeOut (speed, callback)" = Exibe / Esconde o(s) elemento(s) de acordo com a opacidade e velocidade */
        $(divRed).fadeToggle ();
        $(divBlue).fadeToggle ("fast");
        $(divGreen).fadeToggle ("slow");
        $(divBlack).fadeToggle (1000);
        $(divYellow).fadeToggle (2000);
        $(divPink).fadeToggle (3000);
    });

    /* Evento */
    $("#btnFadeTo").on ("click", function ()
    {
        /* "fadeOut (speed, callback)" = Muda a opacidade do objeto de acordo com o valor da 
         *                               mesma e a velocidade */
        $(divRed).fadeTo ("slow", 0.1);
        $(divBlue).fadeTo ("slow", 0.2);
        $(divGreen).fadeTo ("slow", 0.3);
        $(divBlack).fadeTo ("fast", 0.4);
        $(divYellow).fadeTo ("fast", 0.5);
        $(divPink).fadeTo ("fast", 0.6);
    });
});
