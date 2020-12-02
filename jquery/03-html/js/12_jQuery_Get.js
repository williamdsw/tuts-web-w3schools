"use strict";


/* ##### GET ##### */

/**
 * "$(document).ready (callback)" = Executa quando o document e totalmente carregado
 */
$(document).ready (function ()
{
    /* Elementos */
    let minhaDiv = $("#minhaDiv");
    let meuParagrafo = $("#meuParagrafo");
    let inputTeste = $("#inputTeste");
    let btnText = $("#btnText");
    let btnHtml = $("#btnHtml");
    let btnVal = $("#btnVal");
    let btnAttr = $("#btnAttr");
    let btnProp = $("#btnProp");
    let textarea = $("textarea");

    
    /* Evento */
    btnText.on ("click", function ()
    {
        /* "$().text ()" = Retorna o texto que esta dentro do elemento */
        let text = "\n" + minhaDiv.text () + "\n";
        let val = textarea.val ();
        val += text;
        textarea.val (val);
    });

    /* Evento */
    btnHtml.on ("click", function ()
    {
        /* "$().html ()" = Retorna o conteudo HTML que esta dentro do elemento */
        let html = "\n" + meuParagrafo.html () + "\n";
        let val = textarea.val ();
        val += html;
        textarea.val (val);
    });

    /* Evento */
    btnVal.on ("click", function ()
    {
        /* "$().val ()" = Retorna o valor em texto do input / select / textarea etc */
        let inputVal = "\n" + inputTeste.val () + "\n";
        let val = textarea.val ();
        val += inputVal;
        textarea.val (val);
    });

    /* Evento */
    btnAttr.on ("click", function ()
    {
        /* "$().attr ("attribute")" = Retorna o valor do atributo informado (parecido com prop ()) */
        let attrs = "";
        attrs += "\n".concat ("type : ").concat (inputTeste.attr ("type"));
        attrs += "\n".concat ("id : ").concat (inputTeste.attr ("id"));
        attrs += "\n".concat ("minlength : ").concat (inputTeste.attr ("minlength"));
        attrs += "\n".concat ("maxlength : ").concat (inputTeste.attr ("maxlength"));
        attrs += "\n".concat ("value : ").concat (inputTeste.attr ("value"));
        let val = textarea.val ();
        val += attrs;
        textarea.val (val);
    });

    /* Evento */
    btnProp.on ("click", function ()
    {
        /* "$().prop ("property")" = Retorna o valor da propriedade informada (parecido com attr ()) */
        let props = "";
        props += "\n".concat ("type : ").concat (inputTeste.prop ("type"));
        props += "\n".concat ("id : ").concat (inputTeste.prop ("id"));
        props += "\n".concat ("minlength : ").concat (inputTeste.prop ("minlength"));
        props += "\n".concat ("maxlength : ").concat (inputTeste.prop ("maxlength"));
        props += "\n".concat ("value : ").concat (inputTeste.prop ("value"));
        let val = textarea.val ();
        val += props;
        textarea.val (val);
    });
});