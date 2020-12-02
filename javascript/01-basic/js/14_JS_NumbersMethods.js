/* ===== EXEMPLO DE METODOS DE NUMBER ===== */

window.onload = function (e)
{
    /* "toString" = Retorna o valor da variavel em string  */
    var a = 666;
    console.log ("a = " + a);
    console.log ("a.toString () = " + a.toString ());

    /* "toExponential" = Retorna o valor arredondado e na forma expoente cientifica  */
    var b = 666.016;
    console.log ("b = " + b);
    console.log ("b.toExponential () = " + b.toExponential ());
    console.log ("b.toExponential (2) = " + b.toExponential (2));
    console.log ("b.toExponential (3) = " + b.toExponential (3));
    console.log ("b.toExponential (4) = " + b.toExponential (4));
    console.log ("b.toExponential (5) = " + b.toExponential (5));

    /* "toFixed" = Retorna o valor com numero especifico de casas decimais  */
    var c = 6.665;
    console.log ("c = " + c);
    console.log ("c.toFixed (2) = " + c.toFixed (2));
    console.log ("c.toFixed (4) = " + c.toFixed (4));
    console.log ("c.toFixed (8) = " + c.toFixed (8));
    console.log ("c.toFixed (10) = " + c.toFixed (10));
    console.log ("c.toFixed (16) = " + c.toFixed (16));
    console.log ("c.toFixed (20) = " + c.toFixed (20));

    /* "toPrecision" = Retorna o valor na forma expoente cientifica ou com precisao  */
    var d = 100.45;
    console.log ("d = " + d);
    console.log ("d.toPrecision (2) = " + d.toPrecision (2));
    console.log ("d.toPrecision (3) = " + d.toPrecision (3));
    console.log ("d.toPrecision (4) = " + d.toPrecision (4));
    console.log ("d.toPrecision (5) = " + d.toPrecision (5));
    console.log ("d.toPrecision (10) = " + d.toPrecision (10));

    /* "Number" = Converte uma string para um valor numerico  */
    var e = Number ("145");
    console.log ("Number ('145') = " + e);

    /* "parseInt" = Converte uma string para um valor inteiro  */
    var f = parseInt ("56");
    console.log ("parseInt ('56') = " + f);

    /* "parseFloat" = Converte uma string para um valor decimal  */
    var g = parseFloat ("15.99");
    console.log ("parseFloat ('15.99') = " + g);

    /* Utilizando "Number" para converter Date para milissegundos */
    var mil = Number (new Date ("2018-12-24"));
    console.log ("Number (new Date ('2018-12-24')) = " + mil);

    /* "MAX_VALUE" = Retorna o valor maior para Numbers */
    var max_number = Number.MAX_VALUE;
    console.log ("Number.MAX_VALUE = " + max_number);

    /* "MIN_VALUE" = Retorna o valor menor para Numbers */
    var min_value = Number.MIN_VALUE;
    console.log ("Number.MIN_VALUE = " + min_value);

    /* "MAX_SAFE_INTEGER" = Retorna o valor maior seguro para Integers */
    var max_safe_integer = Number.MAX_SAFE_INTEGER;
    console.log ("Number.MAX_SAFE_INTEGER = " + max_safe_integer);

    /* "MIN_SAFE_INTEGER" = Retorna o valor menor seguro para Integers */
    var min_safe_integer = Number.MIN_SAFE_INTEGER;
    console.log ("Number.MIN_SAFE_INTEGER = " + min_safe_integer);

    /* "EPSILON" =  */
    var epsilon = Number.EPSILON;
    console.log ("Number.EPSILON = " + epsilon);
};