/* ===== EXEMPLOS DE 'CONST' ===== */

/* "const" = Define um tipo de variavel que seu valor nao pode ser redefindo */

/* Exemplo */
const campeao = "Palmeiras";

window.onload = function ()
{
    /* Pegando elemento */
    var textarea = document.getElementById ("txt_codigo");

    try  
    {
        /* Concatenando valores */
        textarea.value += "\n const campeao = ".concat (campeao);

        /* Tentando redefinir... */
        campeao = "São Paulo";

        /* Concatenando valores */
        textarea.value += "\n campeao redefinido = ".concat (campeao);
    } 
    catch (error) 
    {
        textarea.value += "\n erro: ".concat (error.message);
    }
};