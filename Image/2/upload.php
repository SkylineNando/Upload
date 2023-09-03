<?php
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_FILES["file"])) {
    $targetDirectory = "uploads/";
    $targetFile = $targetDirectory . basename($_FILES["file"]["name"]);

    if (move_uploaded_file($_FILES["file"]["tmp_name"], $targetFile)) {
        echo "Upload bem-sucedido!";
    } else {
        echo "Erro ao enviar o arquivo.";
    }
}
?>
