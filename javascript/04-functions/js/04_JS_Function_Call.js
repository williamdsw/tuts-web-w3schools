/* ===== EXEMPLOS DE USOS DE "CALL" DE FUNCOES ===== */


/* Exemplo de "abstrato" */
var time = 
{
    getDescricao: function ()
    {
        return `${this.nome} (${this.sigla}) é um clube ${this.nacionalidade} fundado em ${this.ano_fundacao} na cidade de ${this.cidade})`;
    }
};


/* 1º Exemplo de "implementacao" */
var sao_paulo = 
{
    nome: "São Paulo",
    sigla: "SPFC",
    nacionalidade: "brasileiro",
    ano_fundacao: 1935,
    cidade: "São Paulo"
}


/* 2º Exemplo de "implementacao" */
var boca_juniors = 
{
    nome: "Boca Juniors",
    sigla: "CABJ",
    nacionalidade: "argentino",
    ano_fundacao: 1905,
    cidade: "Buenos Aires"
}


/* 3º Exemplo de "implementacao" */
var penarol = 
{
    nome: "Peñarol",
    sigla: "PEN",
    nacionalidade: "uruguaio",
    ano_fundacao: 1891,
    cidade: "Montevidéu"
}


/* 4º Exemplo de "implementacao" */
var olimpia = 
{
    nome: "Olimpia",
    sigla: "OLI",
    nacionalidade: "paraguaio",
    ano_fundacao: 1902,
    cidade: "Assunção"
}


window.onload = function ()
{
    /* "obj.function.call (obj)" = E tipo implementar uma funcao da classe "abstrata" com dados de outro objeto */
    /* ===== EXEMPLOS DE "CALL" ===== */
    var time1 = time.getDescricao.call (sao_paulo);
    var time2 = time.getDescricao.call (boca_juniors);
    var time3 = time.getDescricao.call (penarol);
    var time4 = time.getDescricao.call (olimpia);
    
    /* Pega div */
    var div = document.getElementsByTagName ("div")[0];

    /* ===== DEFINE CONTEUDO ===== */
    div.innerHTML += "<p>".concat (time1).concat ("</p>");
    div.innerHTML += "<p>".concat (time2).concat ("</p>");
    div.innerHTML += "<p>".concat (time3).concat ("</p>");
    div.innerHTML += "<p>".concat (time4).concat ("</p>");
};