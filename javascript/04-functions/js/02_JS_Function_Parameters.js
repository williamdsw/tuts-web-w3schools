/* ===== EXEMPLOS DE PARAMETROS DE FUNCOES ===== */

/**
 * Exemplo de parametros / argumentos da funcao
 * @param {*} param1 
 * @param {*} param2 
 * @param {*} param3 
 */
function Funcao (param1, param2, param3)
{
    return param1 * param2 * param3;
}

/**
 * Exemplo de funcao com parametro pre definindo (antes ES2015)
 */
function Exemplo1 (param1)
{
    if (param1 === undefined)
    {
        param1 = 0;
    }
}

/**
 * Exemplo de funcao com parametro pre-definindo (ES2015)
 */
function Exemplo2 (param1 = 10, param2 = 15)
{
    return param1 * param2;
}