"use strict";

/* ##### CHAINING ##### */

/**
 * "$(document).ready (callback)" = Executa quando o document e totalmente carregado
 */
$(document).ready (function ()
{
    /* Inicio da animacao */
    $("#btnChaining").on ("click", function ()
    {
        /* Tecnica de "chaining" = Chamar funcoes uma depois da outra */
        $(".box").css ("background-color", "red").slideUp ("slow").slideDown (1000)
                 .fadeOut ("slow").fadeIn ("fast").fadeTo ("slow", 0.1)
                 .css ("width", "20em");
    });
});
