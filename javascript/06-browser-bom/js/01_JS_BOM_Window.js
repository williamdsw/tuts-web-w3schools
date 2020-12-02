/* ===== EXEMPLOS DE UTILIZACAO DE PARAMETROS / METODOS BOM ===== */

/* Solucao para pegar altura / largura do Navegador */
var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;


/**
 * Quando carregar a janela
 */
window.addEventListener ("load", function ()
{
    /* Conteudo */
    var message = "Tamanho: ".concat (width).concat ("px").concat (" x ").concat (height).concat ("px");
    document.getElementById ("demo").innerHTML = message;

    /* EVENTOS */
    var janela = window;

    document.getElementById ("btn_open").addEventListener ("click", function ()
    {
        janela = window.open (document.URL, "", "width=300px height=300px");
    });

    document.getElementById ("btn_close").addEventListener ("click", function ()
    {
        if (janela.self !== null)
        {
            janela.close ();
        }
        else
        {
            window.close ();
        }
    });

    document.getElementById ("btn_move").addEventListener ("click", function ()
    {
        if (janela.self !== null)
        {
            janela.moveTo (300, 500);
            janela.focus ();
        }
        else
        {
            window.moveTo (300, 500);
            window.focus ();
        }
    });

    document.getElementById ("btn_resize").addEventListener ("click", function ()
    {
        if (janela.self !== null)
        {
            janela.resizeTo (800, 800);
            janela.focus ();
        }
        else
        {
            window.resizeTo (800, 800);
            window.focus ();
        }
    });

});


/**
 * Quando redimensionar a janela
 */
window.addEventListener ("resize", function ()
{
    /* Redefinindo */
    width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    /* Conteudo */
    var message = "Tamanho: ".concat (width).concat ("px").concat (" x ").concat (height).concat ("px");
    document.getElementById ("demo").innerHTML = message;
});