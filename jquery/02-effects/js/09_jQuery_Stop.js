"use strict";

/* ##### STOP ##### */

/**
 * "$(document).ready (callback)" = Executa quando o document e totalmente carregado
 */
$(document).ready (function ()
{
    /* Timer e elementos */
    let timerID = null;
    let box = $(".box");
    let span = $("span");

    /* Coloca altura / largura como texto */
    span.text (box.width () + " x " + box.height ());

    /* Inicio da animacao */
    $("#btnStartAnimation").on ("click", function ()
    {
        /* timer */
        timerID = setInterval (function ()
        {
            /* Acrescenta 2em na altura / largura a cada segundo */
            box.animate ({ height: "+=2em", width: "+=2em" });

            /* Coloca altura / largura como texto */
            span.text (box.width () + " x " + box.height ());

            /* Termina animacao */
            if (box.height () >= 500)
            {
                clearInterval (timerID);
            }
        }, 1000);
    });

    /* Cancelamento da animacao */
    $("#btnStopAnimation").on ("click", function ()
    {
        /* Cancela timer  */
        clearInterval (timerID);

        /* "stop (stopAll, goToEnd)" = Para de excutar uma animacao antes dela terminar */
        box.stop ();
    });
});
