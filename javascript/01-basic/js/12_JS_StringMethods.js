/* ===== EXEMPLO DE METODOS DE STRING ===== */

window.onload = function (e)
{
    /* String definida */
    var str = " Essa frase é grande demais veja o que tô escrevendo nada a ver essa frase ";

    /* "charAt" = Pega o caractere no indice informado */
    var charAt = str.charAt (14);

    /* "charCodeAt" = Pega o codigo do caractere no indice informado */
    var charCodeAt = str.charCodeAt (19);

    /* "concat" = Concatena uma string com outra */
    var concat = str.concat (" Está concatenada ");

    /* "endsWith" = Verifica se a string termina com uma letra / palavra / regex informado */
    var endsWith = str.endsWith ("frase ");

    /* "includes" = Verifica se a string contem letra / palavra / regex informado */
    var includes = str.includes ("escrevendo");

    /* "indexOf" = Retorna o indice da primeira ocorrencia de uma letra/palavra/regex informado */
    var indexOf = str.indexOf ("frase");

    /* "lastIndexOf" = Retorna o indice da ultima ocorrencia de uma letra/palavra/regex informado */
    var lastIndexOf = str.lastIndexOf ("frase");

    /* "length" = Retorna o tamanho da string */
    var length = str.length;

    /* "match" = Verifica se existe uma ou mais ocorrencias na string pelo regex */
    var match = str.match (/frase/g);

    /* "property" = Pega um caractere pela string pelo indice como array */
    var property = str[3];

    /* "repeat" = Retorna a String atual repetida 'n' vezes */
    var repeat = str.repeat (10);
    
    /* "replace" = Substitui uma string / regex informada por outra */
    var replace = str.replace ("grande", "pequena");

    /* "search" = Procura uma palavra / regex informado */
    var search = str.search ("demais");

    /* "slice" = Pega uma parte da string pelo indice de comeco e indice de termino */
    var slice = str.slice (10, 15);

    /* "split" = Quebra a string em array pelo delimitador informado */
    var split = str.split ("");

    /* "startsWith" = Verifica se a string comeca com uma letra / palavra / regex informado */
    var startsWith = str.startsWith ("Essa");

    /* "subtr" =  */
    var substr = str.substr (20, 25);

    /* "substring" =  */
    var substring = str.substring (4, 16);

    /* "toUpperCase" = Pega a String e deixa em letras maiusculas */
    var toUpperCase = str.toUpperCase ();

    /* "toLowerCase" = Pega a String e deixa em letras minusculas */
    var toLowerCase = str.toLowerCase ();

    /* "trim" = Pega a String e tira os espacos */
    var trim = str.trim ();
    
    /* Pegando elementos */
    var pString = document.getElementById ("string");
    var pCharAt = document.getElementById ("charAt");
    var pCharCodeAt = document.getElementById ("charCodeAt");
    var pConcat = document.getElementById ("concat");
    var pEndsWith = document.getElementById ("endsWith");
    var pIncludes = document.getElementById ("includes");
    var pIndexOf = document.getElementById ("indexOf");
    var pLastIndexOf = document.getElementById ("lastIndexOf");
    var pLength = document.getElementById ("length"); 
    var pMatch = document.getElementById ("match"); 
    var pProperty = document.getElementById ("property");
    var pRepeat = document.getElementById ("repeat");
    var pReplace = document.getElementById ("replace");
    var pSearch = document.getElementById ("search");
    var pSlice = document.getElementById ("slice");
    var pSplit = document.getElementById ("split");
    var pStartsWith = document.getElementById ("startsWith");
    var pSubstr = document.getElementById ("substr");
    var pSubstring = document.getElementById ("substring");
    var pToUpperCase = document.getElementById ("toUpperCase");
    var pToLowerCase = document.getElementById ("toLowerCase");
    var pTrim = document.getElementById ("trim");

    /* Adicionando conteudo... */
    pString.append (str);
    pCharAt.append (charAt);
    pCharCodeAt.append (charCodeAt);
    pConcat.append (concat);
    pEndsWith.append (endsWith);
    pIncludes.append (includes);
    pIndexOf.append (indexOf);
    pLastIndexOf.append (lastIndexOf);
    pLength.append (length);
    pMatch.append (match);
    pProperty.append (property);
    pRepeat.append (repeat);
    pReplace.append (replace);
    pSearch.append (search);
    pSlice.append (slice);
    pSplit.append (split);
    pStartsWith.append (startsWith);
    pSubstr.append (substr);
    pSubstring.append (substring);
    pToUpperCase.append (toUpperCase);
    pToLowerCase.append (toLowerCase);
    pTrim.append (trim);
};