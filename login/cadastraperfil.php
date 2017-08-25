<?php
	require('../sistema/conexao.php');

	$pf_nome = $_POST['nome'];
	$pf_email = $_POST['email'];
  
	// Imagem
  $destino = "../sistema/assets/fotos/".$_FILES['foto']['name'];
  $pf_foto = $_FILES['foto']['name']; 
  $arquivo_tmp = $_FILES['foto']['tmp_name'];
  move_uploaded_file($arquivo_tmp,$destino);

  //echo "$pf_nome<br>$pf_email<br>$pf_foto";
   

  $sql = "

		INSERT INTO

			perfil

			(pf_nome , pf_email, pf_foto )

			VALUES

			(:pf_nome, :pf_email,:pf_foto)

	"; 

         $stmt = $conexao->prepare($sql);

         $stmt->execute(
            array(
                  ':pf_nome'=> $pf_nome,
                  ':pf_email'=> $pf_email,
                  ':pf_foto' => $pf_foto
               )
            );

     if ($stmt) {
     	echo "<script>alert('Cadastro realizado com sucesso, faça o login para entrar no sistema!');location.href=('confirmacao.php');</script>";
     }

	