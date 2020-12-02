/* ===== EXEMPLOS DE UTILIZACAO DE PARAMETROS / METODOS "LOCATION" ===== */

/**
 * Quando carregar a janela
 */
window.addEventListener ("load", function ()
{
    /* Pegando elemento */
    var div = document.getElementById ("demo");

    /* Pegando parametros */
    var length = window.history.length;
    var scrollRestoration = window.history.scrollRestoration;
    var state = window.history.state;

    /* Jogando conteudo */
    div.innerHTML += "<p><b>Parâmetros do HISTORY</b></p>";
    div.innerHTML += "<p>LENGTH: ".concat (length).concat ("</p>");
    div.innerHTML += "<p>SCROLL RESTORATION: ".concat (scrollRestoration).concat ("</p>");
    div.innerHTML += "<p>STATE: ".concat (state).concat ("</p>");

    /* --- EVENTOS --- */
    document.getElementById ("btn_back").addEventListener ("click", function ()
    {
        /* "window.history.back ()" = Volta na pagina anterior */
        window.history.back ();
    });

    document.getElementById ("btn_forward").addEventListener ("click", function ()
    {
        /* "window.history.forward ()" = Vai para a pagina a frente  */
        window.history.forward ();
    });
});