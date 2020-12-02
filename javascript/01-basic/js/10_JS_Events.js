/* ===== EXEMPLO DE EVENTOS ===== */

var input = document.getElementById ("txtCampo");
var p = document.getElementsByTagName ("p")[0];

/* Definindo eventos */
/* onchange */
input.addEventListener ("change", function ()
{
    p.innerHTML = "Valor do campo mudou (onchange)";
});

/* onclick */
input.addEventListener ("click", function ()
{
    p.innerHTML = "Clicou no campo (onclick)";
});

/* onmouseover */
input.addEventListener ("mouseover", function ()
{
    p.innerHTML = "Entrou no campo (onmouseover)";
});

/* onmouseout */
input.addEventListener ("mouseout", function ()
{
    p.innerHTML = "Saiu do campo (onmouseout)";
});

/* onkeydown */
input.addEventListener ("keydown", function ()
{
    p.innerHTML = "Está digitando no campo (onkeydown)";
});

/* onload */
input.addEventListener ("load", function ()
{
    p.innerHTML = "Carregou o input (onload)";
});