/* ===== EXEMPLOS DE INVOCACAO DE FUNCOES ===== */


/**
 * Exemplo de funcao 
 * @param {*} a 
 * @param {*} b 
 */
function PrimeiroExemplo (a, b)
{
    return a * b;
}


/**
 * Exemplo de funcao
 * @param {*} c 
 * @param {*} d 
 * @param {*} e 
 */
function SegundoExemplo (c, d, e)
{
    return c + d + e;
}


/**
 * Exemplo de funcao
 */
function TerceiroExemplo ()
{
    return this;
}


/* Exemplo de funcao dentro de objeto */
var time = 
{
    nome: "São Paulo",
    sigla: "SPFC",
    ano_fundacao: 1935,
    nacionalidade: "brasileiro",
    getDescricao: function ()
    {
        return `${this.nome} (${this.sigla}) é um time ${this.nacionalidade} fundado em ${this.ano_fundacao}.`;
    }
};


/* Exemplo de funcao com construtor (classe?) */
function QuintoExemplo (param1, param2)
{
    this.primeiro_parametro = param1;
    this.segundo_parametro = param2;
}


window.onload = function ()
{
    /* ===== EXEMPLO DE INVOCACOES ===== */
    var multiplicacao = PrimeiroExemplo (10, 5);
    var soma = window.SegundoExemplo (10, 5, 8);
    var funcao = TerceiroExemplo ();
    var descricao = time.getDescricao ();
    var obj = new QuintoExemplo ("Primeiro Parâmetro", "Segundo Parâmetro");
    var param1 = obj.primeiro_parametro;

    /* Pega div */
    var div = document.getElementsByTagName ("div")[0];

    /* ===== DEFINE CONTEUDO ===== */
    div.innerHTML += "<p>Conteúdo da primeira função : ".concat (multiplicacao).concat ("</p>");
    div.innerHTML += "<p>Conteúdo da segunda função : ".concat (soma).concat ("</p>");
    div.innerHTML += "<p>Conteúdo da terceira função : ".concat (funcao).concat ("</p>");
    div.innerHTML += "<p>Conteúdo da quarta função : ".concat (descricao).concat ("</p>");
    div.innerHTML += "<p>Propriedade da função com Construtor : ".concat (param1).concat ("</p>");
};