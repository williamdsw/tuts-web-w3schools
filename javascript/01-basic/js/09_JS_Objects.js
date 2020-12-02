
/* ===== EXEMPLO DE OBJETO ===== */

var ps4 = 
{
    /* Propriedades */
    nome: "PlayStation 4",
    marca: "Sony",
    ano_lancamento: 2013,
    preco: 3999.99,

    /* Funcoes */
    getNome: function ()
    {
        return this.nome;
    }, 

    getMarca: function ()
    {
        return this.marca;
    },

    getAnoLancamento: function ()
    {
        return this.ano_lancamento;
    },

    getPreco: function ()
    {
        return this.preco;
    }
};

/* ===== Mostrando valores ===== */

/* Objeto */
console.log (ps4);

/* Pegando propriedade 1 */
console.log ("ps4.nome = " + ps4.nome);

/* Pegando propriedade 2 */
console.log ("ps4['marca'] = " + ps4["marca"]);

/* Pegando funcao 1 */
console.log ("ps4.getAnoLancamento () = " + ps4.getAnoLancamento ());

/* Pegando funcao */
console.log ("ps4.getPreco () = " + ps4.getPreco ());

/* Modificando valores */
function getInfo ()
{
    let nome = document.getElementById ("nome");
    nome.innerHTML += ps4.getNome ();

    let marca = document.getElementById ("marca");
    marca.innerHTML += ps4.getMarca ();

    let ano_lancamento = document.getElementById ("ano_lancamento");
    ano_lancamento.innerHTML += ps4.getAnoLancamento ();

    let preco = document.getElementById ("preco");
    preco.innerHTML += ps4.getPreco ();
}