/* ===== EXEMPLOS DE ITERACOES DE ARRAYS ===== */

window.onload = function (e)
{
    /* Array de numeros aleatorios */
    var numeros = preencheArray ();
    console.log (numeros);


    /* "forEach (callback)" = Itera sobre os valores do array utilizando funcao de callback  */
    console.log ("Utilizando forEach (callback)");
    numeros.forEach ((value, index) => 
    {
        var str = "Index = ".concat (index).concat (" Value = ").concat (value);
        console.log (str);
    });


    /* "map (callback)" = Itera sobre os valores do array utilizando funcao de callback  */
    console.log ("Utilizando map (callback)");
    numeros.map (function (value, index)
    {
        var str = "Index = ".concat (index).concat (" Value = ").concat (value);
        console.log (str);
    });


    /* "filter (callback)" = Cria um novo array com valores que passaram por uma condicao  */
    console.log ("Utilizando filter (callback)");
    var maiorQue25 = numeros.filter (myFilter);
    console.log (maiorQue25);


    /* "reduce (callback)" = Itera sobre os itens do array para produzir (ou reduzir) um valor unitario
                             Le os valores da esquerda para direita  */
    console.log ("Utilizando reduce (callback) #1");
    var soma = numeros.reduce (myReduce);
    console.log (soma);


    /* Outro exemplo de reduce */
    console.log ("Utilizando reduce (callback) #2");
    var multiplicacao = numeros.reduce (function (total, value)
    {
        return total * value;
    });
    console.log (multiplicacao);
    
    
    /* "reduceRight (callback)" = Itera sobre os itens do array para produzir (ou reduzir) um valor unitario
                                  Le os valores da direita para esquerda  */
    console.log ("Utilizando reduceRight (callback) #1");
    var substracao = numeros.reduceRight (myReduceRight);
    console.log (substracao);
    

    /* Outro exemplo de reduceRight  */
    console.log ("Utilizando reduceRight (callback) #2");
    var divisao = numeros.reduceRight ((total, value) =>
    {
        return total / value;
    });
    console.log (divisao);
    
    
    /* "every (callback)" = Retorna se TODOS os itens passam por uma condicao */
    console.log ("Utilizando every (callback)");
    var sao_menores_que_10 = numeros.every (myEvery);
    console.log (sao_menores_que_10);
    
    
    /* "some (callback)" = Retorna se ALGUM dos itens passa pela condicao */
    console.log ("Utilizando some (callback)");
    var algum_igual_44 = numeros.some (mySome);
    console.log (algum_igual_44);
    
    
    /* "find (callback)" = Retorna o primeiro item que passar uma condicao */
    console.log ("Utilizando find (callback)");
    var primeiro = numeros.find (myFilter);
    console.log (primeiro);
    
    
    /* "findIndex (callback)" = Retorna o indice do primeiro item que passar uma condicao */
    console.log ("Utilizando findIndex (callback)");
    var primeiro_indice = numeros.findIndex (myFilter);
    console.log (primeiro_indice);

    

    /* Array de Strings */
    var campeoes_libertadores = ["São Paulo", "Internacional", "Internacional", "Santos", "Corinthians", "Atlético-MG", "Grêmio"];
    console.log (campeoes_libertadores);

    /* "indexOf (value)" = Retorna o indice da primeira ocorrencia de um valor no array */
    var indexOf = campeoes_libertadores.indexOf ("Santos");
    console.log ("indexOf Santos = " + indexOf);

    /* "lastIndexOf (value)" = Retorna o indice da ultima ocorrencia de um valor no array */
    var lastIndexOf = campeoes_libertadores.lastIndexOf ("Internacional");
    console.log ("indexOf Internacional = " + lastIndexOf);
};


/**
 * Preenche um array de Integers aleatorios entre 1~50 sem repetir
 */
function preencheArray ()
{
    var array = [];

    for (var i = 0; i < 10; i++)
    {
        var random = Math.ceil (Math.random () * 50);

        if (array.indexOf (random) === -1)
        {
            array.unshift (random);
        }
        else
        {
            i--;
        }
    }

    return array;
}


/**
 * Utilizando filter do array
 * "value" = valor do item do array (opc)
 * "index" = indice do item do array (opc)
 * "array" = array em questao
 */
function myFilter (value, index, array)
{
    return value > 25
}

/**
 * Utilizando reduceRight do array
 * "total" = valor total do array (opc)
 * "value" = valor do item do array (opc)
 * "index" = indice do item do array (opc)
 * "array" = array em questao
 */
function myReduce (total, value, index, array)
{
    return total + value;
}

/**
 * Utilizando reduceRight do array
 * "total" = valor total do array (opc)
 * "value" = valor do item do array (opc)
 * "index" = indice do item do array (opc)
 * "array" = array em questao
 */
function myReduceRight (total, value, index, array)
{
    return total - value;
}

/**
 * Utilizando every do array
 * "value" = valor do item do array (opc)
 * "index" = indice do item do array (opc)
 * "array" = array em questao
 */
function myEvery (value, index, array)
{
    return value < 10;
}

/**
 * Utilizando some do array
 * "value" = valor do item do array (opc)
 * "index" = indice do item do array (opc)
 * "array" = array em questao
 */
function mySome (value, index, array)
{
    return value == 44;
}

/**
 * Utilizando find do array
 * "value" = valor do item do array (opc)
 * "index" = indice do item do array (opc)
 * "array" = array em questao
 */
function myFind (value, index, array)
{
    return value > 30;
}

/**
 * Utilizando find do array
 * "value" = valor do item do array (opc)
 * "index" = indice do item do array (opc)
 * "array" = array em questao
 */
function myFindIndex (value, index, array)
{
    return value > 30;
}