/* ===== EXEMPLOS DE EVENTOS DO DOM ===== */

/* "onload" = Quando terminar de carregar a pagina  */
window.onload = function ()
{
    /* ### Pegando elementos ### */
    var divs = document.getElementsByClassName ("block");

    /* ### Definindo eventos... ### */
    /* "onmouseover" = Quando o mouse ficar por cima do elemento */
    divs[0].onmouseover = function ()
    {
        this.innerHTML = "Mouse entrou!";
    }
    
    /* "onmouseout" = Quando o mouse sair do elemento */
    divs[0].onmouseout = function ()
    {
        this.innerHTML = "Mouse saiu!";
    }

    /* "onclick" = Quando clicar no elemento  */
    var count = 1;
    divs[1].onclick = function ()
    {
        this.innerHTML = "Clicou ".concat (count).concat (" vezes");
        count++;
    }

    /* Verificacoes de cookies */
    if (navigator.cookieEnabled)
    {
        divs[2].innerHTML = "Cookies habilitados!";
    }
    else
    {
        divs[2].innerHTML = "Cookies desabilitados!";
    }

    /* "onmousedown" = Quando click e segura o click  */
    divs[3].onmousedown = function ()
    {
        this.innerHTML = "Segurando...";
    }

    /* "onmouseout" = Quando click e solta o click  */
    divs[3].onmouseup = function ()
    {
        this.innerHTML = "Soltou...";
    }

    /* Input */
    /* "onchange" = Quando o valor do input e modificado (tab)  */
    document.getElementById ("input_teste").onchange = function ()
    {
        this.value = this.value.toString ().toUpperCase ();
    }
};