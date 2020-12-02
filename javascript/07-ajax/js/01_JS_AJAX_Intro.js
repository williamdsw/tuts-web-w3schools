/* ===== EXEMPLOS DE UTILIZACAO AJAX ===== */


/**
 * Quando carregar a janela
 */
window.addEventListener ("load", function ()
{
    /* Pegando elemento */
    var div = document.getElementById ("demo");

    /* EVENTO */
    document.getElementById ("btn_load").addEventListener ("click", function ()
    {
        lerArquivo (div);
    });
});

/**
 * Funcao que le um arquivo via ajax
 */
function lerArquivo (div)
{
    try 
    {
        /* Cria novo XMLHttpRequest */
        var request = new XMLHttpRequest ();

        /* "onreadystatechange" = Ocorre quando o "estado" (state) do request muda */
        request.onreadystatechange = function ()
        {
            /* Verificacao */
            if (request.readyState === 4 && request.status === 200)
            {
                /* "responseText" = Conteudo da request ... */
                div.innerHTML = request.responseText;
            }
        };

        /* "open (method, url, async)" = Abre a conexao para ir ate certa url */
        request.open ("GET", "../files/09_Big_Man_With_A_Gun.txt", true);

        /* "send ()" = Pode ou nao enviar parametros */
        request.send (null);
    } 
    catch (error) 
    {
        div.innerHTML = error;
    }
}