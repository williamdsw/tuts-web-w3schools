/* ===== EXEMPLOS DE NODES DOM ===== */

window.addEventListener ("load", function ()
{
    /* Pegando elementos */
    var div = document.getElementById ("div_exemplo");
    var p_exemplo_1 = document.getElementById ("p_exemplo_1");
    var p_exemplo_2 = document.getElementById ("p_exemplo_2");

    /* ==== Eventos ==== */
    document.getElementById ("btn_1").addEventListener ("click", function ()
    {
        /* "createElement (tag)" = Cria um novo elemento */
        var p = document.createElement ("p");

        /* "createTextNode (tag)" = Cria um no de texto */
        var text = document.createTextNode ("Outro parágrafo");

        /* "appendChild (node)" = Adiciona um elemento como filho de outro */
        p.appendChild (text);
        div.appendChild (p);
    });

    document.getElementById ("btn_2").addEventListener ("click", function ()
    {
        try 
        {
            /* "createElement (tag)" = Cria um novo elemento */
            var p = document.createElement ("p");

            /* "createTextNode (tag)" = Cria um no de texto */
            var text = document.createTextNode ("Parágrafo no ínicio");

            /* "appendChild (node)" = Adiciona um elemento como filho de outro */
            p.appendChild (text);

            if (p_exemplo_1 !== undefined)
            {
                /* "insertBefore (newNode, refNode)" = Adiciona um elemento novo antes do elemento refereciado */
                div.insertBefore (p, p_exemplo_1);
            }
            else
            {
                /* Pegando primeiro filho */
                var firstChild = div.children[0];

                /* Verificando */
                if (firstChild !== undefined)
                {
                    /* "insertBefore (newNode, refNode)" = Adiciona um elemento novo antes do elemento refereciado */
                    div.insertBefore (p, firstChild);
                }
                else
                {
                    alert ("Não existem mais parágrafos a serem inseridos");
                }
            }
        } 
        catch (error) 
        {
            alert (error);
        }
    });

    document.getElementById ("btn_3").addEventListener ("click", function ()
    {
        /* "createElement (tag)" = Cria um novo elemento */
        var p = document.createElement ("p");

        /* "createTextNode (tag)" = Cria um no de texto */
        var text = document.createTextNode ("Parágrafo substituído");

        /* "appendChild (node)" = Adiciona um elemento como filho de outro */
        p.appendChild (text);

        /* Pegando primeiro filho */
        var firstChild = div.children[0];

        /* Verificando */
        if (firstChild !== undefined)
        {
            div.replaceChild (p, firstChild);
        }
        else
        {
            alert ("Não existem mais parágrafos a serem substituídos");
        }
    });

    document.getElementById ("btn_4").addEventListener ("click", function ()
    {
        /* Pegando primeiro filho */
        var firstChild = div.children[0];

        /* Verificando */
        if (firstChild !== undefined)
        {
            /* "removeChild (element)" = Remove um filho ja existente */
            div.removeChild (firstChild);
        }
        else
        {
            alert ("Não existem mais parágrafos a serem removidos da div");
        }
    });
});