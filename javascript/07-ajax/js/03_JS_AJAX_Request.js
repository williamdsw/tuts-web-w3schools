/* ===== EXEMPLOS DE UTILIZACAO AJAX REQUEST ===== */


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

        /* Verificacao para IE6 < */
        if (window.XMLHttpRequest)
        {
            request = new XMLHttpRequest ();
        }
        else
        {
            request = new ActiveXObject ("Microsoft.XMLHTTP");
        }
        /* "open (method, url, async)" = Abre a conexao para ir ate certa url */
        request.open ("GET", "/files/09_Big_Man_With_A_Gun.txt", false);

        /* "send ()" = Pode ou nao enviar parametros */
        request.send (null);

        /* "responseText" = Conteudo da request em formato texto */
        div.innerHTML = request.responseText;
    } 
    catch (error) 
    {
        div.innerHTML = error;
    }
}