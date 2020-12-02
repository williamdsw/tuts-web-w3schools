
/* ===== EXEMPLO DE OPERADORES ===== */

/* Operadores de Comparacao */
function CompariseOperators ()
{
    /* "==" = Verifica se e igual no valor */
    if (1 == 1)
    {
        console.log ("1 é igual à 1 no valor");
    }

    /* "===" = Verifica se e igual no valor / tipo */
    if (10 === 10)
    {
        console.log ("10 é igual à 10 no valor e no tipo");
    }

    /* "!=" = Verifica se e diferente no valor */
    if (1 != 2)
    {
        console.log ("1 é diferente de 2 no valor");
    }

    /* "!==" = Verifica se diferente no valor / tipo */
    if (10 !== "11")
    {
        console.log ("10 é diferente de 11 no valor e no tipo");
    }

    /* ">" = Verifica se e maior no valor */
    if (1 > 0)
    {
        console.log ("1 é maior que 0");
    }

    /* "<" = Verifica se e menor no valor */
    if (0 < 1)
    {
        console.log ("0 é menor que 1");
    }

    /* ">=" = Verifica se e maior ou igual no valor */
    if (1 >= 1)
    {
        console.log ("1 é maior ou igual à 1");
    }

    /* "<=" = Verifica se e menor ou igual no valor */
    if (9 <= 10)
    {
        console.log ("9 é menor ou igual no valor");
    }

    /* "?" = IF ternario */
    10 > 5 ? console.log ("10 é maior que 5 no IF ternário") : console.log ("10 não é maior que 5 no IF ternário");
}

/* Operadores Logicos */
function LogicalOperators ()
{
    /* "&&" = Verifica se ambas condicoes sao true / false */
    if (100 == 100 && 10.1 > 5.9)
    {
        console.log ("100 é igual a 100 E 10.1 é maior que 5.9");
    }

    /* "||" = Verifica se uma ou outra condicao sao true / false */
    if (100 == 101 || "Teste" === "Teste")
    {
        console.log ("100 não é igual a 101, mas 'Teste' é igual a 'Teste'");
    }

    /* "!" = Faz uma negacao com uma condicao */
    if (!(100 < 100))
    {
        console.log ("100 não é menor a 100, mas numa negação retornara true");
    }
}

/* Operadores de Tipo */
function TypeOperators ()
{
    var inteiro = 150;

    /* "typeof" = Retorna o tipo da variavel */
    console.log (typeof (inteiro));

    /* "instanceof" = Verifica se uma variavel e instancia de um tipo */
    console.log (inteiro instanceof Number);
}

CompariseOperators ();
LogicalOperators ();
TypeOperators ();
