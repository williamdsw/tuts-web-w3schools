/* ===== EXEMPLOS DE ESCOPOS DE FUNCAO ===== */

/**
 * Exemplo de funcao aninhada
 */
function Pai ()
{
    /* Conteudo */
    var texto = "<p> Executou a função pai </p>";

    /* Funcao "local" dentro do escopo */
    function Filho ()
    {
        /* Conteudo */
        texto += "<p> Executou a função filha (dentro do escopo da funcao pai) </p>";

        /* Funcao "local" dentro do escopo */
        function Neto () 
        {
            /* Conteudo */
            texto += "<p> Executou a função neta (dentro do escopo da funcao filha) </p>";
        }

        Neto ();
    }

    Filho ();

    return texto;
}



window.onload = function ()
{
    /* Pegando conteudo */
    var conteudo = Pai ();

    /* Jogando na div */
    document.getElementsByTagName ("div")[0].innerHTML = conteudo;
};