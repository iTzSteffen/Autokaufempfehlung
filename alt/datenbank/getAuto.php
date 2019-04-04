<?php
$mysqli = new mysqli("autokaufempfehlung.database.windows.net", "steffen", "F646bb91#", "Autokaufempfehlung");
if($mysqli->connect_error) {
  exit('Could not connect');
}

$sql = "SELECT hersteller, modell, preisab, kategorie, anzahlsitze, zielgruppe1, zielgruppe2, zielgruppe3
FROM audi WHERE modell = ?";

$stmt = $mysqli->prepare($sql);
$stmt->bind_param("s", $_GET['q']);
$stmt->execute();
$stmt->store_result();
$stmt->bind_result($hersteller, $modell, $preisab, $kategorie, $anzahlsitze, $zielgruppe1, $zielgruppe2, $zielgruppe3);
$stmt->fetch();
$stmt->close();

echo "<table>";
echo "<tr>";
echo "<th>Hersteller</th>";
echo "<td>" . $hersteller . "</td>";
echo "<th>Modell</th>";
echo "<td>" . $modell . "</td>";
echo "<th>Preis ab</th>";
echo "<td>" . $preisab . "</td>";
echo "<th>Kategorie</th>";
echo "<td>" . $kategorie . "</td>";
echo "<th>Anzahl Sitze</th>";
echo "<td>" . $anzahlsitze . "</td>";
echo "<th>1. Zielgruppe</th>";
echo "<td>" . $zielgruppe1 . "</td>";
echo "<th>2. Zielgruppe</th>";
echo "<td>" . $zielgruppe2 . "</td>";
echo "<th>3. Zielgruppe</th>";
echo "<td>" . $zielgruppe3 . "</td>";
echo "</tr>";
echo "</table>";
?>
