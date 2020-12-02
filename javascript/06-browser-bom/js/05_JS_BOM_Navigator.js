/* ===== EXEMPLOS DE UTILIZACAO DE PARAMETROS / METODOS "NAVIGATOR" ===== */

/**
 * Quando carregar a janela
 */
window.addEventListener ("load", function ()
{
    /* Pegando elemento */
    var div = document.getElementById ("demo");

    /* Pegando parametros */
    var active_vr_displays = navigator.activeVRDisplays;
    var app_code_name = navigator.appCodeName;
    var app_name = navigator.appName;
    var app_version = navigator.appVersion;
    var authentication = navigator.authentication;
    var cookie_enabled = navigator.cookieEnabled;
    var do_not_track = navigator.doNotTrack;
    var gamepad_input_emulation = navigator.gamepadInputEmulation;
    var geolocation = navigator.geolocation;
    var hardware_concurrency = navigator.hardwareConcurrency;
    var language = navigator.language;
    var languages = navigator.languages.join (" , ");
    var max_touch_points = navigator.maxTouchPoints;
    var media_devices = navigator.mediaDevices;
    var mime_types = navigator.mimeTypes;
    var ms_pointer_enabled = navigator.msPointerEnabled;
    var online = navigator.onLine;
    var plataform = navigator.platform;
    var plugins = navigator.plugins;
    var pointer_enabled = navigator.pointerEnabled;
    var product = navigator.product;
    var product_sub = navigator.productSub;
    var service_worker = navigator.serviceWorker;
    var storage = navigator.storage;
    var user_agent = navigator.userAgent;
    var vendor = navigator.vendor;
    var vendorSub = navigator.vendorSub;
    var webdriver = navigator.webdriver;

    /* Jogando conteudo */
    div.innerHTML += "<p><b>Parâmetros do NAVIGATOR</b></p>";
    div.innerHTML += "<p><b>Active VR Displays</b> : ".concat (active_vr_displays).concat ("</p>");
    div.innerHTML += "<p><b>App Code Name</b> : ".concat (app_code_name).concat ("</p>");
    div.innerHTML += "<p><b>App Name</b> : ".concat (app_name).concat ("</p>");
    div.innerHTML += "<p><b>App Version</b> : ".concat (app_version).concat ("</p>");
    div.innerHTML += "<p><b>Authentication</b> : ".concat (authentication).concat ("</p>");
    div.innerHTML += "<p><b>Cookie Enabled</b> : ".concat (cookie_enabled).concat ("</p>");
    div.innerHTML += "<p><b>Do Not Track</b> : ".concat (do_not_track).concat ("</p>");
    div.innerHTML += "<p><b>Gameinput Input Emulation</b> : ".concat (gamepad_input_emulation).concat ("</p>");
    div.innerHTML += "<p><b>Geolocation</b> : ".concat (geolocation).concat ("</p>");
    div.innerHTML += "<p><b>Hardware Concurrency</b> : ".concat (hardware_concurrency).concat ("</p>");
    div.innerHTML += "<p><b>Language</b> : ".concat (language).concat ("</p>");
    div.innerHTML += "<p><b>Languages</b> : ".concat (languages).concat ("</p>");
    div.innerHTML += "<p><b>Max Touch Points</b> : ".concat (max_touch_points).concat ("</p>");
    div.innerHTML += "<p><b>Media Devices</b> : ".concat (media_devices).concat ("</p>");
    div.innerHTML += "<p><b>Mime Types</b> : ".concat (mime_types).concat ("</p>");
    div.innerHTML += "<p><b>MS Pointer Enabled</b> : ".concat (ms_pointer_enabled).concat ("</p>");
    div.innerHTML += "<p><b>Online</b> : ".concat (online).concat ("</p>");
    div.innerHTML += "<p><b>Plataform</b> : ".concat (plataform).concat ("</p>");
    div.innerHTML += "<p><b>Plugins</b> : ".concat (plugins).concat ("</p>");
    div.innerHTML += "<p><b>Pointer Enabled</b> : ".concat (pointer_enabled).concat ("</p>");
    div.innerHTML += "<p><b>Product</b> : ".concat (product).concat ("</p>");
    div.innerHTML += "<p><b>Product Sub</b> : ".concat (product_sub).concat ("</p>");
    div.innerHTML += "<p><b>Service Worker</b> : ".concat (service_worker).concat ("</p>");
    div.innerHTML += "<p><b>Storage</b> : ".concat (storage).concat ("</p>");
    div.innerHTML += "<p><b>User Agent</b> : ".concat (user_agent).concat ("</p>");
    div.innerHTML += "<p><b>Vendor</b> : ".concat (vendor).concat ("</p>");
    div.innerHTML += "<p><b>Vendor Sub</b> : ".concat (vendorSub).concat ("</p>");
    div.innerHTML += "<p><b>Webdriver</b> : ".concat (webdriver).concat ("</p>");


    /* Printando arrays / objetos */
    console.log (geolocation);
    console.log (media_devices);
    console.log (mime_types);
    console.log (service_worker);
    console.log (storage);

    /* Pegando resultado de funcoes */
    var gamepads = navigator.getGamepads ();
    var java_enabled = navigator.javaEnabled ();

    /* Jogando conteudo */
    div.innerHTML += "<br><p><b>Funções do NAVIGATOR</b></p>";
    div.innerHTML += "<p><b>Gamepads</b> : ".concat (gamepads).concat ("</p>");
    div.innerHTML += "<p><b>Java Enabled</b> : ".concat (java_enabled).concat ("</p>");

    /* Printando arrays / objetos */
    console.log (gamepads);
});