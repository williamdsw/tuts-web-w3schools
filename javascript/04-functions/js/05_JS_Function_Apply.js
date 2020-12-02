/* ===== EXEMPLOS DE USOS DE "APPLY" DE FUNCOES ===== */

/* Exemplo de objeto "abstrato" */
var banda = 
{
    getDescricao: function (nome, genero, ano_fundacao, numero_albuns)
    {
        return nome + " é uma banda do gênero " + genero + ", fundada em " + ano_fundacao + 
               " e possui " + numero_albuns + " albuns em sua discografia.";

    }
}



window.onload = function ()
{
    /* "obj.function.apply (obj)" = Tem funcao semelhante a "call", com a diferenca que possiveis
     *                              argumentos devem ser passados em um array */
    /* ===== EXEMPLOS DE IMPLEMENTACAO DE APPLY ===== */
    /* Necessario passar "null" caso nao precise de um objeto */
    var megadeth = banda.getDescricao.apply (null, ["Megadeth", "Thrash Metal", 1983, 15]);
    var iron_maiden = banda.getDescricao.apply (null, ["Iron Maiden", "Heavy Metal", 1975, 16]);
    var helloween = banda.getDescricao.apply (null, ["Helloween", "Power Metal", 1984, 19]);
    var venom = banda.getDescricao.apply (null, ["Venom", "Black Metal", 1979, 15]);
    
    /* Pega div */
    var div = document.getElementsByTagName ("div")[0];

    /* ===== DEFINE CONTEUDO ===== */
    div.innerHTML += "<p>".concat (megadeth).concat ("</p>");
    div.innerHTML += "<p>".concat (iron_maiden).concat ("</p>");
    div.innerHTML += "<p>".concat (helloween).concat ("</p>");
    div.innerHTML += "<p>".concat (venom).concat ("</p>");
};