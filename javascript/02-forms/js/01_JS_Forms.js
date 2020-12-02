/* ===== EXEMPLOS DE VALIDACOES DE FORM ===== */


/**
 * Exemplo de validacao campo de form
 */
function PrimeiraValidacao ()
{
    /* "document.forms" = propriedade que retorna todos forms da pagina
     * Nesse caso pegando valor pelo nome do form e do campo */
    var value = document.forms["my_form"]["txt_name"].value;

    /* Verificacao */
    if (value == "")
    {
        alert ("Preencha o nome");
        return false;
    }
}

/**
 * Exemplo de validacao campo sem form
 */
function ValidacaoInput ()
{
    try 
    {
        /* Pegando paragrafo */
        var p = document.getElementById ("p_retorno");

        /* Pegando valor do input */
        var valor = document.querySelector ("input[name=txt_number]").value;

        /* Convertendo para numero */
        var numerico = Number (valor);

        /* Verificacoes */
        if (valor == "")
        {
            throw "Nada informado";
        }
        else if (isNaN (numerico))
        {
            throw "Não é um valor numérico";
        }
        else if (numerico < 1)
        {
            throw "É menor que 1";
        }
        else if (numerico > 10)
        {
            throw "É maior que 10";
        }
        else 
        {
            throw "Seu número multiplicado por ele mesmo : ".concat (numerico * numerico);
        }
    } 
    catch (error) 
    {
        p.innerHTML = error;
    }
}