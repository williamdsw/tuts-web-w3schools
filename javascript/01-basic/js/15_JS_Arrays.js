/* ===== EXEMPLO DE ARRAYS ===== */

window.onload = function (e)
{
    /* Exemplos de Arrays */
    var times_SP = ["São Paulo", "Santos", "Corinthians", "Palmeiras"];
    var times_RJ = new Array ("Botafogo", "Flamengo", "Fluminense", "Vasco");


    /* Operacoes */
    var primeiro_time = times_SP[0];                          /* Pegando valor pelo indice */
    var segundo_time = times_SP[1] = "Portuguesa";            /* Redefinindo valor do indice */
    var tipo = typeof times_SP;                               /* Retorna o tipo do array */
    var tamanho = times_SP.length;                            /* Retorna o numero de itens */
    var ordenado = times_SP.sort ();                          /* Ordena os itens do array ascendente */
    var ultimo_time = times_SP[times_SP.length - 1];          /* Acessa ultimo valor do array */
    var is_array = Array.isArray (times_SP);                  /* Verifica se e um array */
    var is_instance = times_SP instanceof Array;              /* Verifica se e uma instancia de array */

    /* ===== Criando uma lista / FOR ===== */
    let ul = document.createElement ("ul");

    for (var i = 0; i < times_SP.length; i++)
    {
        let li = document.createElement ("li");
        li.innerHTML = times_SP[i];
        ul.appendChild (li);
    }

    document.body.appendChild (ul);

    /* ===== Criando uma lista / FOREACH ===== */
    var texto = "<ul>";

    times_SP.forEach (function (value)
    {
        texto += "<li>" + value + "</li>";
    });

    texto += "</ul>"
    
    document.body.append (texto);

    /* "push ()" = Adiciona um item no array */
    times_SP.push ("Palmeiras");

    /* Printando */
    console.log ("Array de times SP: ");
    console.log (times_SP);
    console.log ("Primeiro valor do array: " + primeiro_time);
    console.log ("Segundo valor modificado do array: " + segundo_time);
    console.log ("Tipo do array: " + tipo);
    console.log ("Tamanhao do array: " + tamanho);
    console.log ("Array ordernado: ");
    console.log (ordenado);
    console.log ("Último valor do array: " + ultimo_time);
    console.log ("É de fato um array? " + is_array);
    console.log ("É de fato uma instância da classe Array? " + is_instance);


};



