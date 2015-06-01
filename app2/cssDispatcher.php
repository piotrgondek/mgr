<?
//sleep(3);

header('Content-Type: text/css');

$fileName = $_GET['file'];
$file = fopen($fileName, 'r');
echo fread($file, filesize($fileName));
fclose($file);

?>
