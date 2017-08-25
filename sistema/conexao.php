<?php
	
	$host = "localhost";
	$user = "root";
	$pass = "074932"; //Mudar para a senha do seu banco, caso tenha senha
	$db = "collab";

		
	$conexao = new PDO("mysql:host=$host;port=3306;dbname=$db",$user,$pass);
	
	if ($conexao) {
	//	echo "deu certo";
	}

?>