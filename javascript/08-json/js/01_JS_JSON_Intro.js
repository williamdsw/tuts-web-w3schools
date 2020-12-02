/* ===== EXEMPLOS DE UTILIZACAO JSON ===== */

/* Exemplo Object */
var time =  
{
    nome: "São Paulo",
    sigla: "SPFC",
    pais: "Brasil"
};

/* "JSON.stringify ()" = Converte um Object para String */
var time_str = JSON.stringify (time);

/* Exemplo String JSON */
var banda_str = `{"nome": "Megadeth", "genero": "Thrash Metal", "ano_fundacao": 1983}`;

/* "JSON.parse ()" = Converte uma String para um Object */
var banda = JSON.parse (banda_str);

/**
 * Quando carregar a janela
 */
window.addEventListener ("load", function ()
{
    /* Pegando elemento */
    var div = document.getElementById ("demo");

    /* EVENTO */
    document.getElementById ("btn_stringfy").addEventListener ("click", function ()
    {
        /* Conteudo */
        div.innerHTML = "";
        div.innerHTML += "<p>Object para JSON String:</p>";
        div.innerHTML += "<p>".concat (time_str).concat ("</p>");
    });

    /* EVENTO */
    document.getElementById ("btn_parse").addEventListener ("click", function ()
    {
        /* Conteudo */
        div.innerHTML = "";
        div.innerHTML += "<p>String JSON para Object:</p>";

        /* Itera */
        for (var prop in banda)
        {
            div.innerHTML += `<p>${prop} = ${banda[prop]}</p>`
        }
    });

    /* EVENTO */
    document.getElementById ("btn_armazenar").addEventListener ("click", function ()
    {
        /* "localStorage.setItem (key, value)" = Armazena um chave-valor no navegador */
        localStorage.setItem ("time_str", time_str);

        /* Conteudo */
        div.innerHTML = "<p>JSON armazenado com sucesso</p>";
    });

    /* EVENTO */
    document.getElementById ("btn_recuperar").addEventListener ("click", function ()
    {
        /* "localStorage.getItem (key)" = Recupera o valor armazenado no navegador pela chave informada */
        var json = localStorage.getItem ("time_str");

        /* Verificacao */
        if (json !== null)
        {
            /* Conteudo */
            div.innerHTML = "";
            div.innerHTML += "<p>JSON recuperado com sucesso:</p>";
            div.innerHTML += "<p>".concat (json).concat ("</p>");
        }
        else
        {
            /* Conteudo */
            div.innerHTML = "<p>A String JSON ainda não foi armazenada</p>";
        }
    });
});