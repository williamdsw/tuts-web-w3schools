/* ===== EXEMPLO DE NUMBERS ===== */

window.onload = function (e)
{
    /* Valores numericos */
    var three = 3;                              /* Inteiro */
    var pi = 3.14;                              /* Decimal */
    var big = 666e10;                           /* Expoente Cientifico */ 
    var small = 333e-6;                         /* Expoente Cientifico */
    var bigInteger = 999999999999999;           /* Ate 15 digitos mantem o valor */   
    var bigIntegerRounded = 9999999999999999;   /* Depois de 15 digitos arredonda */   
    var floatResult = 0.10 + 0.666;             /* Calculo de decimais... */
    var notNumber = 100 / "Dreamcast";          /* Ira retornar "NaN" por que a String nao e numerica */
    var isNotNumber = isNaN (notNumber);        /* "isNaN (value) = Retorna se o valor e NaN */
    var typeOfNaN = typeof NaN;                 /* Retorna qual tipo do "NaN" (number) */

    /* Printa */
    console.log (three);
    console.log (pi);
    console.log (big);
    console.log (small);
    console.log (bigInteger);
    console.log (bigIntegerRounded);
    console.log (floatResult);
    console.log (notNumber);
    console.log (isNotNumber);
    console.log (typeOfNaN);

    /* ==== Calcula o numero ate ficar infinito ==== */
    var numeroInfinito = 50;

    while (numeroInfinito != Infinity)
    {
        numeroInfinito *= numeroInfinito;
    }

    /* Printa */
    console.log (numeroInfinito);

    /* ==== Numeros hexadecimais ==== */
    var hexadecimal = 0xFFF;
    var base10 = 10;

    /* Printando... */
    console.log (hexadecimal);
    console.log (base10.toString (2));
};