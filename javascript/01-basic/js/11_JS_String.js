/* ===== EXEMPLO DE STRINGS ===== */

window.onload = function (e)
{
    /* Strings */
    var single = 'Nine Inch Nails';
    var double = "Trent Reznor";
    var interpolated = "Gênero: \"Industrial Rock\"";
    var backspace = "Utilizando \b Backspace";
    var form_feed = "Utilizando \f Form Feed";
    var new_line = "Utilizando \n New Line";
    var carriage_return = "Utilizando \r Carriage Return";
    var horizontal_tabulator = "Utilizando \t Horizontal Tabulator";
    var vertical_tabulator = "Utilizando \v Vertical Tabulator";
    var obj = new String ("String como objeto");

    /* Pegando elemento */
    var textarea = document.getElementById ("demo");

    /* Adicionando conteudo... (nao funciona \) */
    textarea.append (single);
    textarea.append (double);
    textarea.append (interpolated);
    textarea.append (backspace);
    textarea.append (form_feed);
    textarea.append (new_line);
    textarea.append (carriage_return);
    textarea.append (horizontal_tabulator);
    textarea.append (vertical_tabulator);
    textarea.append (obj);

    /* Printando conteudo (funciona \) */
    console.log (single);
    console.log (double);
    console.log (interpolated);
    console.log (backspace);
    console.log (form_feed);
    console.log (new_line);
    console.log (carriage_return);
    console.log (horizontal_tabulator);
    console.log (vertical_tabulator);
    console.log (obj);
};