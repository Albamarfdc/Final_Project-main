import Swal from 'sweetalert2'

const politics = () => {
  Swal.fire({
    html: `
        <body>
    <h1>Política de Privacidad</h1>
    <p>En <strong>GeekHub</strong>, nos tomamos muy en serio la privacidad de nuestros clientes y visitantes. Esta Política de Privacidad explica cómo recopilamos, utilizamos y protegemos la información personal que usted nos proporciona cuando visita o realiza una compra en nuestro sitio web <strong>www.geekhub.com</strong>.</p>

    <h2>1. Información que Recopilamos</h2>
    <p>Recopilamos varios tipos de información para brindarle la mejor experiencia de compra posible:</p>
    <ul>
        <li><strong>Información Personal:</strong> Nombre, dirección de correo electrónico, dirección postal, número de teléfono, y detalles de pago.</li>
        <li><strong>Inf
        <li><strong>Cookies y Tecnologías Similares:</strong> Utilizamos cookies para mejorar la funcionalidad del sitio y para personalizar su experiencia.</li>
    </ul>

    <h2>2. Cómo Utilizamos Su Información</h2>
    <p>La información que recopilamos es utilizada para:</p>
    <ul>
        <li>Procesar y cumplir sus pedidos.</li>
        <li>Comunicarnos con usted sobre su pedido o cualquier consulta.</li>
        <li>Mejorar nuestra página web y nuestros servicios.</li>
        <li>Enviar actualizaciones, promociones y ofertas especiales (si ha optado por recibirlas).</li>
        <li>Personalizar su experiencia de compra en base a sus intereses.</li>
    </ul>

    <h2>3. Compartición de Información</h2>
    <p>No vendemos, alquilamos ni compartimos su información personal con terceros, excepto en los siguientes casos:</p>
    <ul>
        <li><strong>Proveedores de Servicios:</strong> Podemos compartir su información con terceros que nos ayudan a operar nuestra tienda, como procesadores de pagos y servicios de entrega.</li>
        <li><strong>Obligaciones Legales:</strong> Podemos divulgar su información si así lo requiere la ley o en respuesta a un proceso legal.</li>
    </ul>

    <h2>4. Seguridad de la Información</h2>
    <p>Implementamos diversas medidas de seguridad para proteger su información personal. Sin embargo, ninguna transmisión de datos a través de Internet es completamente segura, por lo que no podemos garantizar la seguridad absoluta de su información.</p>

    <h2>5. Derechos del Usuario</h2>
    <p>Usted tiene derecho a:</p>
    <ul>
        <li>Acceder, rectificar o eliminar su información personal.</li>
        <li>Retirar su consentimiento para el uso de sus datos.</li>
        <li>Optar por no recibir nuestras comunicaciones promocionales en cualquier momento.</li>
    </ul>
    <p>Para ejercer cualquiera de estos derechos, contáctenos a través de <strong>info@geekhub.com</strong>.</p>

    <h2>6. Cambios en esta Política de Privacidad</h2>
    <p>Podemos actualizar esta Política de Privacidad de vez en cuando. Cualquier cambio será publicado en esta página, y le notificaremos por correo electrónico o mediante un aviso en nuestro sitio web si los cambios son significativos.</p>

    <h2>7. Contacto</h2>
    <p>Si tiene alguna pregunta o inquietud sobre esta Política de Privacidad, no dude en contactarnos a través de <strong>info@geekhub.com</strong> o en la siguiente dirección:</p>
    <p><strong>GeekHub</strong><br>
    Antártida<br>
</body>
    `,
    showCloseButton: true,
    showConfirmButton: false,
    width: '50%'
  })
}

export default politics
