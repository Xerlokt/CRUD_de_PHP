<?php
header('Content-Type: application/json; charset=utf-8');

require_once "conexao.php";

$dados = json_decode(file_get_contents('php://input'), true);

$codigo_retorno = 0;
$mensagem_retorno = "";

if(!isset($dados["descricao"])) {
    $codigo_retorno = 401;
    $mensagem_retorno = "Informe a descrição da categoria";

// testa se a descrição veio em branco
} elseif(trim($dados["descricao"])=="") {
    $codigo_retorno = 402;
    $mensagem_retorno = "A descrição não pode ser em branco";

// testa se o codigo foi informado
} elseif(!isset($dados["codigo"])) {
    $codigo_retorno = 404;
    $mensagem_retorno = "Informe o codigo da categoria";
}
if($codigo_retorno == 0) {
    try {
        // monta o comando sql UPDATE
        $sql = "UPDATE produtos SET 
        pro_descricao = :descricao , 
        pro_valor = :valor, 
        pro_categoria = :categoria , 
        pro_unidade = :unidade , 
        pro_codigoean = :codigoean
            WHERE ID_produto = :produtos";
        // confere e prepara o comando no mysql  
        $comando = $banco->prepare($sql);
        // trocas os valores e executa o comando
        $comando->execute(array(":produtos" => $dados["codigo"],":descricao" => $dados["descricao"], ":valor" => $dados["valor"],
        ":categoria" => $dados["categoria"], ":unidade" => $dados["unidade"],":codigoean" => $dados["codigoean"]));
    
        $codigo_retorno = 200;
        $mensagem_retorno = 'Categoria alterada com sucesso!';
    } catch (PDOException $e) {
        $codigo_retorno = 403;
        $mensagem_retorno =  'Falha na inclusão da categoria '.$e->getMessage();
    }    
}

// codifica o vetor do PHP (com o codigo e mensagem) para o formato JSON
// usando a função json_encode
echo json_encode(array("codigo" => $codigo_retorno,
        "mensagem" => $mensagem_retorno));
exit();
?>