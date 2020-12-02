/* ===== EXEMPLOS DE METODOS DE OBJETO ===== */

window.onload = function ()
{
    /* Exemplo de objeto */
    var banda = 
    {
        /* Propriedades */
        nome: "Iron Maiden",
        genero: "Heavy Metal",
        ano_fundacao: 1975,
        nacionalidade: "britânica",

        /* funcao */
        descricao: function ()
        {
            return this.nome + " é uma banda " + this.nacionalidade + " do gênero " +
                   this.genero + ", formada em " + this.ano_fundacao + ".";
        }
    }

    /* Evento onclick */
    document.getElementsByTagName ("button")[0].addEventListener ("click", function ()
    {
        document.getElementById ("p_descricao").innerHTML = banda.descricao ();
    });
};