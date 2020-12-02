<?php

/* Array de valores */
$bands[] = "Black Sabbath";
$bands[] = "Iron Maiden";
$bands[] = "Metallica";
$bands[] = "Judas Priest";
$bands[] = "Motörhead";
$bands[] = "Slayer";
$bands[] = "Megadeth";
$bands[] = "Venom";
$bands[] = "Pantera";
$bands[] = "Death";
$bands[] = "Ozzy Osbourne";
$bands[] = "Queensrcyhe";
$bands[] = "Dream Theater";
$bands[] = "Celtic Frost";
$bands[] = "Manowar";
$bands[] = "Dio";
$bands[] = "Mercyful Fate";
$bands[] = "Helloween";
$bands[] = "Anthrax";
$bands[] = "Bathory";


$palavra = $_REQUEST["palavra"];

$sugestao = "";

if ($sugestao !== "")
{
    $sugestao = strtolower ($sugestao);
    $tamanho = strlen ($sugestao);

    foreach ($a as $nome)
    {
        if (stristr ($palavra, substr ($nome, 0, $tamanho)))
        {
            if ($sugestao === "")
            {
                $sugestao = $nome;
            }
            else
            {
                $sugestao .= ", $nome";
            }
        }
    }
}

echo $sugestao === "" ? "Nada encontrado" : $sugestao;

?>