/* ===== EXEMPLOS DE METODOS / PROPRIEDADES DO DOCUMENT ===== */

window.onload = function ()
{
    /* ### "document" = representa a pagina HTML ### */

    /* ### Formas de encontrar elementos : ### */
    /* "document.getElementById (str)" = Retorna o elemento do DOM por um ID especificado 
    /* "document.getElementsByClassName (str)" = Retorna elementos do DOM pelo nome da classe especificado
    /* "document.getElementsByName (str)" = Retorna elementos do DOM pelo valor do campo NAME especificado
    /* "document.getElementsByTagName (str)" = Retorna elementos do DOM pelo nome da TAG especificada */
    var span = document.getElementById ("demo");
    var p = document.getElementsByClassName ("paragrafo");
    var inputs = document.getElementsByName ("CAMPO");
    var div = document.getElementsByTagName ("div");


    /* ### Formas de mudar conteudo HTML dos elementos ### */
    span.innerHTML = "Elemento adquirido pelo ID";
    
    /* Iterando */
    for (var i = 0; i < p.length; i++)
    {
        p[i].innerHTML = "Esse elemento foi adquirido pelo ClassName ".concat (i + 1);
        p[i].style.backgroundColor = "red";
        p[i].style.color = "white";
    }

    /* Iterando */
    for (var i = 0; i < inputs.length; i++)
    {
        const input = inputs[i];
        input.required = true;
        input.setAttribute ("maxlength", 15 * (i + 1));
        var maxlength = input.getAttribute ("maxlength");
        input.value = "maxlength = ".concat (maxlength);
    }


    /* ### Adicionando e removendo elementos ### */
    document.getElementById ("btn1").addEventListener ("click", function (ev)
    {
        /* Criando novo elemento */
        var span = document.createElement ("span");

        console.log (span);

        alert ("Elemento criado...");
    });

    document.getElementById ("btn2").addEventListener ("click", function (ev)
    {
        var firstDiv = div[0];

        /* Itera */
        for (var i = 0; i < firstDiv.children.length; i++)
        {
            /* Pega e remove */
            var child = firstDiv.children[i];
            firstDiv.removeChild (child);
        }
    });

    document.getElementById ("btn3").addEventListener ("click", function (ev)
    {
        /* Criando novo elemento */
        var p = document.createElement ("p");

        /* Algumas propriedades */
        p.innerHTML = "Sou filho da div!";
        p.style.backgroundColor = "azure";
        p.style.fontSize = "16px";
        p.style.border = "2px solid black";

        /* Adicionando-a div */
        div[0].appendChild (p);
    });

    document.getElementById ("btn4").addEventListener ("click", function (ev)
    {
        /* Pegando elemento a ser substituido */
        var p = div[0].children[0];

        if (p !== undefined)
        {
            /* Criando novo elemento */
            var button = document.createElement ("button");

            /* Algumas propriedades */
            button.setAttribute ("type", "button");
            button.innerHTML = "Botão filho";
            button.style.backgroundColor = "#e8e8e8";
            button.style.color = "green";
            button.style.width = "100px";
            button.style.height = "40px";
            button.fontSize = "15px";

            /* Adicionando-a div */
            div[0].replaceChild (button, p);
        }
        else
        {
            alert ("A div não contém nenhum filho ainda");
        }
    });

    document.getElementById ("btn5").addEventListener ("click", function (ev)
    {
        document.write ("Tudo sumiu...");
    });


    /* ### Adicionando EVENT HANDLER  ### */
    span.onclick = function ()
    {
        this.innerHTML = "Você clicou no span com id #demo...";
    };


    /* ### Alguns metodos para procurar objetos do DOM ### */
    var anchors = document.anchors;
    var baseURI = document.baseURI;
    var body = document.body;
    var cookie = document.cookie;
    var doctype = document.doctype;
    var documentElement = document.documentElement;
    var documentMode = document.documentMode;
    var documentURI = document.documentURI;
    var domain = document.domain;
    var embeds = document.embeds;
    var forms = document.forms;
    var head = document.head;
    var images = document.images;
    var implementation = document.implementation;
    var inputEncoding = document.inputEncoding;
    var lastModified = document.lastModified;
    var links = document.links;
    var readyState = document.readyState;
    var referrer = document.referrer;
    var scripts = document.scripts;
    var strictErrorChecking = document.strictErrorChecking;
    var title = document.title;
    var URL = document.URL;

    /* printando */
    console.log ("anchors = ");
    console.log (anchors);
    console.log ("baseURI = " + baseURI);
    console.log ("body = ");
    console.log (body);
    console.log ("cookie = " + cookie);
    console.log ("doctype = ");
    console.log (doctype);
    console.log ("documentElement = ");
    console.log (documentElement);
    console.log ("documentMode = " + documentMode);
    console.log ("documentURI = " + documentURI);
    console.log ("domain = " + domain);
    console.log ("embeds = ");
    console.log (embeds);
    console.log ("forms = ");
    console.log (forms);
    console.log ("head = ");
    console.log (head);
    console.log ("images = ");
    console.log (images);
    console.log ("implementation = ");
    console.log (implementation);
    console.log ("inputEncoding = " + inputEncoding);
    console.log ("lastModified = " + lastModified);
    console.log ("links = ");
    console.log (links);
    console.log ("readyState = " + readyState);
    console.log ("referrer = " + referrer);
    console.log ("scripts = ");
    console.log (scripts);
    console.log ("strictErrorChecking = " + strictErrorChecking);
    console.log ("title = " + title);
    console.log ("URL = " + URL);
};