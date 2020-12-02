"use strict";

/* ##### SELECTORS ##### */

/**
 * "$(document).ready (callback)" = Executa quando o document e totalmente carregado
 */
$(document).ready (function ()
{
    /* Pegando elementos */
    let button1 = $("button[name=botoes]")[0];
    let button2 = $("button[name=botoes]")[1];
    let button3 = $("button[name=botoes]")[2];
    let button4 = $("button[name=botoes]")[3];
    let button5 = $("button[name=botoes]")[4];

    /* Evento */
    $(button1).click (function ()
    {
        /* Seletor por TAG */
        $("p").css ("background-color", "green");
        $("p").css ("color", "white");
    });

    /* Evento */
    $(button2).click (function ()
    {
        /* Seletor por ID */
        $("#meuCabecalho").text ("Cabeçalho modificado pelo Botão");
    });

    /* Evento */
    $(button3).click (function ()
    {
        /* Seletor por CLASS */
        $(".minhaDiv").css ("font-size", "20px");
    });

    /* Evento */
    $(button4).click (function ()
    {
        /* Seletor por NAME */
        $("button[name=botoes]").css ("border", "1px solid white");
        $("button[name=botoes]").css ("background-color", "blue");
        $("button[name=botoes]").css ("color", "white");
        $("button[name=botoes]").css ("height", "40px");
        $("button[name=botoes]").css ("width", "100px");
    });

    /* Evento */
    $(button5).click (function ()
    {
        /* Seletor de TODOS elementos */
        let length = $("*").length;

        alert ("Existem " + length + " elementos na tela !");
    });
});