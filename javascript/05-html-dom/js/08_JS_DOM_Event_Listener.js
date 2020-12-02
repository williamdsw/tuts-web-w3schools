/* ===== EXEMPLOS DE EVENT LISTENER DO DOM ===== */

/* "addEventListener" = Permite adicionar eventos para elementos */
window.addEventListener ("load", function ()
{
    /* Pegar elementos */
    var divs = document.getElementsByClassName ("block");
    var primeira_div = divs[0];

    /* #### EVENTOS ONCLICK #### */
    primeira_div.addEventListener ("click", function ()
    {
        this.innerHTML = "Primeiro evento click...";
    });

    primeira_div.addEventListener ("click", function ()
    {
        setTimeout (function ()
        {
            primeira_div.innerHTML = "Segundo evento click...";
        }, 2000);
    });

    primeira_div.addEventListener ("click", function ()
    {
        setTimeout (function ()
        {
            primeira_div.innerHTML = "Terceiro evento click...";
            primeira_div.style.backgroundColor = "red";
            primeira_div.style.color = "yellow";
        }, 4000);
    });
});


/* "resize" = Evento que verifica a mudanca de tamanho da tela */
window.addEventListener ("resize", function ()
{
    /* Pegar elementos */
    var divs = document.getElementsByClassName ("block");
    var segunda_div = divs[1];

    /* Atualiza texto */
    segunda_div.innerHTML = ` ${window.innerWidth}px ${window.innerHeight}px `;
});