/* ===== EXEMPLOS DE UTILIZACAO AJAX XMLHTTPREQUEST ===== */


/**
 * Quando carregar a janela
 */
window.addEventListener ("load", function ()
{
    /* Pegando elemento */
    var div = document.getElementById ("demo");

    /* EVENTO */
    document.getElementById ("btn_load_txt").addEventListener ("click", function ()
    {
        lerArquivo (div, "txt");
    });

    /* EVENTO */
    document.getElementById ("btn_load_xml").addEventListener ("click", function ()
    {
        lerArquivo (div, "xml");
    });
});

/**
 * Funcao que le um arquivo via ajax
 */
function lerArquivo (div, type)
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

        /* "onreadystatechange" = Ocorre quando o "estado" (state) do request muda */
        request.onreadystatechange = function ()
        {
            /* Verificacao */
            if (request.readyState === 4 && request.status === 200)
            {
                if (type === "txt")
                {
                    /* "responseText" = Conteudo da request em formato texto */
                    div.innerHTML = request.responseText;
                }
                else
                {
                    /* "responseXML" = Conteudo da request em formato XML */
                    div.innerHTML = request.responseXML;
                }
            }
        };

        /* "open (method, url, async)" = Abre a conexao para ir ate certa url */
        request.open ("GET", "/files/09_Big_Man_With_A_Gun.txt", true);

        /* "send ()" = Pode ou nao enviar parametros */
        request.send (null);
    } 
    catch (error) 
    {
        div.innerHTML = error;
    }
}