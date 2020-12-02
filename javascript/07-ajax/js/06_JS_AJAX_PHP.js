/* ===== EXEMPLOS DE UTILIZACAO AJAX COM PHP ===== */


/**
 * Quando carregar a janela
 */
window.addEventListener ("load", function ()
{
    /* Evento onkeyup */
    document.getElementById ("txt_banda").addEventListener ("keyup", function ()
    {
        /* Pega elemento */
        var span_sugestao = document.getElementById ("span_sugestao");

        if (this.value.length === 0)
        {
            span_sugestao.innerHTML = "";
        }
        else 
        {
            var request = new XMLHttpRequest ();

            request.onreadystatechange = function ()
            {
                if (request.readyState === 4 && request.status === 200)
                {
                    span_sugestao.innerHTML = this.responseText;
                }
            };

            request.open ("GET", "/php/06_JS_AJAX_PHP?palavra=".concat (this.value), true);
            request.send ();
        }
    });
});