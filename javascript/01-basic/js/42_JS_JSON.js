/* ===== EXEMPLOS DE JSON ===== */

/* JSON e uma forma de armazenar e transportar dados.
 * E bastante utilizado para mandar informacoes para o servidor e/ou receber informacoes do mesmo */

 /* Exemplo apenas 1 item */
 var single_json_str = '{"nome": "Nine Inch Nails", "genero": "Industrial", "ano_fundacao": "1987"}';
 var single_json_parsed = JSON.parse (single_json_str);

 /* Exemplo varios itens */
 var array_json_str = `{ "times" : 
                         [
                            {"nome": "São Paulo", "sigla": "SPFC", "cidade": "São Paulo"},
                            {"nome": "Palmeiras", "sigla": "SEP", "cidade": "São Paulo"},
                            {"nome": "Corinthians", "sigla": "SCCP", "cidade": "São Paulo"},
                            {"nome": "Santos", "sigla": "SFC", "cidade": "Santos"}
                         ]}`;
var array_json_parsed = JSON.parse (array_json_str);

/* Exemplo de objeto para json */
var objeto = 
[
    {nome: "Albert Einstein", profissao: "Físico", ano_nascimento: "1879", ano_morte: "1955"},
    {nome: "Nikola Tesla", profissao: "Inventor", ano_nascimento: "1856", ano_morte: "1943"},
    {nome: "Isaac Newton", profissao: "Físico", ano_nascimento: "1643", ano_morte: "1727"},
    {nome: "Galileu Galilei", profissao: "Astrônomo", ano_nascimento: "1564", ano_morte: "1642"},
    {nome: "Stephen Hawking", profissao: "Físico", ano_nascimento: "1942", ano_morte: "2018"}
];
var objeto_json_str = JSON.stringify (objeto);


 window.onload = function ()
 {
    /* Pegando elemento */
    var textarea = document.getElementById ("txt_codigo");

    /* Concatenando valores */
    textarea.value += "===== JSON singular no formato String =====";
    textarea.value += "\n ".concat (single_json_str);
    
    textarea.value += "\n\n===== JSON singular convertido para objeto =====";
    textarea.value += "\n ".concat (single_json_parsed);

    /* Printando propriedades e valores */
    for (const prop in single_json_parsed) 
    {
        var texto = `\nPropriedade: ${prop} | Valor: ${single_json_parsed[prop]}`;

        textarea.value += texto;
    }

    /* Concatenando valores */
    textarea.value += "\n\n===== JSON array no formato String =====";
    textarea.value += "\n ".concat (array_json_str);

    textarea.value += "\n\n===== JSON array convertido para objeto =====";
    textarea.value += "\n ".concat (array_json_parsed);

    /* Tem que iterar pelas propriedades do objeto primeiro */
    for (const prop in array_json_parsed)
    {
        /* Depois iterar pelo array */
        array_json_parsed[prop].forEach ((item, index) => 
        {
            textarea.value += `\n ### Item ${index + 1} do Array do JSON ###`;

            /* E depois iterar pelos objetos armazenados dentro do array */
            for (const subProp in item)
            {
                var texto = `\n ${subProp} : ${item[subProp]}`;
                textarea.value += texto;
            }
        });
    }

    /* Concatenando valores */
    textarea.value += "\n\n===== Objeto convertido para JSON =====";
    textarea.value += "\n ".concat (objeto_json_str);
 };