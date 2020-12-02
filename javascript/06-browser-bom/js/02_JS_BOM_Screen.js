/* ===== EXEMPLOS DE UTILIZACAO DE PARAMETROS / METODOS screen ===== */

/**
 * Quando carregar a janela
 */
window.addEventListener ("load", function ()
{
    /* Pegando elemento */
    var div = document.getElementById ("demo");

    /* Jogando conteudo */

    div.innerHTML += "<p><b>Parâmetros do SCREEN</b></p>";
    div.innerHTML += "<p>LARGURA:".concat (screen.width).concat ("</p>");
    div.innerHTML += "<p>ALTURA:".concat (screen.height).concat ("</p>");
    div.innerHTML += "<p>LARGURA DISPONÍVEL:".concat (screen.availWidth).concat ("</p>");
    div.innerHTML += "<p>ALTURA DISPONÍVEL:".concat (screen.availHeight).concat ("</p>");
    div.innerHTML += "<p>PROFUNDIDADE DA COR:".concat (screen.colorDepth).concat ("</p>");
    div.innerHTML += "<p>PROFUNDIDADE DO PIXEL:".concat (screen.pixelDepth).concat ("</p>");
    div.innerHTML += "<p>DEVICE XDPI:".concat (screen.deviceXDPI).concat ("</p>");
    div.innerHTML += "<p>DEVICE YDPI:".concat (screen.deviceYDPI).concat ("</p>");
    div.innerHTML += "<p>LOGICAL XDPI:".concat (screen.logicalXDPI).concat ("</p>");
    div.innerHTML += "<p>LOGICAL YDPI:".concat (screen.logicalYDPI).concat ("</p>");
    div.innerHTML += "<p>SYSTEM XDPI:".concat (screen.systemXDPI).concat ("</p>");
    div.innerHTML += "<p>SYSTEM YDPI:".concat (screen.systemYDPI).concat ("</p>");
    div.innerHTML += "<p>HABILITADO FONT SMOOTH:".concat (screen.fontSmoothingEnabled).concat ("</p>");
});