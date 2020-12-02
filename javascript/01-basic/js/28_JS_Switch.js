/* ===== EXEMPLO DE SWITCH ===== */

window.onload = function (e) 
{
    /* Exemplo a ser usado */
    var today = new Date ().getDay ();

    /* Pegando elemento */
    var textarea = document.getElementById ("txt_codigo");

    /* Concatenando valores */
    textarea.value += " ===== SWITCH ===== ";

    textarea.value += "\n switch = Verifica um valor em várias condições ";

    /* Concatenando valores */
    textarea.value += "\n\n ===== EXEMPLO =====\n ";

    textarea.value += "\n Hoje :  ".concat (today);

    /* Comparacoes */
    switch (today)
    {
        case 0 : {textarea.value += "\n Hoje é domingo "; break;}
        case 1 : {textarea.value += "\n Hoje é segunda-feira "; break;}
        case 2 : {textarea.value += "\n Hoje é terça-feira "; break;}
        case 3 : {textarea.value += "\n Hoje é quarta-feira "; break;}
        case 4 : {textarea.value += "\n Hoje é quinta-feira "; break;}
        case 5 : {textarea.value += "\n Hoje é sexta-feita "; break;}
        case 6 : {textarea.value += "\n Hoje é sábado "; break;}
    }

    /* Comparacoes */
    switch (today)
    {
        case 1: case 2: {textarea.value += "\n Ínicio da semana (CASE) "; break;}
        default: {textarea.value += "\n Meio ou final da semana (DEFAULT) "; break;}
    }
};