<?php
// URL del WSDL del servicio SOAP
$wsdl = "http://www.dneonline.com/calculator.asmx?WSDL";

try {
    // Crear el cliente SOAP
    $client = new SoapClient($wsdl);

    // Obtener y mostrar las funciones disponibles
    echo "🔍 Funciones Disponibles:\n";
    $functions = $client->__getFunctions();
    foreach ($functions as $function) {
        echo $function . "\n";
    }

    // Obtener y mostrar los tipos disponibles
    echo "\n🔎 Tipos Disponibles:\n";
    $types = $client->__getTypes();
    foreach ($types as $type) {
        echo $type . "\n";
    }

} catch (SoapFault $e) {
    // Manejo de errores
    echo "Error: " . $e->getMessage();
}
?>
