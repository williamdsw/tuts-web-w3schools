"use strict";

/* ##### ANIMATE ##### */

/**
 * "$(document).ready (callback)" = Executa quando o document e totalmente carregado
 */
$(document).ready (function ()
{
    $("#btnSimpleAnimation").on ("click", function ()
    {
        /* "animate ({css_param}, speed, callback)" = Anima propriedades CSS definidas,
         *                                            com velocidade opcional e funcao callback opcional */
        $(".box").animate (
        {
            left: "100px",
            width: "15em",
            height: "15em",
            opacity: "0.7"
        });
    });

    $("#btnMultipleAnimation").on ("click", function ()
    {
        let box = $(".box");

        /* Exemplo de diversas animacoes (queue) */
        box.animate ({ left: "100px", top: "100px", width: "+=5em", heigth:"+=5em" }, "slow");
        box.animate ({ left: "300px", width: "+=10em" }, "slow");
        box.animate ({ top: "30px", height: "+=5em", opacity: "0.2" }, "slow");
    });
});
