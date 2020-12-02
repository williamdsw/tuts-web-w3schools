/* ===== EXEMPLO DE REGEX EXPRESSIONS ===== */

window.onload = function (e) 
{
    /* Exemplo */
    var str = "Nine Inch Nails é uma banda Industrial formada em 1987";

    /* "search ()" = Procura por uma palavra na String e retorna o indice da primeira ocorrencia
     *               1º caso usando String para procura 
     *               2º caso /inch/ e a palavra e "i" é case insensitive */
    var search_a = str.search ("Nails");
    var search_b = str.search (/inch/i);

    /* "replace ()" = Procura por uma palavra na String e substitui por outra informada
     *               1º caso usando Strings para busca e substituicao
     *               2º caso /formada/ e a palavra de busca e "i" é case insensitive */
    var replace_a = str.replace ("Industrial", "de Rock");
    var replace_b = str.replace (/formada/i, "fundada");

    /* Pegando elemento */
    var textarea = document.getElementById ("txt_codigo");

    /* Concatenando valores */
    textarea.value += " ===== REGEXP ===== ";
    textarea.value += "\n regex expression = É uma sequência de caracteres que geram um padrão de busca ";

    /* Concatenando valores */
    textarea.value += "\n\n ===== EXEMPLO ===== \n";
    textarea.value += "\n ".concat (str);
    textarea.value += "\n str.search ('Nails') = ".concat (search_a);
    textarea.value += "\n str.search (/Inch/i) = ".concat (search_b);
    textarea.value += "\n str.replace ('Industrial', 'de Rock') = ".concat (replace_a);
    textarea.value += "\n str.replace (/formada/i, 'fundada'); = ".concat (replace_b);

    /* ===== MODIFIERS ===== */
    var str1 = "Nine Inch Nails lançou o disco The Downward Spiral em 1994, do gênero Industrial Rock";
    var i = str1.match (/downward/i);
    var g = str1.match (/N/g);
    var m = str.match (/In/m);

    /* Concatenando valores */
    textarea.value += "\n\n ===== MODIFIERS ===== ";
    textarea.value += "\n i = Faz uma procura com case insensitive";
    textarea.value += "\n g = Faz uma procura global (Não para na primeira ocorrência)";
    textarea.value += "\n m = Faz uma procura com multilinhas ";

    /* Concatenando valores */
    textarea.value += "\n\n ===== EXEMPLOS ===== \n";
    textarea.value += "\n ".concat (str1);
    textarea.value += "\n str1.match (/downward/i) = ".concat (i);
    textarea.value += "\n str1.match (/N/g) = ".concat (g);
    textarea.value += "\n str.match (/^in/m) = ".concat (m);

    /* ===== PATTERNS ===== */
    var str2 = `I am a big man \n(Yes I am) \nAnd I have a big gun \nGot me a big old dick and I \nI like to have fun \n91723987129381236325476`;
    var letter = str2.match (/[i]/g);
    var number = str2.match (/[3-6]/g);
    var or = str2.match (/(big|have)/g);

    /* Concatenando valores */
    textarea.value += "\n\n ===== PATTERNS ===== ";
    textarea.value += "\n [abc] = Encontra qualquer dos caracteres que estiverem dentro dos colchetes ";
    textarea.value += "\n [0-9] = Encontra qualquer dos números que estiverem dentro dos colchetes ";
    textarea.value += "\n (x|y) = Encontra qualquer das alternativas separadas por | ";

    /* Concatenando valores */
    textarea.value += "\n\n ===== EXEMPLOS ===== \n";
    textarea.value += "\n ".concat (str2).concat ("\n");
    textarea.value += "\n str2.match (/[i]/g) = ".concat (letter);
    textarea.value += "\n str2.match (/[3-6]/g) = ".concat (number);
    textarea.value += "\n str2.match (/(big|have)/g) = ".concat (or);

    /* ===== METACHARACTER ===== */
    var str3 = `We're riding on the world, Thunder kissin' 65, 5, yeah, wow!
                5, yeah, wow!
                The demon warp is
                Coming alive
                In 1965, 5, 5, 5!`;
    var digit = str3.match (/\d/g);
    var whitespace = str3.match (/\s/g);
    var b = str3.match (/\bTh/g);

    /* Concatenando valores */
    textarea.value += "\n\n ===== METACHARACTER ===== ";
    textarea.value += "\n \\d = Encontra qualquer dígito ";
    textarea.value += "\n \\s = Encontra espaços em branco ";
    textarea.value += "\n \\b = Encontra uma combinação no começo ou no final de uma palavra ";

    /* Concatenando valores */
    textarea.value += "\n\n ===== EXEMPLOS ===== \n";
    textarea.value += "\n ".concat (str3).concat ("\n");
    textarea.value += "\n str3.match (/\\d/g) = ".concat (digit);
    textarea.value += "\n str3.match (/\\s/g) = ".concat (whitespace);
    textarea.value += "\n str3.match (/\\bTh/g) = ".concat (b);

    /* ===== TEST ===== */
    var str4 = "Starfuckers Inc. ~ The Fragile";
    var exp = /f/;
    var test = exp.test (str4);

    /* Concatenando valores */
    textarea.value += "\n\n ===== TEST ===== ";
    textarea.value += "\n \\Função que testa um regex em uma String e retorna true / false ";

    /* Concatenando valores */
    textarea.value += "\n\n ===== EXEMPLO ===== \n";
    textarea.value += "\n ".concat (str4).concat ("\n");
    textarea.value += "\n /f/.test (str) =  ".concat (test);

    /* ===== EXEC ===== */
    var str5 = "Our mother nature is a whore";
    var exp1 = /o/;
    var exec = exp1.exec (str5);

    /* Concatenando valores */
    textarea.value += "\n\n ===== EXEC ===== ";
    textarea.value += "\n \\Função que procura uma expressão e retorna em objeto ";

    /* Concatenando valores */
    textarea.value += "\n\n ===== EXEMPLO ===== \n";
    textarea.value += "\n ".concat (str5).concat ("\n");
    textarea.value += "\n /o/.exec (str) =  ".concat (exec[0]);
    textarea.value += "\n /o/.exec (str) index =  ".concat (exec.index);
    textarea.value += "\n /o/.exec (str) input =  ".concat (exec.input);
};