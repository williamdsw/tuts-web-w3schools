/* ===== EXEMPLOS DE UTILIZACAO DE PARAMETROS / METODOS "LOCATION" ===== */

/**
 * Quando carregar a janela
 */
window.addEventListener ("load", function ()
{
    /* Pegando elemento */
    var div = document.getElementById ("demo");

    /* Pegando parametros */
    var hash = window.location.hash;
    var href = window.location.href;
    var host = window.location.host;
    var hostname = window.location.hostname;
    var origin  = window.location.origin;
    var pathname = window.location.pathname;
    var port  = window.location.port;
    var protocol = window.location.protocol;
    var search  = window.location.search;

    /* Jogando conteudo */
    div.innerHTML += "<p><b>Parâmetros do LOCATION</b></p>";
    div.innerHTML += "<p>HASH: ".concat (hash).concat ("</p>");
    div.innerHTML += "<p>HREF: ".concat (href).concat ("</p>");
    div.innerHTML += "<p>HOST: ".concat (host).concat ("</p>");
    div.innerHTML += "<p>HOSTNAME: ".concat (hostname).concat ("</p>");
    div.innerHTML += "<p>ORIGIN: ".concat (origin).concat ("</p>");
    div.innerHTML += "<p>PATHNAME: ".concat (pathname).concat ("</p>");
    div.innerHTML += "<p>PORT: ".concat (port).concat ("</p>");
    div.innerHTML += "<p>PROTOCOL: ".concat (protocol).concat ("</p>");
    div.innerHTML += "<p>SEARCH: ".concat (search).concat ("</p>");

    /* --- EVENTOS --- */
    document.getElementById ("btn_assign").addEventListener ("click", function ()
    {
        /* "window.location.assign (url)" = Abre uma nova url na mesma pagina */
        window.location.assign ("https://www.google.com");
    });

    document.getElementById ("btn_reload").addEventListener ("click", function ()
    {
        /* "window.location.reload (boolean)" = Forca ou nao o carregamento da pagina */
        window.location.reload (true);
    });

    document.getElementById ("btn_replace").addEventListener ("click", function ()
    {
        /* "window.location.replace (url)" = Abre uma nova url na mesma pagina */
        window.location.replace ("https://www.youtube.com")
    });
});