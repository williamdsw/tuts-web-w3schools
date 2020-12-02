/* ===== EXEMPLO DE METODOS E PROPRIEDADES DA CLASSE "MATH" ===== */

window.onload = function (e) 
{
    /* Exemplos CONSTANTES */
    var euler = Math.E;
    var ln2 = Math.LN2;
    var ln10 = Math.LN10;
    var log2e = Math.LOG2E;
    var log10e = Math.LOG10E;
    var pi = Math.PI;
    var sqrt2 = Math.SQRT2;
    var sqrt1_2 = Math.SQRT1_2;

    /* Mensagens */
    var a = "\n===== CONSTANTES =====\n";
    var b = "\n E = ".concat (euler);
    var c = "\n LN2 = ".concat (ln2);
    var d = "\n LN10 = ".concat (ln10);
    var e = "\n LOG2E = ".concat (log2e);
    var f = "\n LOG10E = ".concat (log10e);
    var g = "\n PI = ".concat (pi);
    var h = "\n SQRT2 = ".concat (sqrt2);
    var i = "\n SQRT1_2 = ".concat (sqrt1_2);

    /* Exemplos FUNCOES */
    /* "abs ()" = Retorna o valor absoluto (positivo) */
    var abs = Math.abs (-666.342);

    /* "acos ()" = Retorna  */
    var acos = Math.acos (0.5);

    /* "asin ()" = Retorna  */
    var asin = Math.asin (0);

    /* "atan ()" = Retorna  */
    var atan = Math.atan (10);

    /* "atan2 ()" = Retorna  */
    var atan2 = Math.atan2 (10, 20);
    
    /* "ceil ()" = Retorna o valor arredondado para cima do proximo inteiro  */
    var ceil = Math.ceil (6.666);

    /* "cos ()" = Retorna  */
    var cos = Math.cos (10);

    /* "exp ()" = Retorna  */
    var exp = Math.exp (10);

    /* "floor ()" = Retorna o valor arrendondado para baixo do proximo inteiro  */
    var floor = Math.floor (6.666);

    /* "log ()" = Retorna   */
    var log = Math.log (10);

    /* "max ()" = Retorna o maior numero entre 2 ou mais numeros  */
    var max = Math.max (10, 1.5, -666, 100, 234.123834);

    /* "min ()" = Retorna o menor numero entre 2 ou mais numeros  */
    var min = Math.min (10, 1.5, -666, 100, 234.123834);

    /* "pow ()" = Retorna o primeiro param potenciado ao segundo param  */
    var pow = Math.pow (10, 10);

    /* "random ()" = Retorna um valor aleatorio entre 0 e 1  */
    var random = Math.random ();

    /* "round ()" = Retorna um valor arredondado ao inteiro mais proximo  */
    var round = Math.round (6.666);

    /* "sin ()" = Retorna */
    var sin = Math.sin (10);

    /* "sqtr ()" = Retorna a raiz quadrada de um numero informado  */
    var sqrt = Math.sqrt (49);

    /* "tan ()" = Retorna */
    var tan = Math.tan (10);

    /* Mensagens */
    var j = "\n\n===== FUNCOES =====\n";
    var k = "\n Math.abs (-666.342) = ".concat (abs);
    var l = "\n Math.acos (0.5) = ".concat (acos);
    var m = "\n Math.asin (0) = ".concat (asin);
    var n = "\n Math.atan (10) = ".concat (atan);
    var o = "\n Math.atan2 (10, 20) = ".concat (atan2);
    var p = "\n Math.ceil (6.666) = ".concat (ceil);
    var q = "\n Math.cos (10) = ".concat (cos);
    var r = "\n Math.exp (10) = ".concat (exp);
    var s = "\n Math.floor (6.666) = ".concat (floor);
    var u = "\n Math.log (10) = ".concat (log);
    var v = "\n Math.max (10, 1.5, -666, 100, 234.123834) = ".concat (max);
    var x = "\n Math.min (10, 1.5, -666, 100, 234.123834) = ".concat (min);
    var y = "\n Math.pow (10, 10) = ".concat (pow);
    var z = "\n Math.random () = ".concat (random);
    var a1 = "\n Math.round (6.666) = ".concat (round);
    var b1 = "\n Math.sin (10) = ".concat (sin);
    var c1 = "\n Math.sqrt (49) = ".concat (sqrt);
    var d1 = "\n Math.tan (10) = ".concat (tan);

    /* Pegando elemento */
    var textarea = document.getElementById ("txt_codigo");

    /* Concatenando valores */
    textarea.value += a;
    textarea.value += b;
    textarea.value += c;
    textarea.value += d;
    textarea.value += e;
    textarea.value += f;
    textarea.value += g;
    textarea.value += h;
    textarea.value += i;
    textarea.value += j;
    textarea.value += k;
    textarea.value += l;
    textarea.value += m;
    textarea.value += n;
    textarea.value += o;
    textarea.value += p;
    textarea.value += q;
    textarea.value += r;
    textarea.value += s;
    textarea.value += u;
    textarea.value += v;
    textarea.value += x;
    textarea.value += y;
    textarea.value += z;
    textarea.value += a1;
    textarea.value += b1;
    textarea.value += c1;
    textarea.value += d1;
};