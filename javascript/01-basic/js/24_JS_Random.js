/* ===== EXEMPLO DE RANDOM ===== */

window.onload = function (e) 
{
    /* Exemplos de valores aleatorios */
    var random01 = Math.random ();
    var random09 = Math.floor (Math.random () * 10);
    var random010 = Math.floor (Math.random () * 11);
    var random099 = Math.floor (Math.random () * 100);
    var random110 = Math.floor (Math.random () * 10) + 1;
    var random1100 = Math.floor (Math.random () * 100) + 1;
    var randomBetween1 = getRandomNumber (10, 20);
    var anotherRandom = getAnotherRandomNumber (10, 20);

    /* Mensagens */
    var a = "\nNúmero aleatório entre 0 a 1 = ".concat (random01);
    var b = "\nNúmero aleatório entre 0 a 9 = ".concat (random09);
    var c = "\nNúmero aleatório entre 0 a 10 = ".concat (random010);
    var d = "\nNúmero aleatório entre 0 a 99 = ".concat (random099);
    var e = "\nNúmero aleatório entre 1 a 10 = ".concat (random110);
    var f = "\nNúmero aleatório entre 1 a 100 = ".concat (random1100);
    var g = "\nNúmero aleatório entre 10 a 20 = ".concat (randomBetween1);
    var h = "\nOutro número aleatório entre 10 a 20 = ".concat (anotherRandom);
    
    /* Pegando elemento */
    var textarea = document.getElementById ("txt_codigo");

    /* Concatenando valores */
    textarea.value += a;
    textarea.value += b;
    textarea.value += c;
    textarea.value += d;
    textarea.value += e;
    textarea.value += f;
    textarea.value += g;
    textarea.value += h;
};

/**
 * Retorna um numero aleatorio entre 2 valores informados
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function getRandomNumber (min, max)
{
    return Math.floor (Math.random () * (max - min)) + min;
}

/**
 * Retorna um numero aleatorio entre 2 valores informados
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function getAnotherRandomNumber (min, max)
{
    return Math.floor (Math.random () * (max - min + 1)) + min;
}