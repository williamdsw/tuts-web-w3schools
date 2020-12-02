/* ===== EXEMPLO DE CONDICOES ===== */

window.onload = function (e) 
{
    /* Exemplo a ser usado */
    var numero = Math.round (Math.random () * 100) + 1;

    /* Pegando elemento */
    var textarea = document.getElementById ("txt_codigo");

    /* Concatenando valores */
    textarea.value += " ===== CONDIÇÕES ===== ";

    textarea.value += "\n if = verifica se uma condição é verdadeira ";
    textarea.value += "\n else = caso a verificação for falsa, irá cair no else ";
    textarea.value += "\n else if = caso a verificação for falsa, irá cair no else if para ser feita outra condição ";

    /* Concatenando valores */
    textarea.value += "\n\n ===== EXEMPLO =====\n ";

    textarea.value += "\n Número aleatório :  ".concat (numero);

    /* Comparacoes */
    if (numero > 1)
    {
        textarea.value += "\n Entrou no IF = É maior que 1 ";
    }

    if (numero == 100)
    {
        textarea.value += "\n Entrou no IF = É igual a 100 ";
    }
    else
    {
        textarea.value += "\n Entrou no ELSE = Não é igual a 100 ";
    }

    if (numero == 100)
    {
        textarea.value += "\n Entrou no IF = É igual a 100 ";
    }
    else if (numero > 50)
    {
        textarea.value += "\n Entrou no ELSE IF = É maior que 50 ";
    }
    else
    {
        textarea.value += "\n Entrou no ELSE = É igual ou menor que 50 e 100 ";
    }
};