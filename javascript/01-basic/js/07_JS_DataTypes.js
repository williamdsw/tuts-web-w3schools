
/* ===== EXEMPLO DE TIPO DE DADOS ===== */

function DataTypes ()
{
    /* Exemplos */
    var numero = 156;
    var string = "Exemplo de String";
    var objeto = 
    {
        nome: "Trent",
        sobrenome: "Reznor"
    };
    var array = ["Corinthians", "Palmeiras", "Santos", "São Paulo"];
    var funcao = function ()
    {
        console.log ("Funcao interna");
    };
    
    /* Printando valores */
    console.log ("==== VARIAVEIS ====");
    console.log (numero);
    console.log (string);
    console.log (objeto);
    console.log (array);

    funcao ();
    
    /* Printando tipo */
    console.log ("==== TIPOS ====");
    console.log (typeof numero);
    console.log (typeof string);
    console.log (typeof objeto);
    console.log (typeof array);
    console.log (typeof funcao);
}

DataTypes ();