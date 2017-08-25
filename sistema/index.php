<?php 
    session_start();
    require("conexao.php");

    if(!isset($_SESSION['pin'])){
      echo "<script>alert('Realize Login para entrar no Sistema!');location.href=('../login/');</script>";
    }
    else{



    $sql = "SELECT * FROM perfil WHERE pf_id  = '$_SESSION[pin]' ";
    $sql2 = "SELECT * FROM post WHERE ps_usuario  = '$_SESSION[pin]' ORDER BY ps_id DESC";
    $sql3 = "SELECT COUNT(ps_usuario)  FROM post WHERE ps_usuario = '$_SESSION[pin]' ";
    $sql4 = "SELECT SUM(ps_pontos)  FROM post WHERE ps_usuario = '$_SESSION[pin]' ";


    $posts = $conexao->query($sql3)->fetchColumn();
    $pontos = $conexao->query($sql4)->fetchColumn();
    
    foreach ($conexao->query($sql) as $key) {
            $nome = $key['pf_nome'];
            $email = $key['pf_email'];
            $foto = $key['pf_foto'];
    }

  }
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="author" content="">

    <title>CollabTrash</title>

    <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,600' rel='stylesheet' type='text/css'>
    <link href="assets/css/toolkit.css" rel="stylesheet">
    
    <link href="assets/css/application.css" rel="stylesheet">

    <style>
      /* note: this is a hack for ios iframe for bootstrap themes shopify page */
      /* this chunk of css is not part of the toolkit :) */
      body {
        width: 1px;
        min-width: 100%;
        *width: 100%;
      }
      .nav{
       color: #5CAE3E!important;
      }
    </style>

  </head>


<body class="bpi">
  


<div class="bpv" id="app-growl"></div>

<nav class="ck rj aeq ro vq app-navbar">
  <button
    class="re rh ayd"
    type="button"
    data-toggle="collapse"
    data-target="#navbarResponsive"
    aria-controls="navbarResponsive"
    aria-expanded="false"
    aria-label="Toggle navigation">
    <span class="rf"></span>
  </button>

  <a class="e" href="#">
    <img src="../img/collab.png" alt="brand">
  </a>

  <div class="collapse f" id="navbarResponsive" >
    <ul class="navbar-nav ain">
      <li class="qx ayd">
        <a class="qv" href="#">Sair</a>
      </li>
    </ul>

    <ul id="#js-popoverContent" class="nav navbar-nav aec afh ayc">
      <li class="qx afx">
        <button class="cg bqv bqw bpq" data-toggle="popover">
          <img class="wg" src="../sistema/assets/fotos/<?php echo $foto?>">
        </button>
      </li>
    </ul>

    <ul class="nav navbar-nav hidden-xs-up" id="js-popoverContent">
      <li class="qx"><a class="qv" href="sair.php">Sair</a></li>
    </ul>
  </div>
</nav>

<div class="by ahy">
  <div class="dq">
    <div class="fh">
      <div class="rp bqq agk">
        <div class="rv" style="background-image: url(assets/img/iceland.jpg);"></div>
        <div class="rq awx">
          <a href="profile/index.html">
            <img class="wg" src="../sistema/assets/fotos/<?php echo $foto?>" width="70">
          </a>

          <h4 class="rr">
            <a class="bph" href="#"><?php echo $nome ?></a>
          </h4>


          <ul class="bqs">
            <li class="bqt">
              <a href="#userModal" class="bph" data-toggle="modal">
                Contribuições
                <h6 class="afl"><?php echo "$posts"; ?></h6>
              </a>
            </li>
            <li class="bqt">
              <a href="#userModal" class="bph" data-toggle="modal">
                Meus Pontos
                <h6 class="afl"><?php echo "$pontos"; ?></h6>
              </a>
            </li>
          </ul>
        </div>
      </div>

    </div>

    <div class="fk">
      
      <ul class="ca bqe bqf agk">
        <li class="tu b ahx">
          <center><h3>Enviar Nova Foto</h3></center>
          <form action="enviafoto.php" method="post" enctype="multipart/form-data" class="input-group">
            <input type="text" name="usuario" value="<?php echo $_SESSION['pin'] ?>" style="display: none;">
            <input type="file" name="foto" class="form-control">
            <br>
            <button type="submit" class="cg pl">Enviar Foto</button>
          </form>
        </li>
      </ul>



      <ul class="ca bqe bqf agk">

        <?php 

        foreach ($conexao->query($sql2) as $key) {
         print "
          <li class='tu b ahx' style='margin-top:10px;'>
            <img class='bqa wp yy agc' 
            src='../sistema/assets/fotos/".$foto."' />
            <div class='tv'>
              <div class='bqj'>
                  <small class='aec axr'><a href='excluipost.php?post=".$key['ps_id']."' style='color:red;'>X</a></small>
                  <h6>".$nome."</h6>
              </div>
              
              <div class='bqg' data-grid='images'>
                 <img style='display: none' data-width='640'  src='assets/posts/".$key['ps_foto']."'>
              </div>
            </div>
          </li> ";
          }
              ?>
      </ul>
    </div>
    
    <div class="fh">
      <div class="rp bqu">
        <div class="rq">
          <center>© 2017 - CollabTrash<br>
          Coleta de Resíduos Sólidos Colaborativa
        </div>
      </div>
    </div>
  </div>
</div>


    <script src="assets/js/jquery.min.js"></script>    
    <script src="assets/js/tether.min.js"></script>
    <script src="assets/js/chart.js"></script>
    <script src="assets/js/toolkit.js"></script>
    <script src="assets/js/application.js"></script>
    <script>
      // execute/clear BS loaders for docs
      $(function(){
        if (window.BS&&window.BS.loader&&window.BS.loader.length) {
          while(BS.loader.length){(BS.loader.pop())()}
        }
      })
    </script>
  </body>
</html>