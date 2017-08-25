<?php
	session_start();


	$post = $_GET['post'];



	$sql = "DELETE FROM post WHERE ps_id = '$post' ";

	require('conexao.php');

	$conexao->query($sql);

	try
	{

		$conexao->query($sql);

		echo "<script language='javascript' charset='utf-8' type='text/javascript'>window.location.href='index.php'</script>"; 	

	}

 	catch (Exception $e) {
   		echo "Erro:".$e->getMessage();
   		echo "Erro na pÃ¡gina.";
   }
	


    $sql[0] = "DELETE FROM diarios WHERE id_diario = '$id_diario' ";
    
    
?>