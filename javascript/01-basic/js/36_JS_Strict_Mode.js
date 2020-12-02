"use strict";

/* "strict mode" = Nos permite nao usar variaveis nao declaradas */

window.onload = function ()
{
    try  
    {
        /* Variavel nao declarada */
        x = 1000;
    } 
    catch (error) 
    {
        document.getElementById ("txt_codigo").value = error.message;
    }
};
