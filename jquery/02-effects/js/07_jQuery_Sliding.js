"use strict";


/* ##### SLIDING ##### */

/**
 * "$(document).ready (callback)" = Executa quando o document e totalmente carregado
 */
$(document).ready (function ()
{
    $("#flip1").click (function ()
    {
        /* "slideDown (speed, callback)" = Exibe e desliza para baixo o elemento */
        $("#panel1").slideDown ();
    });

    $("#flip2").click (function ()
    {
        /* "slideUp (speed, callback)" = desliza para cima e esconde o elemento */
        $("#panel2").slideUp ();
    });

    $("#flip3").click (function ()
    {
        /* "slideToggle (speed, callback)" = Exibe / esconde e desliza para baixo / cima o elemento */
        $("#panel3").slideToggle ();
    });
});
