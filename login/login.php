<?php
	session_start();

	$_SESSION['pin'] = $_POST['pin'];

	//echo "$_SESSION[pin]";

	require("../sistema/conexao.php");

	$sql = "SELECT pf_id FROM perfil WHERE pf_id =  '$_SESSION[pin]' ";

	$valor = $conexao->query($sql)->fetchColumn();

	if ($valor>0) {
			echo "<script>location.href=('../sistema/');</script>";

	}
	else{
		echo "<script>alert('Não foi encontrado usuário para esse número!');location.href=('../');</script>";
	}

?>	