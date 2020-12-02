/* ===== EXEMPLOS DE 'THIS' ===== */

/* "this" = Dependendo do contexto, representa o "proprietario" do escopo onde e colocado */

/* ### Aqui representa o objeto "Window" ### */
var x = this;

/* ### Aqui representa a propria funcao ### */
var funcao = function ()
{
    return this;
}

/* ### Aqui representa o proprio objeto ### */
var objeto = 
{
    nome: "Teste",

    getInstancia: function ()
    {
        return this;
    },

    getNome : function ()
    {
        return this.nome;
    },
};


window.onload = function ()
{
    /* Pegando elemento */
    var textarea = document.getElementById ("txt_codigo");

    /* Concatenando valores */
    textarea.value += "\n this GLOBAL = ".concat (x);
    textarea.value += "\n this funcao = ".concat (funcao);
    textarea.value += "\n this objeto = ".concat (objeto.getInstancia ());

    /* Aqui representa o proprio elemento */
    document.getElementById ("btn").addEventListener ("click", function ()
    {
        this.style.display = "none";
    });
};