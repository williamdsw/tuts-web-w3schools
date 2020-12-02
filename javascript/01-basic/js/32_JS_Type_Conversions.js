/* ===== EXEMPLO DE TYPEOF ===== */

window.onload = function (e) 
{
    /* Exemplo de typeof */
    var string = typeof "Trent Reznor";
    var float = typeof 666.66;
    var number = typeof NaN;
    var boolean = typeof true;
    var array = typeof [10, 55, "Other", false];
    var object = typeof {name: "Nine Inch Nails", genre: "Industrial", country: "USA"};
    var date = typeof new Date ();
    var func = typeof function (){};
    var und = typeof myBand;
    var nullable = typeof null;

    /* Pegando elemento */
    var textarea = document.getElementById ("txt_codigo");

    /* Concatenando valores */
    textarea.value += " ===== TYPEOF ===== ";

    textarea.value += "\n typeof = Retorna o tipo de uma variável, valor ou função ";

    /* Concatenando valores */
    textarea.value += "\n\n ===== EXEMPLOS =====\n ";

    textarea.value += "\n typeof 'Trent Reznor' = ".concat (string);
    textarea.value += "\n typeof 666.66 = ".concat (float);
    textarea.value += "\n typeof NaN = ".concat (number);
    textarea.value += "\n typeof true = ".concat (boolean);
    textarea.value += "\n typeof [10, 55, 'Other', false] = ".concat (array);
    textarea.value += "\n typeof {name: 'Nine Inch Nails', genre: 'Industrial', country: 'USA'} = ".concat (object);
    textarea.value += "\n typeof new Date () = ".concat (date);
    textarea.value += "\n typeof function (){} = ".concat (func);
    textarea.value += "\n typeof myBand = ".concat (und);
    textarea.value += "\n typeof null = ".concat (nullable);

    /* Exemplos de Construtores */
    var c_string = "Marilyn Manson".constructor;
    var c_number = (100).constructor;
    var c_boolean = true.constructor;
    var c_array = [0, 1, 2, 3].constructor;
    var c_obj = {band: "Nine Inch Nails", genre: "Industrial"}.constructor;
    var c_date = new Date ().constructor;
    var c_func = function () {}.constructor;

    /* Concatenando valores */
    textarea.value += "\n\n ===== CONSTRUTOR ===== \n";

    textarea.value += "\n construtor = Retorna o conteúdo do construtor ";

    /* Concatenando valores */
    textarea.value += "\n\n ===== EXEMPLOS =====\n ";

    textarea.value += "\n String = ".concat (c_string);
    textarea.value += "\n Number = ".concat (c_number);
    textarea.value += "\n Boolean = ".concat (c_boolean);
    textarea.value += "\n Array = ".concat (c_array);
    textarea.value += "\n Object = ".concat (c_obj);
    textarea.value += "\n Date = ".concat (c_date);
    textarea.value += "\n Function = ".concat (c_func);
};