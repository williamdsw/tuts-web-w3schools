/* ===== EXEMPLOS DE ELEMENTOS DO DOM ===== */

window.onload = function ()
{
    /* ### "document" = representa a pagina HTML ### */

    /* ### Formas de encontrar elementos : ### */
    /* "document.getElementById (str)" = Retorna o elemento do DOM por um ID especificado 
    /* "document.getElementsByClassName (str)" = Retorna elementos do DOM pelo nome da classe especificado
    /* "document.getElementsByName (str)" = Retorna elementos do DOM pelo valor do campo NAME especificado
    /* "document.getElementsByTagName (str)" = Retorna elementos do DOM pelo nome da TAG especificada */
    /* "document.querySelectorAll (str)" = Retorna elementos do DOM a partir de uma sintax CSS */
    var span = document.getElementById ("demo");
    var p = document.getElementsByClassName ("paragrafo");
    var inputs = document.getElementsByName ("CAMPO");
    var div = document.getElementsByTagName ("div");
    var p_class = document.querySelectorAll ("p.paragrafo");
    var links = document.links;


    /* Resultado */
    var message = document.querySelector ("#message");

    /* Concatena */
    message.innerHTML += "<p> Número de elementos encontrados por ID: ".concat ((span !== undefined ? 1 : 0)).concat ("</p>")
    message.innerHTML += "<p> Número de elementos encontrados por ClassName: ".concat (p.length).concat ("</p>")
    message.innerHTML += "<p> Número de elementos encontrados por Name: ".concat (inputs.length).concat ("</p>");
    message.innerHTML += "<p> Número de elementos encontrados por TagName: ".concat (div.length).concat ("</p>");
    message.innerHTML += "<p> Número de elementos encontrados por querySelectorAll: ".concat (p_class.length).concat ("</p>");
    message.innerHTML += "<p> Número de elementos encontrados por querySelector: ".concat ((message !== undefined ? 1 : 0)).concat ("</p>");
    message.innerHTML += "<p> Número de elementos encontrados por document.links: ".concat (links.length).concat ("</p>");
};