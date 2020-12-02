/* ===== EXEMPLOS DE FUNCOES IMPLEMENTADAS NO ECMASCRIPT 5 ===== */

/* Exemplo objeto */
var pessoa = 
{
    nome: "William",
    sobrenome: "Santos",
    lingua_nativa: "PT-BR",
    idade: 24
};

window.onload = function ()
{
    /* "Object.defineProperty (obj, name, value);" =  Define uma nova propriedade do objeto */
    Object.defineProperty (pessoa, "nacionalidade", {value: "Brasileiro"});

    /* Exemplo de metadata:
     * "enumerable" = Define se a propriedade pode ser enumerada
     * "configurable" = Define se a propriedade pode ser configurada
     * "writable" = Define se a propriedade pode ter seu valor redefinido */
    Object.defineProperty (pessoa, "sobrenome", 
    {
        enumerable: true,
        configurable: false,
        writable: false
    });

    /* Adicionando GETTER */
    Object.defineProperty (pessoa, "getNomeCompleto", 
    {
        get: function () { return this.nome + " "  + this.sobrenome; }
    });

    /* Adicionando SETTER */
    Object.defineProperty (pessoa, "setIdade", 
    {
        set: function (value) { this.idade = value; }
    });

    /* Reutilizando */
    pessoa.setIdade = 25;

    /* Pega propriedades e propriedades enumeradas do objeto */
    let propriedades = Object.getOwnPropertyNames (pessoa);
    let enumeradas = Object.keys (pessoa);


    /* PRINTA */
    let mensagem = "";
    mensagem += "<p>NOME: ".concat (pessoa.nome).concat ("</p>");
    mensagem += "<p>SOBRENOME: ".concat (pessoa.sobrenome).concat ("</p>");
    mensagem += "<p>NOME COMPLETO: ".concat (pessoa.getNomeCompleto).concat ("</p>");
    mensagem += "<p>NACIONALIDADE: ".concat (pessoa.nacionalidade).concat ("</p>");
    mensagem += "<p>LINGUA NATIVA: ".concat (pessoa.lingua_nativa).concat ("</p>");
    mensagem += "<p>IDADE: ".concat (pessoa.idade).concat ("</p>");
    mensagem += "<p>PROPERTIES: ".concat (propriedades.join (" , ")).concat ("</p>");
    mensagem += "<p>ENUMERADAS: ".concat (enumeradas.join (" , ")).concat ("</p>");

    /* Joga na div */
    document.getElementById ("div_descricao").innerHTML = mensagem;
};