/* ===== EXEMPLOS DE NAVEGACAO DO DOM ===== */


window.addEventListener ("load", function ()
{
    /* Pegando elemento...*/
    var myTitle = document.getElementById ("demo");

    /* Pega todo documento */
    var documentElement = document.documentElement;

    /* Pega o corpo (body) do documento */
    var body = document.body;

    /* Pegando elemento... */
    var div = document.getElementById ("content");

    /* ===== Jogando conteudo ===== */
    /* "firstChild" = Pega primeiro 'filho' do elemento */
    div.innerHTML += "<p>".concat ("<b>firstChild.nodeValue</b> = ").concat (myTitle.firstChild.nodeValue).concat ("</p>");

    /* "childNodes[index]" = Pega qualquer filho pelo indice */
    div.innerHTML += "<p>".concat ("<b>childNodes[0].nodeValue</b> = ").concat (myTitle.childNodes[0].nodeValue).concat ("</p>");

    /* "nodeName" = Pega o nome do no (tag) */
    div.innerHTML += "<p>".concat ("<b>nodeName</b> = ").concat (myTitle.nodeName).concat ("</p>");

    /* "nodeValue" = Retorna o valor do no (tag) = NULL */
    div.innerHTML += "<p>".concat ("<b>nodeValue</b> = ").concat (myTitle.nodeValue).concat ("</p>");

    /* "nodeType" = Tipo do no (tag) */
    div.innerHTML += "<p>".concat ("<b>nodeType</b> = ").concat (myTitle.nodeType).concat ("</p>");

    div.innerHTML += "<div style='background-color: aliceblue;'><p>".concat ("<b>documentElement</b> = <br> ").concat (documentElement.innerHTML).concat ("</div></p>");
    div.innerHTML += "<div style='background-color: aquamarine;'><p>".concat ("<b>body</b> = <br> ").concat (body.innerHTML).concat ("</div></p>");

    /* Pritando tipo de node */
    switch (myTitle.nodeType)
    {
        /* ELEMENT_NODE */
        case 1:
        {
            div.innerHTML += "<p>É um elemento</p>";
            break;
        }

        /* ATTRIBUTE_NODE */
        case 2:
        {
            div.innerHTML += "<p>É um atributo</p>";
            break;
        }

        /* TEXT_NODE */
        case 3:
        {
            div.innerHTML += "<p>É um texto</p>";
            break;
        }

        /* COMMENT_NODE */
        case 8:
        {
            div.innerHTML += "<p>É um comentário</p>";
            break;
        }

        /* DOCUMENT_NODE */
        case 9:
        {
            div.innerHTML += "<p>É um document</p>";
            break;
        }

        /* DOCUMENT_TYPE_NODE */
        case 10:
        {
            div.innerHTML += "<p>É um document type</p>";
            break;
        }

        default:
        {
            div.innerHTML += "<p>Nenhum das opções</p>";
            break;
        }
    }
});