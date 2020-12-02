/* ===== EXEMPLOS DE TIPO DE DADOS COM JSON ===== */

/* Exemplo de String JSON com diversos tipos de dados */
var banda_str = 
`
{
    "nome": "Megadeth",
    "numero_membros" : 4,
    "tem_grammy" : true,
    "quinto_membro": null,
    "albuns": ["Rust In Peace", "Countdown to Extinction", "Youthanasia"]
}
`
/* "JSON.parse ()" = Converte uma String para um Object */
var banda = JSON.parse (banda_str);

/**
 * Quando carregar a janela
 */
window.addEventListener ("load", function ()
{
    /* Pegando elemento */
    var div = document.getElementById ("demo");

    /* Conteudo */
    div.innerHTML = "";
    div.innerHTML += "<p>Propriedades do Object JSON:</p>";

    /* Iterando */
    for (var prop in banda)
    {
        div.innerHTML += `<p><b>Propriedade</b>: ${prop}</p>`;
        div.innerHTML += `<p><b>Valor</b>: ${banda[prop]}</p>`;
        div.innerHTML += `<br>`;
    }
});