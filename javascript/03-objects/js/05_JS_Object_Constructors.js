/* ===== EXEMPLOS DE CONSTRUTORES DE OBJETO ===== */

/**
 * Exemplo de construtor de objeto (Classe)
 * @param {string} p_nome 
 * @param {string} p_desenvolvedor 
 * @param {string} p_fabricante 
 * @param {string} p_familia 
 * @param {number} p_geracao 
 * @param {number} p_preco_inicial 
 * @param {number} p_ano_lancamento 
 */
function VideoGameConsole (p_nome, p_desenvolvedor, p_fabricante, p_familia, p_geracao, p_preco_inicial, p_ano_lancamento)
{
    /* Propriedades */
    this.nome = p_nome;
    this.desenvolvedor = p_desenvolvedor;
    this.fabricante = p_fabricante;
    this.familia = p_familia;
    this.geracao = p_geracao;
    this.preco_inicial = p_preco_inicial;
    this.ano_lancamento = p_ano_lancamento;

    /* GETTERS */
    this.getNome = function () { return this.nome; };
    this.getDesenvolvedor = function () { return this.desenvolvedor; };
    this.getFabricante = function () { return this.fabricante; };
    this.getFamilia = function () { return this.familia; };
    this.getGeracao = function () { return this.geracao; };
    this.getPrecoInicial = function () { return this.preco_inicial; };
    this.getAnoLancamento = function () { return this.ano_lancamento; };

    /* SETTERS */
    this.setNome = function (value) { this.nome = value; };
    this.setDesenvolvedor = function (value) { this.desenvolvedor = value; };
    this.setFabricante = function (value) { this.fabricante = value; };
    this.setFamilia = function (value) { this.familia = value; };
    this.setGeracao = function (value) { this.geracao = value; };
    this.serPrecoInicial = function (value) { this.preco_inicial = value; };
    this.setAnoLancamento = function (value) { this.ano_lancamento = value; };
}


/**
 * Quando carrega a pagina
 */
window.onload = function ()
{
    /* Novas instancias */
    var ps4 = new VideoGameConsole ("PlayStation 4", "Sony Interactive Entertainment", "Sony", "PlayStation", 8, 399.99, 2013);
    var xboxOne = new VideoGameConsole ("Xbox One", "Microsoft", "Microsoft", "Xbox", 8, 499.99, 2013);
    var wiiU = new VideoGameConsole ("Wii U", "Nintendo", "Nintendo", "Wii", 8, 299.99, 2012);

    /* Evento onclick */
    document.getElementById ("btn_ps4").addEventListener ("click", function ()
    {
        /* Mensagem */
        let mensagem = "<p>NOME : ".concat (ps4.getNome ()).concat ("</p>");
        mensagem += "<p>DESENVOLVEDOR : ".concat (ps4.getDesenvolvedor ()).concat ("</p>");
        mensagem += "<p>FABRICANTE : ".concat (ps4.getFabricante ()).concat ("</p>");
        mensagem += "<p>FAMILIA : ".concat (ps4.getFamilia ()).concat ("</p>");
        mensagem += "<p>GERAÇÃO : ".concat (ps4.getGeracao ()).concat ("</p>");
        mensagem += "<p>PREÇO INICIAL : ".concat (ps4.getPrecoInicial ()).concat ("</p>");
        mensagem += "<p>ANO DE LANÇAMENTO : ".concat (ps4.getAnoLancamento ()).concat ("</p>");

        /* Joga na div */
        document.getElementById ("div_descricao").innerHTML = mensagem;                           
    });

    /* Evento onclick */
    document.getElementById ("btn_xbox1").addEventListener ("click", function ()
    {
        /* Mensagem */
        let mensagem = "<p>NOME : ".concat (xboxOne.getNome ()).concat ("</p>");
        mensagem += "<p>DESENVOLVEDOR : ".concat (xboxOne.getDesenvolvedor ()).concat ("</p>");
        mensagem += "<p>FABRICANTE : ".concat (xboxOne.getFabricante ()).concat ("</p>");
        mensagem += "<p>FAMILIA : ".concat (xboxOne.getFamilia ()).concat ("</p>");
        mensagem += "<p>GERAÇÃO : ".concat (xboxOne.getGeracao ()).concat ("</p>");
        mensagem += "<p>PREÇO INICIAL : ".concat (xboxOne.getPrecoInicial ()).concat ("</p>");
        mensagem += "<p>ANO DE LANÇAMENTO : ".concat (xboxOne.getAnoLancamento ()).concat ("</p>");

        /* Joga na div */
        document.getElementById ("div_descricao").innerHTML = mensagem;                           
    });

    /* Evento onclick */
    document.getElementById ("btn_wiiu").addEventListener ("click", function ()
    {
        /* Mensagem */
        let mensagem = "<p>NOME : ".concat (wiiU.getNome ()).concat ("</p>");
        mensagem += "<p>DESENVOLVEDOR : ".concat (wiiU.getDesenvolvedor ()).concat ("</p>");
        mensagem += "<p>FABRICANTE : ".concat (wiiU.getFabricante ()).concat ("</p>");
        mensagem += "<p>FAMILIA : ".concat (wiiU.getFamilia ()).concat ("</p>");
        mensagem += "<p>GERAÇÃO : ".concat (wiiU.getGeracao ()).concat ("</p>");
        mensagem += "<p>PREÇO INICIAL : ".concat (wiiU.getPrecoInicial ()).concat ("</p>");
        mensagem += "<p>ANO DE LANÇAMENTO : ".concat (wiiU.getAnoLancamento ()).concat ("</p>");

        /* Joga na div */
        document.getElementById ("div_descricao").innerHTML = mensagem;                           
    });
};