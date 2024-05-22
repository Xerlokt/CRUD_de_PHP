<?php

header('Content-Type: application/json; charset=utf-8');

require_once "conexao.php";

$dados = json_decode(file_get_contents('php://input'), true);

$codigo_retorno = 0;
$mensagem_retorno = "";


if (!isset($dados["codigo"])) {
    $codigo_retorno = 404;
    $mensagem_retorno = "Informe o codigo da categoria";
} 

    if ($codigo_retorno == 0) {
        try {
            $sql = "DELETE FROM  categoria where cat_cod = :codigo";

            $comando = $banco->prepare($sql);

            $comando->execute(array(":codigo" => $dados["codigo"]));
            
            $codigo_retorno = 200;

            $mensagem_retorno = 'Categoria Excluida com sucesso!';
        } catch (PDOException $e) {
            $codigo_retorno = 403;
            $mensagem_retorno =  'Falha em excluir a categoria';
        }
    }
echo json_encode(array(
    "codigo" => $codigo_retorno,
    "mensagem" => $mensagem_retorno
));
exit();
