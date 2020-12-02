/* ===== EXEMPLOS DE UTILIZACAO XML DE XMLHTTPREQUEST ===== */


/**
 * Quando carregar a janela
 */
window.addEventListener ("load", function ()
{
    /* Pegando elemento */
    var demo = document.getElementById ("demo");

    /* EVENTO */
    document.getElementById ("btn_load").addEventListener ("click", function ()
    {
        LerArquivo (demo);
    });
});

/**
 * Funcao que le um arquivo via ajax
 */
function LerArquivo (demo)
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
            if (request.readyState === 4 && request.status === 200)
            {
                demo.innerHTML = MontaTabela (this.responseXML);    
            }
        };

        /* "open (method, url, async)" = Abre a conexao para ir ate certa url */
        request.open ("GET", "../files/Campeonato_Brasileiro_2018.xml", true);

        /* "send ()" = Pode ou nao enviar parametros */
        request.send (null);
    } 
    catch (error) 
    {
        content.innerHTML = error;
    }
}


function MontaTabela (responseXML)
{
    var tabela = ``;

    try 
    {
        /* Template inicial */
        tabela += 
        `<table style="text-align:center;">
            <thead>
                <tr>
                    <th> Classificação </th>
                    <th> Nome </th>
                    <th> Pontuação </th>
                    <th> Jogos </th>
                    <th> Vitórias </th>
                    <th> Empates </th>
                    <th> Derrotas </th>
                </tr>
            </thead>

            <tbody>`;

        /* Pega tag root */
        var campeonato_brasileiro = responseXML.getElementsByTagName ("campeonato_brasileiro");

        /* Verifica se existe */
        if (campeonato_brasileiro.length === 1)
        {
            /* Pega filhos */
            var equipes = campeonato_brasileiro[0].children;

            /* Itera */
            for (var i = 0; i < equipes.length; i++)
            {
                tabela += `<tr>`;

                /* Pega campos filhos */
                var campos = equipes[i].children;

                for (var j = 0; j < campos.length; j++)
                {
                    /* Pega valor */
                    var valor = equipes[i].children[j].textContent;

                    tabela += `<td>${valor}</td>`
                }

                tabela += `</tr>`;
            }
        }
        else 
        {
            throw "XML inválido ou incompleto sem a tag root";
        }

        /* Template final */
        tabela += 
        `   </tbody>
         </table>`
    } 
    catch (error) 
    {
        tabela = "<p>".concat (error).concat ("</p>");
    }

    return tabela;
}