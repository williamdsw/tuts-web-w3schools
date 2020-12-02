/* ===== EXEMPLO DE ORDENACAO (SORT) DE ARRAYS ===== */

window.onload = function (e)
{
    /* Array de String */
    var times = ["Palmeiras", "São Paulo", "Corinthians", "Santos"];
    console.log (times);

    /* "sort ()" = Ordena alfabeticamente asc o array de Strings */
    var times_ascedentes = times.sort ();
    console.log (times_ascedentes);

    /* "reverse ()" = Ordena alfabeticamente desc o array de Strings */
    var times_descrecentes = times.reverse ();
    console.log (times_descrecentes);

    /* Array de numeros */
    var numeros = [10, 666, 3, 568, 10000, 27];
    console.log (numeros);

    /* "sort (funcao)" = Orderna em forma ascedente os valores, 
     *                   mas para isso e necessario uma funcao de comparacao  */
    var numeros_asc = numeros.sort (function (a, b) {return a - b});
    console.log (numeros_asc);

    /* "sort (funcao)" = Orderna em forma descrescente os valores, 
     *                   mas para isso e necessario uma funcao de comparacao  */
    var numeros_desc = numeros.sort (function (a, b) { return b - a});
    console.log (numeros_desc);

    /* Ordernando de forma aleatoria (Random) */
    var numeros_aleatorios = numeros.sort (function (a, b) { return 0.5 - Math.random ()});
    console.log (numeros_aleatorios);
};