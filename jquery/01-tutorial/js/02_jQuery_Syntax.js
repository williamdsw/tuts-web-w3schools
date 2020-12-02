"use strict";


/* ##### SYNTAX ##### */

/**
 * "$(document).ready (callback)" = Executa quando o document e totalmente carregado
 */
$(document).ready (function ()
{
    $("#exemplo_1").text ("Colocando texto usando $(document).ready ... ");
});

/**
 * "$(callback)" = Forma reduzida do "$(document).ready (callback)"
 */
$(function ()
{
    $("#exemplo_2").text ("Colocando texto usando $() ... ");
});