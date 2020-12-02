/* ===== EXEMPLOS DE UTILIZACAO DE "COOKIES" ===== */

/* OBS = So funciona com SERVIDOR */

/**
 * Quando carregar a janela
 */
window.addEventListener ("load", function ()
{
    /* Pegando elemento */
    var div = document.getElementById ("demo");

    /* ----- EVENTOS ----- */
    
    /* ### CRIAR ### */
    document.getElementById ("btn_criar_cookies").addEventListener ("click", function ()
    {
        /* NECESSARIO SETAR UM DE CADA VEZ */
        /* Valores */
        var firstname = "firstname=Trent;";
        var lastname = "lastname=Reznor;";
        var fullname = "fullname=Trent Reznor;";
        var username = "username=reznortrent;";
        var expires = "expires=Thu, 18 Dec 2020 12:00:00 UTC";
        var path = "path=/;"

        /* "document.cookie" = Cria um ou mais cookies...  */
        document.cookie = firstname + " " + expires + " " + path;
        document.cookie = lastname + " " + expires + " " + path;
        document.cookie = fullname + " " + expires + " " + path;
        document.cookie = username + " " + expires + " " + path;

        /* Mensagem */
        div.innerHTML = "Cookies criados!";
    });

    /* ### EXIBIR ### */
    document.getElementById ("btn_exibir_cookies").addEventListener ("click", function ()
    {
        /* Valores */
        var cookies = document.cookie;
        
        if (cookies !== "")
        {
            /* Limpa conteudo */
            div.innerHTML = "";

            /* Quebra em array */
            var arrCookies = cookies.split (";");

            /* Itera... */
            for (var i = 0; i < arrCookies.length; i++)
            {
                arrCookies[i] = arrCookies[i].replace ("=", " = ");

                /* Mensagem */
                div.innerHTML += "<p>".concat (arrCookies[i]).concat ("</p>");
            }
        }
        else
        {
            /* Mensagem */
            div.innerHTML = "Nenhum cookie configurado";
        }
    });

    /* ### EXCLUIR ### */
    document.getElementById ("btn_excluir_cookies").addEventListener ("click", function ()
    {
        /* NECESSARIO SETAR UM DE CADA VEZ */
        /* Valores */
        var firstname = "firstname=;";
        var lastname = "lastname=;";
        var fullname = "fullname=;";
        var username = "username=;";
        var expires = "expires=Thu, 01 Jan 1970 00:00:00 UTC";
        var path = "path=/;"

        /* "document.cookie" = Cria um ou mais cookies...  */
        document.cookie = firstname + " " + expires + " " + path;
        document.cookie = lastname + " " + expires + " " + path;
        document.cookie = fullname + " " + expires + " " + path;
        document.cookie = username + " " + expires + " " + path;

        /* Mensagem */
        div.innerHTML =  (document.cookie === "" ? "Cookies excluídos!" : "Cookies não excluídos!");
    });

    /* ### MODIFICAR ### */
    document.getElementById ("btn_modificar_cookies").addEventListener ("click", function ()
    {
        /* NECESSARIO SETAR UM DE CADA VEZ */
        /* Valores */
        var firstname = "firstname=Dave;";
        var lastname = "lastname=Mustaine;";
        var fullname = "fullname=Dave Mustaine;";
        var username = "username=dave_mustaine;";
        var expires = "expires=Thu, 18 Dec 2020 12:00:00 UTC";
        var path = "path=/;"

        /* "document.cookie" = Cria um ou mais cookies...  */
        document.cookie = firstname + " " + expires + " " + path;
        document.cookie = lastname + " " + expires + " " + path;
        document.cookie = fullname + " " + expires + " " + path;
        document.cookie = username + " " + expires + " " + path;

        /* Mensagem */
        div.innerHTML = "Cookies alterados!";
    });
});