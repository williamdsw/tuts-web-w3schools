/* ===== EXEMPLOS DE UTILIZACAO DE "POPUPS" ===== */

/**
 * Quando carregar a janela
 */
window.addEventListener ("load", function ()
{
    /* Pegando elemento */
    var div = document.getElementById ("demo");

    /* ----- EVENTOS ----- */
    document.getElementById ("btn_alert").addEventListener ("click", function ()
    {
        /* alert (str) = Exibe uma caixa de mensagem */
        alert ("Você acionou uma alert box!");
    });

    document.getElementById ("btn_confirm").addEventListener ("click", function ()
    {
        /* confirm (str) = Exibe um modal de pergunta e retorna um boolean como resposta */
        if (confirm ("Deseja mesmo testar isso?"))
        {
            div.innerHTML = "Você testou o confirm box!";
        }
        else
        {
            div.innerHTML = "Você recusou o confirm box!";
        }
    });

    document.getElementById ("btn_prompt").addEventListener ("click", function ()
    {
        /* prompt (str, ?str) = Exibe um modal com um input, e retorna o valor desse input */
        var nome = prompt ("Digite seu Nome", "Trent Reznor");

        div.innerHTML = (nome !== null || nome !== "" ? "Seu nome é ".concat (nome) : "Você não digitou seu nome");
    });
});