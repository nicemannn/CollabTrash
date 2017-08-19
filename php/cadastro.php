<?php
    include_once 'conexao/conexao.php';
    
    $nome;
    $email;
    $telefone;
    $senha;
    $datadecadastro;
    
    $cadastro = $pdo->query("INSERT INTO usuario VALUES (0, '$nome', '$email', '$telefone', '$senha', '$datadecadastro')");