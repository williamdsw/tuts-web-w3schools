/* ===== EXEMPLOS DE UTILIZACAO RESPONSE DE XMLHTTPREQUEST ===== */


/**
 * Quando carregar a janela
 */
window.addEventListener ("load", function ()
{
    /* Pegando elemento */
    var demo_param = document.getElementById ("demo_param");
    var demo_content = document.getElementById ("demo_content");

    /* EVENTO */
    document.getElementById ("btn_load").addEventListener ("click", function ()
    {
        lerArquivo (demo_param, demo_content);
    });
});

/**
 * Funcao que le um arquivo via ajax
 */
function lerArquivo (param, content)
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
            /* Possiveis valores do readyState */
            switch (request.readyState)
            {
                /* "0" = request not initialized */
                case 0:
                {
                    param.innerHTML += "<p><b>readyState = 0</b> = Requisição não inicializada</p>";
                    break;
                }
                
                /* "1" = server connection established */
                case 1:
                {
                    param.innerHTML += "<p><b>readyState = 1</b> = Conexão com o servidor estabelecida</p>";
                    break;
                }

                /* "2" = request received */
                case 2:
                {
                    param.innerHTML += "<p><b>readyState = 2</b> = Requisição recebida</p>";
                    break;
                }

                /* "3" = processing request */
                case 3:
                {
                    param.innerHTML += "<p><b>readyState = 3</b> = Processando requisição...</p>";
                    break;
                }

                /* "4" = request finished and response is ready */
                case 4:
                {
                    param.innerHTML += "<p><b>readyState = 4</b> = Requisição finalizada e a resposta está pronta</p>";
                    break;
                }

                default:
                {
                    break;
                }
            }

            if (request.status === 200)
            {
                param.innerHTML += "<p><b>status = 200</b> (OK)</p>";
            }
            else if (request.status === 403)
            {
                param.innerHTML += "<p><b>status = 403</b> (Proibido)</p>";
            }
            else if (request.status === 404)
            {
                param.innerHTML += "<p><b>status = 404</b> (Página não encontrada)</p>";
            }

            /* Verificacao */
            if (request.readyState === 4 && request.status === 200)
            {
                /* "responseText" = Conteudo da request em formato texto */
                content.innerHTML = request.responseText;

                /* "getAllResponseHeaders ()" = Pega todos cabecalhos da response  */
                param.innerHTML += "<p><b>Response Headers</b></p>";
                param.innerHTML += "<p>".concat (request.getAllResponseHeaders ()).concat ("</p>");
            }
        };

        

        /* "open (method, url, async)" = Abre a conexao para ir ate certa url */
        request.open ("GET", "/files/09_Big_Man_With_A_Gun.txt", true);

        /* "send ()" = Pode ou nao enviar parametros */
        request.send (null);
    } 
    catch (error) 
    {
        content.innerHTML = error;
    }
}