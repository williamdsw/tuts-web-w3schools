/* ===== EXEMPLO DE FOR ===== */

window.onload = function (e) 
{
    /* Pegando elemento */
    var textarea = document.getElementById ("txt_codigo");

    /* Concatenando valores */
    textarea.value += " ===== FOR ===== ";

    textarea.value += "\n for = Executa um bloco de instruções n vezes ";

    /* Concatenando valores */
    textarea.value += "\n\n ===== EXEMPLO =====\n ";

    /* Exemplo FOR */
    for (var i = 0; i < 10; i++)
    {
        textarea.value += `\n Item ${i} do FOR`;
    }

    /* Concatenando valores */
    textarea.value += "\n\n ===== EXEMPLO FOR OBJETO =====\n ";

    /* Exemplo de objeto */
    var time = 
    {
        nome: "São Paulo",
        cidade: "São Paulo",
        ano_fundacao: 1935,
        apelido: "Tricolor Paulista"
    }

    /* Exemplo FOR - objeto */
    for (var prop in time)
    {
        textarea.value += `\n ${prop} = ${time[prop]}`;
    }
};