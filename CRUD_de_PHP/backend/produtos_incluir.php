<?php
// Diz para o PHP retornar conteúdo em formato JSON
header('Content-Type: application/json; charset=utf-8');

// Recebendo os dados no formato JSON
$dados = json_decode(file_get_contents('php://input'), true);

// inclui (exige) o arquivo conexao.php nesse script
require_once "conexao.php";

// cria variaveis para controlar o codigo e mensagem de retorno
$codigo_retorno = 0;
$mensagem_retorno = "";

// testa se o $dados["descricao"] existe
if(!isset($dados["descricao"])) {
    $codigo_retorno = 401;
    $mensagem_retorno = "Informe a descrição da categoria";

// testa se a descrição veio em branco
} elseif(trim($dados["descricao"])=="") {
    $codigo_retorno = 402;
    $mensagem_retorno = "A descrição não pode ser em branco";
}
if($codigo_retorno == 0) {
    try {
        // monta o comando sql INSERT
        $sql = "INSERT INTO PRODUTOS (ID_produto, pro_descricao, pro_valor,pro_categoria,pro_unidade, pro_codigoean)
        VALUES (0, :pro_descricao , :pro_valor , :pro_categoria , :pro_unidade, :pro_codigoean)";
        // confere e prepara o comando no mysql  
        $comando = $banco->prepare($sql);
        // trocas os valores e executa o comando
        $comando->execute(array(":pro_descricao" => $dados["descricao"], ":pro_valor" => $dados["valor"],
        ":pro_categoria" => $dados["categoria"], ":pro_unidade" => $dados["unidade"],":pro_codigoean" => $dados["codigoean"]));
    
        $codigo_retorno = 200;
        $mensagem_retorno = 'Categoria inserida com sucesso!';
    } catch (PDOException $e) {
        $codigo_retorno = 403;
        $mensagem_retorno =  'Falha na inclusão da categoria';
    }    
}

// codifica o vetor do PHP (com o codigo e mensagem) para o formato JSON
// usando a função json_encode
echo json_encode(array("codigo" => $codigo_retorno,
        "mensagem" => $mensagem_retorno));
exit();

