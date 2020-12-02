/* ===== EXEMPLOS DE PERFORMANCE ===== */

/**
 * Executa um loop tradicional 
 */
function PrimeiroLoop ()
{
    /* Inicio da performance */
    var inicio = performance.now ();

    /* Operacao */
    for (var i = 0; i < 50000; i++) 
    {}

    /* Final da performance */
    var termino = performance.now ();

    return ((termino - inicio) / 1000).toFixed (4);
}

/**
 * Executa um loop "melhorado" 
 */
function SegundoLoop ()
{
    /* Inicio da performance */
    var inicio = performance.now ();

    var i = 0;
    var length = 50000;

    /* Operacao */
    for (; i < length; i++)
    {}

    /* Final da performance */
    var termino = performance.now ();

    return ((termino - inicio) / 1000).toFixed (4);
}

/**
 * Preenche um TextArea 1
 */
function PrimeiroPreenche ()
{
    /* Inicio da performance */
    var inicio = performance.now ();

    /* Operacao */
    for (var i = 0; i < 50000; i++) 
    {
        document.getElementById ("txt_acesso_1").value += i;
    }

    /* Final da performance */
    var termino = performance.now ();

    return ((termino - inicio) / 1000).toFixed (4);
}

/**
 * Preenche um TextArea 2
 */
function SegundoPreenche ()
{
    /* Inicio da performance */
    var inicio = performance.now ();

    var textarea = document.getElementById ("txt_acesso_2");

    /* Operacao */
    for (var i = 0; i < 50000; i++) 
    {
        textarea.value += i;
    }

    /* Final da performance */
    var termino = performance.now ();

    return ((termino - inicio) / 1000).toFixed (4);
}


window.onload = function ()
{
    document.getElementById ("btn_primeiro_loop").onclick = function ()
    {
        var texto = "Contando de 0 à 50.000 demorou ... ".concat (PrimeiroLoop ()).concat (" segundos.");
        document.getElementById ("demo1").innerHTML = texto;
    };

    document.getElementById ("btn_segundo_loop").onclick = function ()
    {
        var texto = "Contando de 0 à 50.000 demorou ... ".concat (SegundoLoop ()).concat (" segundos.");
        document.getElementById ("demo2").innerHTML = texto;
    };

    document.getElementById ("btn_primeiro_acesso_dom").onclick = function ()
    {
        var texto = "Preenchendo com valores de 0 à 50.000 demorou ... "
                    .concat (PrimeiroPreenche ()).concat (" segundos.");
        document.getElementById ("demo3").innerHTML = texto;
    };

    document.getElementById ("btn_segundo_acesso_dom").onclick = function ()
    {
        var texto = "Preenchendo com valores de 0 à 50.000 demorou ... "
                    .concat (SegundoPreenche ()).concat (" segundos.");
        document.getElementById ("demo4").innerHTML = texto;
    };
}