/* ===== EXEMPLOS DE COLLECTIONS DOM ===== */

window.addEventListener ("load", function ()
{
    /* Evento */
    document.getElementById ("btn_modifier").addEventListener ("click", function ()
    {
        /* Colecao de elementos */
        var pCollection = document.getElementsByTagName ("p");

        for (var i = 0; i < pCollection.length; i++)
        {
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

            /* ### border ### */
            var borders = ["dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset", "none", "hidden"];
            var border_width = Math.ceil (Math.random () * 10) + 1;
            var border_style = borders[Math.ceil (Math.random () * borders.length)];
            var border_color = 
            {
                red: getRandomColor (),
                green: getRandomColor (),
                blue: getRandomColor (),
                alpha: getRandomColor (),
                getBorderColor: function ()
                {
                    return `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`;
                }
            };
            var border = `${border_width}px ${border_style} ${border_color.getBorderColor ()}`;

            /* ### font ### */
            var font_families = ["Serif", "Sans-serif", "Monospace"];
            var font_family = font_families[Math.ceil (Math.random () * font_families.length - 1)];
            var font_size = Math.ceil (Math.random () * 32) + 1;
            var font_styles = ["normal", "italic", "oblique", "initial", "inherit"];
            var font_style = font_styles[Math.ceil (Math.random () * font_styles.length - 1)];
            var font_variants = ["normal", "small-caps", "initial", "inherit"];
            var font_variant = font_variants[Math.ceil (Math.random () * font_variants.length - 1)];
            var font_weights = ["normal", "bold", "bolder", "lighter", "initial", "inherit"];
            var font_weight = font_weights[Math.ceil (Math.random () * font_weights.length - 1)];
            var font = `${font_style} ${font_variant}  ${font_weight} ${font_size}px ${font_family}`;

            /* Setando propriedades */
            pCollection[i].style.backgroundColor = background_color.getBackgroundColor ();
            pCollection[i].style.color = color.getColor ();
            pCollection[i].style.border = border;
            pCollection[i].style.font = font;
        }

        /* Jogando mensagem */
        document.getElementById ("result").innerHTML = `${pCollection.length} parágrafos modificados!`;
    });
});

/**
 * Gera um numero aleatorio entre 0 - 255
 */
function getRandomColor ()
{
    return Math.ceil (Math.random () * 256);
}