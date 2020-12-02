"use strict";

/* ##### EVENTS ##### */

/**
 * "$(document).ready (callback)" = Executa quando o document e totalmente carregado
 */
$(document).ready (function ()
{
    /* "click ()" = Evento "onclick" : clique do mouse */
    $("p").click (function ()
    {
        /* Mudando propriedades */
        let index = $(this).index ();
        let message = `Clicou no ${index + 1}º parágrafo`;
        $(this).text (message);
    });

    /* "dblclick ()" = Evento "ondoubleclick" : duplo-clique do mouse */
    $("p").dblclick (function ()
    {
        /* Mudando propriedades */
        let index = $(this).index ();
        let message = `Duplo clique no ${index + 1}º parágrafo`;
        $(this).text (message);
    });

    /* "mouseenter ()" = Evento "onmouseenter" : Quando o mouse "entra" no elemento */
    $("#meuCabecalho").mouseenter (function ()
    {
        /* Mudando propriedades */
        $(this).css ("background-color", "azure");
        $(this).css ("color", "blue");
        $(this).text ("Entrou com o mouse no Cabeçalho");
    });

    /* "mouseleave ()" = Evento "onmouseleave" : Quando o mouse "sai" do elemento */
    $("#meuCabecalho").mouseleave (function ()
    {
        /* Mudando propriedades */
        $(this).css ("background-color", "blue");
        $(this).css ("color", "azure");
        $(this).text ("Saiu com o mouse do Cabeçalho");
    });

    let timer = null;
    let seconds = 0;

    /* "mousedown ()" = Evento "onmousedown" : Quando segura o clique do mouse */
    $(".minhaDiv").mousedown (function ()
    {
        /* Mudando propriedades */
        timer = setInterval (function ()
        { seconds++; }, 1000);
        $(this).text ("Segurando...");
    });

    /* "mouseup ()" = Evento "onmouseup" : Quando solta o clique do mouse */
    $(".minhaDiv").mouseup (function ()
    {
        /* Mudando propriedades */
        clearInterval (timer);
        $(this).text (`Soltou depois de ${seconds} segundos!`);
        seconds = 0;
    });

    /* "hover ()" = Evento "onhover" : Combina os eventos "onmouseenter" e "onmouseleave" */
    $("#outroCabecalho").hover 
    (
        /* mouseenter*/    
        function ()
        {
            /* Mudando propriedades */
            $(this).css ("background-color", "#ccc");
            $(this).text ("Entrou...");
        }, 

        /* mouseleave */
        function ()
        {
            /* Mudando propriedades */
            $(this).css ("background-color", "#e8e8e8");
            $(this).text ("Saiu...");
        }
    );

    /* "focus ()" = Evento "onfocus" : Quando "entra" no elemento (input) */
    $("#caixaDeTexto").focus (function ()
    {
        /* Mudando propriedades */
        $(this).css ("background-color", "#e8e8e8");
        $(this).css ("font-weight", "lighter");
    });

    /* "blur ()" = Evento "onblur" : Quando "sai" do elemento (input) */
    $("#caixaDeTexto").blur (function ()
    {
        /* Mudando propriedades */
        $(this).css ("background-color", "#ccc");
        $(this).css ("font-weight", "bolder");
    });

    /* "on (event(s))" = Permite colocar 1 ou mais eventos no (s) elemento (s) */
    $("button").on (
    {
        click: function ()
        {
            /* Mudando propriedades */
            $(this).css ("background-color", "#1648ff");
            $(this).css ("color", "#fff");
            $(this).text ("Click");
        },

        dblclick: function ()
        {
            /* Mudando propriedades */
            $(this).css ("background-color", "#0e8200");
            $(this).css ("color", "#fff");
            $(this).text ("Double Click");
        },

        mousedown: function ()
        {
            /* Mudando propriedades */
            $(this).css ("background-color", "#820000");
            $(this).css ("color", "#fff");
            $(this).text ("Mouse Down");
        },

        mouseup: function ()
        {
            /* Mudando propriedades */
            $(this).css ("background-color", "#ff1414");
            $(this).css ("color", "#fff");
            $(this).text ("Mouse Down");
        }
    });
});