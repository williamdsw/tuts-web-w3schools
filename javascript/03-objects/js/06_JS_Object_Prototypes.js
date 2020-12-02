/* ===== EXEMPLOS DE PROTOYPE DE OBJETO ===== */

/**
 * Exemplo de objeto (classe)
 * @param {string} p_cod_iso 
 * @param {string} p_pais 
 * @param {number} p_inflacao 
 * @param {string} p_sub_unidade 
 * @param {string} p_simbolo 
 * @param {string[]} p_moedas 
 * @param {string[]} p_notas 
 * @param {string} p_banco_central 
 * @param {string} p_fabricante 
 */
function Moeda (p_cod_iso, p_pais, p_inflacao, p_sub_unidade, p_simbolo, p_moedas, p_notas, p_banco_central, p_fabricante)
{
    /* propriedades */
    this.codigo_iso = p_cod_iso;
    this.pais = p_pais;
    this.inflacao = p_inflacao;
    this.sub_unidade = p_sub_unidade;
    this.simbolo = p_simbolo;
    this.moedas = p_moedas;
    this.notas = p_notas;
    this.banco_central = p_banco_central;
    this.fabricante = p_fabricante;
}


/**
 * Quando carregar a pagina
 */
window.onload = function ()
{
    /* Novas instancias */
    var real = new Moeda ("BRL", "Brasil", 4.05, "1/100 Centavos", "R$", 
                         ["R$ 0,01", "R$ 0,05", "R$ 0,10", "R$ 0,25", "R$ 0,50", "R$ 1"],
                         ["R$ 1", "R$ 2", "R$ 5", "R$ 10", "R$ 20", "R$ 50", "R$ 100"],
                         "Banco Central do Brasil", "Casa da Moeda do Brasil");

    /* Conteudo da div */
    var mensagem = "";
    mensagem += "<p>CÓDIGO ISO 4217: ".concat (real.codigo_iso).concat ("</p>");
    mensagem += "<p>PAÍS: ".concat (real.pais).concat ("</p>");
    mensagem += "<p>INFLAÇÃO: ".concat (real.inflacao).concat ("%</p>");
    mensagem += "<p>SUB-UNIDADE: ".concat (real.sub_unidade).concat ("</p>");
    mensagem += "<p>SÍMBOLO: ".concat (real.simbolo).concat ("</p>");
    mensagem += "<p>MOEDAS: ".concat (real.moedas.join (" , ")).concat ("</p>");
    mensagem += "<p>NOTAS: ".concat (real.notas.join (" , ")).concat ("</p>");
    mensagem += "<p>BANCO CENTRAL: ".concat (real.banco_central).concat ("</p>");
    mensagem += "<p>FABRICANTE: ".concat (real.fabricante).concat ("</p>");

    /* Jogando na div */
    document.getElementById ("div_descricao").innerHTML = mensagem;

    /* Setando onclick */
    document.getElementById ("btn_prop").addEventListener ("click", function ()
    {
        /* Verifica se ja tem propriedade para nao ficar adicionando... */
        if (!Moeda.prototype.hasOwnProperty ("plural"))
        {
            /* Adicionando propriedade */
            Moeda.prototype.plural = "Reais";

            /* Adicionando funcao */
            Moeda.prototype.getPlural = function () { return this.plural; };

            /* Conteudo da div */
            mensagem = "<p>PLURAL: ".concat (real.getPlural ()).concat ("</p>");

            /* Jogando na div */
            document.getElementById ("div_descricao").innerHTML += mensagem;
        }
    });
};