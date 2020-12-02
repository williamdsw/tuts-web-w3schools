/* ===== EXEMPLO DE BOOLEAN ===== */

window.onload = function (e) 
{
    /* Exemplos de valores aleatorios */
    var b1 = Boolean (10 == 10);
    var b2 = (100 > 45);
    var b3 = 20 != 45;
    var b4 = Boolean (15 > 15);
    var b5 = new Boolean (false);
  
    /* Mensagens */
    var a = "\n Boolean (10 == 10) = ".concat (b1);
    var b = "\n (100 > 45) = ".concat (b2);
    var c = "\n 20 != 45 = ".concat (b3);
    var d = "\n Boolean (15 > 15) = ".concat (b4);
    var e = "\n var b5 = new Boolean (false) = ".concat (b5);
  
    /* Pegando elemento */
    var textarea = document.getElementById ("txt_codigo");

    /* Concatenando valores */
    textarea.value += a;
    textarea.value += b;
    textarea.value += c;
    textarea.value += d;
    textarea.value += e;
};