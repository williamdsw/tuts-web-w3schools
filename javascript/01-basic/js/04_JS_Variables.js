
function Variables ()
{
    /* Exemplo de variaveis */
    var inteiro = 12;
    var decimal = 1.15;
    var string = "Exemplo de String";
    var booleano = false;

    /* Concatenado... */
    var mensagem = "<p>Inteiro: ".concat (inteiro).concat ("</p>")
                   .concat ("<p>Decimal: ").concat (decimal).concat ("</p>")
                   .concat ("<p>String: ").concat (string).concat ("</p>")
                   .concat ("<p>Booleano: ").concat (booleano).concat ("</p>");

    /* Definindo innerHTML... */
    document.getElementById ("demo").innerHTML = mensagem;
}

Variables ();