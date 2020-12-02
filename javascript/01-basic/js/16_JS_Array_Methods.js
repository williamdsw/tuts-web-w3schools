/* ===== EXEMPLO DE METODOS DE ARRAYS ===== */

window.onload = function (e)
{
    /* --- Exemplo de array --- */
    var serie_A = ["São Paulo", "Fortaleza", "Athletico PR", "Vasco"];
    console.log ("Array : ");
    console.log (serie_A);

    /* --- "toString ()" = Retorna os itens em uma string --- */
    var toString = serie_A.toString ();
    console.log ("Array to String = " + toString);

    /* --- "join (str) " = Junta os itens para uma string, mas tambem da pra mudar o separador --- */
    var join = serie_A.join (" * ");
    console.log ("Array join = " + join);

    /* --- "pop () " = Remove o ultimo item do array  --- */
    serie_A.pop ();
    console.log ("Array depois do pop : ");
    console.log (serie_A);

    /* --- "push (value) " = Adiciona um item no final do array --- */
    serie_A.push ("Flamengo");
    console.log ("Array depois do push : ");
    console.log (serie_A);

    /* --- "shift () " = Remove o primeiro item do array e reorganiza os indices dos outros itens  --- */
    serie_A.shift ();
    console.log ("Array depois do shift : ");
    console.log (serie_A);

    /* --- "unshift (value) " = Adiciona um item no primeiro indice e reorganiza os outros itens --- */
    serie_A.unshift ("Palmeiras");
    console.log ("Array depois do unshift : ");
    console.log (serie_A);

    /* --- "split (start, deleteCount, values[]) " = Metodo que insere novos itens em um indice do array
     *                                               podendo excluir itens ou nao.
     * --- "start" = Indice em qual serao inseridos os itens
     * --- "deleteCount" = Numero de itens ja existentes a serem deletados
     * --- "values[]" = Novos valores do array  --- */
    serie_A.splice (1, 0, "Ceará", "Internacional", "Cruzeiro");
    console.log ("Array depois do splice : ");
    console.log (serie_A);

    /* --- "concat (values...)" = Concatena o array selecionado com 1 ou mais arrays */
    var serie_B = ["Londrina", "Figueirense", "Sport", "América-MG"];
    var concat = serie_A.concat (serie_B);
    console.log ("Array 1 depois de concat () com Array 2 : ");
    console.log (concat);

    /* --- "slice (start, end)" = "Corta" o array em determinadas posicoes
     * --- "start" = Index de inicio
     * --- "end" = Index de termino (opcional)
     *  */
    var paulista = serie_A.slice (0, 1);
    console.log ("Array depois de slice (0, 1): ");
    console.log (paulista);
};