/* ===== EXEMPLOS DE PROPRIEDADES DE OBJETO ===== */

window.onload = function ()
{
    /* Exemplo de objeto */
    var time = 
    {
        /* Propriedades */
        nome: "São Paulo",
        sigla: "SPFC",
        cidade: "São Paulo",
        estado: "São Paulo",
        estadio: "Morumbi",
        ano_fundacao: 1935,
        idade: 84,
        foi_rebaixado: false
    };

    /* Renderiza tabela */
    FazerTabela (time);

    /* Atribui funcao */
    document.getElementsByTagName ("button")[0].addEventListener ("click", function ()
    {
        ModificarValores (time);
    });
};

/**
 * Modifica / Adiciona / Exclui valores do objeto
 * @param {*} obj 
 */
function ModificarValores (obj)
{
    /* Modifica valor */
    obj.estadio = "Cicero Pompeu de Toledo";
    obj["nome"] = "São Paulo Futebol Clube";

    /* Adiciona novo valor */
    obj.campeao_mundial = true;
    obj.nacionalidade = "Brasileiro";

    /* Exclui parametro */
    delete obj.foi_rebaixado;

    /* Renderiza novamente */
    FazerTabela (obj);
}

/**
 * Cria uma tabela apartir de parametros do objeto
 * @param {*} obj 
 */
function FazerTabela (obj)
{
    /* Template de tabela */
    var table = 
    `
        <table>
            <thead>
                <th>Propriedade</th>
                <th>Valor</th>
            </thead>
                
            <tbody>
    `;

    /* Iterando para formar conteudo */
    for (var prop in obj)
    {
        /* Conteudo */
        table += `<tr>
                    <td>${prop}</td>
                    <td>${obj[prop]}</td>
                    </tr>`;
    }

    /* Terminando a tabela */
    table += 
    `   </tbody>
    </table>`

    /* Jogando na div */
    document.getElementsByTagName ("div")[0].innerHTML = table;
}