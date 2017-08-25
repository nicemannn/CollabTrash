<!DOCTYPE html>
<html lang="en">

  <head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>CollabTrash</title>

    <!-- Bootstrap core CSS -->
    <link href="../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom fonts for this template -->
    <link rel="stylesheet" href="../vendor/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="../vendor/simple-line-icons/css/simple-line-icons.css">
    <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Catamaran:100,200,300,400,500,600,700,800,900" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Muli" rel="stylesheet">


    <!-- Custom styles for this template -->
    <link href="../css/new-age.min.css" rel="stylesheet">
    <style type="text/css">
        .pin{
            margin-top: 10%;
            padding: 110px 30px 30px 50px;
        }
        .footer{
            margin-top: 18%;
        }
        body{
            background-color:#EEEEEE ; 
        }
        .nav-link{
            color: #868585;
        }
    </style>
  </head>
  <body class="container">
        <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6 pin">
                <center><a href="../"><img src="../img/logo.png" width="200" alt="CollabTrash" class="img-responsive"></a></center>
                <br>
                <br>
                <form action="login.php" method="post" class="form-group"> 
                    <center><h2>Inserira seu PIN</h2></center>
                    <br>
                    <input type="number" name="pin" required class="form-control" placeholder="Ex. 1234">
                    <br>
                    <button type="submit" class="btn btn-success btn-block">Acessar Sistema</button>
                </form>
                <br>
                <a href="cadastrar.php">Não tem conta? Cadastre-se agora!</a>
            </div>
            <div class="col-md-3"></div>
        </div> 

        <div class="container">
            <div class="row">
                <div class="col-md-12 footer">
                   <center>CollabTrash - Coleta Colaborativa</center>
                </div>
            </div>
        </div>
  </body>
  </html>