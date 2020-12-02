/* ===== EXEMPLOS DE NODELIST ===== */

window.addEventListener ("load", function ()
{
    /* "NodeList" = Colecao de nos semelhante ao HTMLCollection */
    var pNodeList = document.querySelectorAll ("p");

    for (var i = 0; i < pNodeList.length; i++)
    {
        /* Printando item */
        console.log (pNodeList[i]);

        /* gerando propriedades CSS de forma dinamica */
        /* ### background-color ### */
        var background_color = 
        {
            red: getRandomColor (),
            green: getRandomColor (),
            blue: getRandomColor (),
            alpha: getRandomColor (),
            getBackgroundColor: function ()
            {
                return `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`;
            }
        };

        /* ### color ### */
        var color = 
        {
            red: getRandomColor (),
            green: getRandomColor (),
            blue: getRandomColor (),
            alpha: getRandomColor (),
            getColor: function ()
            {
                return `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`;
            }
        };

        /* Setando propriedades */
        pNodeList[i].style.backgroundColor = background_color.getBackgroundColor ();
        pNodeList[i].style.color = color.getColor ();
    }

    /* Jogando mensagem */
    document.getElementById ("result").innerHTML = `${pNodeList.length} itens no NodeList!`;
});

/**
 * Gera um numero aleatorio entre 0 - 255
 */
function getRandomColor ()
{
    return Math.ceil (Math.random () * 256);
}