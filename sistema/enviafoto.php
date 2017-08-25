<?php
  session_start();
	require('../sistema/conexao.php');

	$ps_usuario = $_POST['usuario'];
  
	// Imagem
  $destino = "../sistema/assets/posts/".$_FILES['foto']['name'];
  $ps_foto = $_FILES['foto']['name']; 
  $arquivo_tmp = $_FILES['foto']['tmp_name'];
  move_uploaded_file($arquivo_tmp,$destino);

  //echo "$pf_nome<br>$pf_email<br>$pf_foto";
  $ps_pontos = 80;   

  $sql = "

		INSERT INTO

			post

			(ps_usuario , ps_foto, ps_pontos )

			VALUES

			(:ps_usuario ,:ps_foto, :ps_pontos)

	"; 

         $stmt = $conexao->prepare($sql);

         $stmt->execute(
            array(
                  ':ps_usuario'=> $ps_usuario,
                  ':ps_foto'=> $ps_foto,
                  'ps_pontos'=>$ps_pontos
               )
            );

     if ($stmt) {
          echo "<script>alert('Cadastro realizado com sucesso, faça o login para entrar no sistema!');location.href=('index.php?pin=".$_SESSION['usuario']."');</script>";
     }

	