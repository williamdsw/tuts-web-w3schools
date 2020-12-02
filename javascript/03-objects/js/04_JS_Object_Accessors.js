/* ===== EXEMPLOS DE ACESSORES GET / SET DE OBJETO ===== */

window.onload = function ()
{
    /* Exemplo de objeto */
    var banda = 
    {
        /* Propriedades */
        nome: "Metallica",
        genero: "Heavy Metal",
        ano_fundacao: 1981,
        nacionalidade: "estadunidense",
        albuns: ["Kill 'em All", "Ride The Lightning", "Master of Puppets", "...And Justice For All", 
                 "Black Album", "Load", "Reload", "St. Anger", "Death Magnetic", "Hardwired... To Self-Desctruct"],
        members_name: [],

        /* Exemplo GET / SET */
        get getNome () { return this.nome; },
        set setNome (value) { this.nome = value; },

        /* Exemplo GET / SET */
        get getGenero () { return this.genero; },
        set setGenero (value) { this.genero = value; },

        /* Exemplo GET / SET */
        get getAnoFundacao () { return this.ano_fundacao; },
        set setAnoFundacao (value) { this.ano_fundacao = value; },

        /* Exemplo GET / SET */
        get getNacionalidade () { return this.nacionalidade; },
        set setNacionalidade (value) { this.nacionalidade = value; },

        /* Exemplo GET / SET */
        get getAlbuns () { return this.albuns.join (" , "); },
        set setAlbuns (arr) { this.albuns = arr; }
    }

    /* "Object.defineProperty (obj, name, value) = Outra forma de definir propriedade */
    Object.defineProperty (banda, "getMembersName", 
    {
        get : function () { return this.members_name.join (" , ");}
    });

    Object.defineProperty (banda, "setMembersName", 
    {
        set: function (arr) { this.members_name = arr; }
    });

    /* Definindo valor */
    banda.setMembersName = ["James Hetfield", "Lars Ulrich", "Kirk Hammett", "Robert Trujillo"];



    /* Evento onclick */
    document.getElementsByTagName ("button")[0].addEventListener ("click", function ()
    {
        /* Mensagem */
        let mensagem = "<p>NOME: ".concat (banda.getNome).concat ("</p>");
        mensagem += "<p>GÊNERO: ".concat (banda.getGenero).concat ("</p>");
        mensagem += "<p>ANO FUNDAÇÃO: ".concat (banda.getAnoFundacao).concat ("</p>");
        mensagem += "<p>NACIONALIDADE: ".concat (banda.getNacionalidade).concat ("</p>");
        mensagem += "<p>ALBUNS: ".concat (banda.getAlbuns).concat ("</p>");
        mensagem += "<p>MEMBROS: ".concat (banda.getMembersName).concat ("</p>");

        /* Joga no input */
        document.getElementById ("p_descricao").innerHTML = mensagem;
    });



    /* Evento onclick */
    document.getElementById ("btn_setter").addEventListener ("click", function ()
    {
        /* Utilizando SETTERS */
        banda.setNome  = "Megadeth";
        banda.setGenero  = "Thrash Metal";
        banda.setAnoFundacao  = 1983;
        banda.setNacionalidade  = "norte-americana";
        banda.setAlbuns = ["Killing Is My Business... and Business Is Good!", "Peace Sells... but Who's Buying?",
                           "So Far, So Good... So What!", "Rust in Peace", "Countdown to Extinction", 
                           "Youthanasia", "Cryptic Writings", "Risk", "The World Needs a Hero", 
                           "The System Has Failed", "United Abominations", "Endgame", 
                           "TH1RT3EN", "Super Collider", "Dystopia"];
        banda.setMembersName = ["Dave Mustaine", "David Ellefson", "Kiko Loureiro", "Dirk Verbeuren"];

        /* Mensagem */
        let mensagem = "<p>NOME: ".concat (banda.getNome).concat ("</p>");
        mensagem += "<p>GÊNERO: ".concat (banda.getGenero).concat ("</p>");
        mensagem += "<p>ANO FUNDAÇÃO: ".concat (banda.getAnoFundacao).concat ("</p>");
        mensagem += "<p>NACIONALIDADE: ".concat (banda.getNacionalidade).concat ("</p>");
        mensagem += "<p>ALBUNS: ".concat (banda.getAlbuns).concat ("</p>");
        mensagem += "<p>MEMBROS: ".concat (banda.getMembersName).concat ("</p>");

        /* Joga no input */
        document.getElementById ("p_descricao").innerHTML = mensagem;                           
    });
};