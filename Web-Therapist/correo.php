<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];
    $correo = $_POST["email"];
    $mensaje = $_POST["mensaje"];
    
    // Configura la información del servidor SMTP
    $smtpServer = "tu_servidor_smtp"; // Por ejemplo, "smtp.tudominio.com"
    $smtpPort = 587; // Puerto SMTP, generalmente 587 o 25
    $smtpUsuario = "tu_usuario_smtp"; // Usuario SMTP
    $smtpClave = "tu_clave_smtp"; // Clave SMTP
    
    // Crea el mensaje de correo
    $subject = "Nuevo mensaje de contacto de $nombre $apellido";
    $message = "Nombre: $nombre $apellido\nCorreo electrónico: $correo\nMensaje: $mensaje";
    
    // Configura los encabezados del correo
    $headers = "From: $correo\r\n";
    $headers .= "Reply-To: $correo\r\n";
    
    // Envía el correo
    if (mail("destinatario@tudominio.com", $subject, $message, $headers)) {
        echo "success"; // Envia una respuesta al cliente indicando éxito
    } else {
        echo "error"; // Envia una respuesta al cliente indicando un error
    }
} else {
    echo "error"; // Envia una respuesta al cliente indicando un error si no se recibe una solicitud POST
}
?>
