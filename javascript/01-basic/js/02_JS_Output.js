function outputs ()
{
    /* document.getElementById (id) = Pega um elemento do DOM pelo ID 
     * .innerHTML = Pega / Modifica conteudo do elemento */
    document.getElementById ("demo").innerHTML = "Modificando com innerHTML";

    /* document.write (str) = Define conteudo da pagina */
    document.write ("Utilizando document.write (str)");

    /* window.alert (str) = Exibe um modal de alerta  */
    window.alert ("Utilizando window.alert (str)");

    /* console.log (str) = Exibe uma mensagem no console */
    console.log ("Utilizando console.log ()");
}