<?
sleep(3);

header('Content-Type: application/javascript');

$fileName = $_GET['file'];
$file = fopen($fileName, 'r');
echo fread($file, filesize($fileName));
fclose($file);

?>
