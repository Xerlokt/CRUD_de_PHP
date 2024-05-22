<?php
// Diz para o PHP retornar conteúdo em formato JSON
header('Content-Type: application/json; charset=utf-8');

// inclui (exige) o arquivo conexao.php nesse script
require_once "conexao.php";

// Recebendo os dados no formato JSON
$dados = json_decode(file_get_contents('php://input'), true);

// cria variaveis para controlar o codigo e mensagem de retorno
$codigo_retorno = 0;
$mensagem_retorno = "";
$registros = array();

    try {
        // monta o comando sql UPDATE
        $sql = "SELECT * FROM categoria";

        if(isset($dados["codigo"])){
            $sql .= " WHERE cat_cod =".$dados["codigo"];  
        }

        // trocas os valores e executa o comando
        $consulta = $banco->query($sql);
        $registros = $consulta->fetchAll(PDO::FETCH_ASSOC);
    
        $codigo_retorno = 200;
        $mensagem_retorno = 'Ok';
    } catch (PDOException $e) {
        $codigo_retorno = 403;
        $mensagem_retorno =  'Falha na lista da categoria';
    }    

// codifica o vetor do PHP (com o codigo e mensagem) para o formato JSON
// usando a função json_encode
echo json_encode(array("codigo" => $codigo_retorno,
        "mensagem" => $mensagem_retorno,
        "registros" => $registros));
exit();

