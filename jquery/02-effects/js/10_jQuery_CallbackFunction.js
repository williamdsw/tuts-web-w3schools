"use strict";

/* ##### CALLBACK FUNCTION ##### */

/**
 * "$(document).ready (callback)" = Executa quando o document e totalmente carregado
 */
$(document).ready (function ()
{
    /* Inicio da animacao */
    $("#btnToggle").on ("click", function ()
    {
        /* funcao de callback para executar comandos depois da animacao */
        $(".box").toggle ("slow", function ()
        {
            if ($(this).css ("display") === "block")
            {
                $("p").text ("A caixa apareceu!");
            }
            else 
            {
                $("p").text ("A caixa está escondida!");
            }
        });
    });
});
