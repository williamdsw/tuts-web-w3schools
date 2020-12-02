/* ===== EXEMPLOS DE ANIMACAO CSS DO DOM ===== */

/**
 * Funcao que executa uma animacao
 */
function Mover ()
{
    /* Pegando elemento */
    var animate = document.getElementById ("animate");

    /* Posicao inicial */
    var position = 0;

    /* Pega identificacao do timer... */
    var id = setInterval (frame, 5);

    function frame ()
    {
        /* Caso chegar na posicao limite, cancela timer */
        if (position == 350)
        {
            clearInterval (id);
        }
        else
        {
            position++;

            /* Nova posicao */
            animate.style.top = position + "px";
            animate.style.left = position + "px";
        }
    }
}

window.onload = function ()
{
    document.getElementById ("btn_animate").addEventListener ("click", function ()
    {
        Mover ();
    });
}