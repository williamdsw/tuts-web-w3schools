/* ===== EXEMPLO DE BREAK / CONTINUE ===== */

window.onload = function (e) 
{
    /* Pegando elemento */
    var textarea = document.getElementById ("txt_codigo");

    /* Concatenando valores */
    textarea.value += " ===== BREAK ===== ";

    textarea.value += "\n break = quebra o loop em uma condição ";

    /* Concatenando valores */
    textarea.value += "\n\n ===== EXEMPLO =====\n ";

    /* EXEMPLO FOR - BREAK */
    for (var i = 0; i < 10; i++)
    {
        if (i === 4)
        {
            textarea.value += `\n Quebrou no item ${i}`;
            break;
        }

        textarea.value += `\n Item ${i}`;
    }

    /* Concatenando valores */
    textarea.value += "\n\n ===== CONTINUE ===== ";

    textarea.value += "\n contiue = Continua o loop dependendo da condição ";

    /* Concatenando valores */
    textarea.value += "\n\n ===== EXEMPLO =====\n ";

    /* EXEMPLO FOR - CONTINUE */
    for (var i = 10; i > 0; i--)
    {
        if (i == 6)
        {
            textarea.value += `\n Continuou no item ${i}`;
            continue;
        }

        textarea.value += `\n Item ${i}`;
    }
};