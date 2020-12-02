/* ===== EXEMPLOS DE VALIDACOES DE INPUT ===== */

/**
 * Exemplos de validacoes
 */
function Validacao ()
{
    try 
    {
        /* Pegando paragrafo da mensagem */
        var p_mensagem = document.getElementById ("p_mensagem");

        /* Pegando input a ser validado */
        var input = document.getElementById ("txt_numero");

        /* ### WILL VALIDATE ### */
        /* "willValidate" = Retorna se ira validar ou nao (required) */
        var vai_validar = (input.willValidate ? "Vai validar" : "Não vai validar");
        //alert (vai_validar);


        /* ### CHECK VALIDITY ### */
        /* "checkValidity ()" = Verifica validacao do campo */
        if (!input.checkValidity ())
        {
            /* "validationMessage" = Retorna mensagem de validacao */
            throw input.validationMessage;
        }


        /* ### VALIDITY ### */
        /* "patternMismatch" = Quando o valor nao passa pelo pattern do HTML5 */
        if (input.validity.patternMismatch)
        {
            throw "Não é o valor esperado";
        }

        /* "rangeOverflow" = Quando o valor for maior que o "max" */
        if (input.validity.rangeOverflow)
        {
            throw "É maior que 300";
        }

        /* "rangeUnderflow" = Quando o valor for menor que o "min" */
        if (input.validity.rangeUnderflow)
        {
            throw "É menor que 100";
        }

        /* "valueMissing" = Quando o campo for required e o valor for vazio */
        if (input.validity.valueMissing)
        {
            throw "Defina um valor";
        }
        
        /* Outros... */
    } 
    catch (error) 
    {
        p_mensagem.innerHTML = error;
    }
}