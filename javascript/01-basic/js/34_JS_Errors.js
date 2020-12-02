/* ===== EXEMPLO DE TRY-CATCH-FINALLY-THROW ===== */

/* TIPOS DE ERROS */
/**
 * EvalError	  = Um erro ocorreu na funcao eval ()
 * RangeError	  = Um erro com numero fora de alcance ocorreu
 * ReferenceError =	Uma referencia ilegal aconteceu
 * SyntaxError	  = Um erro de sintaxe aconteceu
 * TypeError	  = Um erro de tipo aconteceu
 * URIError       = Um erro aconteceu na funcao encodeURI ()
 */

/**
 * Exemplo de funcionamento try-catch
 */
function triggerError ()
{
    try 
    {
        /* Funcao que nao existe ou comando errado */
        addAlert ("Executou");
    } 
    catch (error) 
    {
        var message = "Nome : ".concat (error.name);
        message += "<p>Mensagem : ".concat (error.message).concat ("</p>")

        document.getElementById ("error_1").innerHTML = message;
    }
}

/**
 * Exemplo de funcionamento throw
 */
function triggerThrow ()
{
    /* Pega input */
    var input = document.getElementById ("txtNumber");

    /* Pega paragrafo de erro */
    var p = document.getElementById ("error_2");

    try 
    {
        /* "throw" = nesse caso pode redefinir a mensagem de erro do catch */
        /* Verificacoes */
        if (input.value == "")
        {
            throw  "Vazio";
        }

        if (isNaN (input.value))
        {
            throw "Não é um número";
        }

        input.value = Number (input.value);

        if (input.value < 10)
        {
            throw "Número muito baixo";
        }
        else if (input.value > 100)
        {
            throw "Número muito alto";
        }
    } 
    catch (error) 
    {
        p.innerHTML = error;
    }
    finally
    {
        input.value = "";
    }
}

