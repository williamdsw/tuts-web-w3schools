/* ===== EXEMPLOS DE UTILIZACAO DE "TIMING" ===== */

/**
 * Quando carregar a janela
 */
window.addEventListener ("load", function ()
{
    /* Pegando elemento */
    var div = document.getElementById ("demo");

    /* ----- EVENTOS ----- */
    /* ### EXEMPLO 1 ### */
    document.getElementById ("btn_set_timeout").addEventListener ("click", function ()
    {
        setTimeout (() =>
        {
            div.innerHTML = "Chamou e executou setTimeout depois de 1 segundo";
        }, 1000);
    });

    /* ### EXEMPLO 2 ### */
    var btn_trigger_timeout = document.getElementById ("btn_trigger_timeout");
    var btn_cancel_timeout = document.getElementById ("btn_cancel_timeout");
    var id_timeout = undefined;

    /* evento "click" */
    btn_trigger_timeout.addEventListener ("click", function ()
    {
        /* Desabilita */
        btn_cancel_timeout.disabled = false;

        /* "setTimeout (function, milisseconds)" = Executa uma funcao depois de x milissegundos */
        id_timeout = setTimeout (function ()
        {
            div.innerHTML = "Executado no setTimeout sem cancelar...";
            btn_cancel_timeout.disabled = true;
        }, 3000);
    });

    /* evento "click" */
    btn_cancel_timeout.addEventListener ("click", function ()
    {
        /* "clearTimeout (number)" = Limpa o setTimeout de acordo com o ID informado do proprio */
        clearTimeout (id_timeout);

        div.innerHTML = "Você cancelou o setTimout...";
        this.disabled = true;
    });

    /* ### EXEMPLO 3 ### */
    document.getElementById ("btn_set_interval").addEventListener ("click", function ()
    {
        var count = 0;

        /* "setInterval (function, milisseconds)" = Executa uma funcao depois n milissegundos 
                                                    e continua repetindo a chamada */
        setInterval (() => 
        {
            count++;
            div.innerHTML = "Contando... ".concat (count);
        }, 1000);
    });

    /* ### EXEMPLO 4 ### */
    var btn_trigger_interval = document.getElementById ("btn_trigger_inverval");
    var btn_cancel_interval = document.getElementById ("btn_cancel_interval");
    var id_interval = undefined;

    /* evento "click" */
    btn_trigger_interval.addEventListener ("click", function ()
    {
        btn_cancel_interval.disabled = false;

        /* "setInterval (function, milisseconds)" = Executa uma funcao depois n milissegundos 
                                                    e continua repetindo a chamada */
        id_interval = setInterval (function ()
        {
            div.innerHTML = Date ();
        }, 1000);
    });

    /* evento "click" */
    btn_cancel_interval.addEventListener ("click", function ()
    {
        /* "clearInterval (number)" = Cancela a chamada do setInterval pelo seu ID gerado */
        clearInterval (id_interval);

        div.innerHTML = "Você parou o Relógio...";
        this.disabled = true;
    });
});