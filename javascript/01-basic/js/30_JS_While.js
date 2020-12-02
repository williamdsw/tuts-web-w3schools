/* ===== EXEMPLO DE WHILE ===== */

window.onload = function (e) 
{
    /* Pegando elemento */
    var textarea = document.getElementById ("txt_codigo");

    /* Concatenando valores */
    textarea.value += " ===== WHILE ===== ";

    textarea.value += "\n while = Executa n vezes um bloco de código enquanto a condição for true";

    /* Concatenando valores */
    textarea.value += "\n\n ===== EXEMPLO =====\n ";

    /* Exemplo WHILE */
    var i = 0;

    while (i < 10)
    {
        textarea.value += `\n Número ${i} do WHILE`;
        i++;
    }

     /* Concatenando valores */
     textarea.value += "\n\n ===== DO-WHILE ===== ";

     textarea.value += "\n do-while = Executa o código pelo menos 1 vez, antes de verificar a condição";
 
     /* Concatenando valores */
     textarea.value += "\n\n ===== EXEMPLO =====\n ";

    /* EXEMPLO DO-WHILE */
    do
    {
        textarea.value += "Executei pelo menos 1 vez no DO-WHILE";
    } while (false);
};