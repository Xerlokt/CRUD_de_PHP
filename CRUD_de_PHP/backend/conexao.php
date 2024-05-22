<?php
try {
  $banco = new PDO('mysql:host=localhost;dbname=twich_ringa_d_galo;charset=utf8mb4', 'root', 'fatec');
    $banco->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    echo 'ERROR: ' . $e->getMessage();
}
?>