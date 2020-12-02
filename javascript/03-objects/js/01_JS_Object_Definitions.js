/* ===== EXEMPLOS DE OBJETOS ===== */

window.onload = function ()
{
    /* Exemplo de objeto */
    var pessoa = 
    {
        /* Propriedades */
        nome: "Dave Mustaine",
        idade: 58,
        ano_nascimento: 1961,
        profissao: "Músico",
        usaDrogas: false,
        banda: "Megadeth",
        descricao: function ()
        {
            return `${this.nome} é o fundador da banda ${this.banda}, nascido em ${this.ano_nascimento}, 
                   atualmente com ${this.idade} anos, sendo sua profissão de ${this.profissao}, 
                   e hoje ${this.usaDrogas === true ? "usa" : "não usa"} mais drogas.`
        }
    };

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
    for (var prop in pessoa)
    {
        if (prop !== "descricao")
        {
            /* Conteudo */
            table += `<tr>
                        <td>${prop}</td>
                        <td>${pessoa[prop]}</td>
                      </tr>`;
        }
        else 
        {
            table += `<tr>
                        <td>${prop}</td>
                        <td>${pessoa.descricao ()}</td>
                      </tr>`;
        }
    }

    /* Terminando a tabela */
    table += 
    `   </tbody>
    </table>`

    /* Jogando na div */
    document.getElementsByTagName ("div")[0].innerHTML = table;
};