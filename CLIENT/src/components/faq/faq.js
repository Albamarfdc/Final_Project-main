import Swal from 'sweetalert2'

const faq = () => {
  Swal.fire({
    title: 'Preguntas Frecuentes (FAQ)',
    html: `<div>
    <ol>
        <li>
            <strong>¿Qué tipo de artículos coleccionables ofrecen?</strong>
            <p>Ofrecemos una amplia variedad de artículos coleccionables de temática geek, incluyendo figuras de acción, cómics, pósters, juegos de mesa, réplicas, y mucho más. Nos especializamos en productos relacionados con franquicias populares como videojuegos, películas, series de televisión, y cómics.</p>
        </li>
        <li>
            <strong>¿Los productos que venden son originales?</strong>
            <p>Sí, todos nuestros productos son 100% originales y vienen directamente de distribuidores oficiales. Nos aseguramos de ofrecer solamente artículos de la mejor calidad y autenticidad.</p>
        </li>
        <li>
            <strong>¿Cómo puedo realizar un pedido?</strong>
            <p>Es muy sencillo. Solo debes navegar por nuestro catálogo, seleccionar los productos que desees y añadirlos a tu carrito de compras. Luego, sigue los pasos de pago y envío para completar tu pedido.</p>
        </li>
        <li>
            <strong>¿Cuáles son las opciones de pago disponibles?</strong>
            <p>Aceptamos diversas formas de pago, incluyendo tarjetas de crédito/débito, PayPal, y transferencias bancarias. Puedes ver todas las opciones al momento de finalizar tu compra.</p>
        </li>
        <li>
            <strong>¿Hacen envíos a nivel internacional?</strong>
            <p>Sí, realizamos envíos a varios países. Los costos de envío y el tiempo de entrega varían según la ubicación. Puedes consultar más detalles en la sección de Envíos al momento de realizar tu compra.</p>
        </li>
        <li>
            <strong>¿Cuál es el tiempo estimado de entrega?</strong>
            <p>El tiempo de entrega depende de tu ubicación y del método de envío seleccionado. Generalmente, los pedidos nacionales se entregan en un plazo de 3 a 7 días hábiles, mientras que los envíos internacionales pueden tardar entre 7 y 21 días hábiles.</p>
        </li>
        <li>
            <strong>¿Puedo rastrear mi pedido?</strong>
            <p>Sí, una vez que tu pedido sea enviado, recibirás un correo electrónico con un número de seguimiento y un enlace para que puedas rastrear tu paquete en tiempo real.</p>
        </li>
        <li>
            <strong>¿Cuál es su política de devoluciones?</strong>
            <p>Aceptamos devoluciones dentro de los 30 días posteriores a la recepción del producto, siempre y cuando esté en su estado original, sin abrir y con el embalaje intacto. Para iniciar una devolución, contáctanos a través de info@geekhub.com y te guiaremos en el proceso.</p>
        </li>
        <li>
            <strong>¿Qué debo hacer si recibo un producto defectuoso o incorrecto?</strong>
            <p>Lamentamos cualquier inconveniente. Si recibes un producto defectuoso o incorrecto, por favor contáctanos inmediatamente a través de info@geekhub.com con los detalles de tu pedido y fotos del producto. Nos encargaremos de resolver el problema lo antes posible.</p>
        </li>
        <li>
            <strong>¿Ofrecen descuentos o promociones?</strong>
            <p>Sí, regularmente tenemos ofertas especiales y descuentos. Te recomendamos suscribirte a nuestro boletín de noticias o seguirnos en nuestras redes sociales para estar al tanto de todas nuestras promociones.</p>
        </li>
        <li>
            <strong>¿Puedo hacer un pedido de un artículo que no está en su catálogo?</strong>
            <p>Si estás buscando un artículo específico que no ves en nuestro catálogo, contáctanos a través de info@geekhub.com y haremos lo posible por conseguirlo para ti.</p>
        </li>
        <li>
            <strong>¿Cómo puedo contactar con su servicio de atención al cliente?</strong>
            <p>Puedes contactarnos a través de info@geekhub.com o llamando al +569 555 444 32. Nuestro equipo de atención al cliente está disponible de lun-vie 09:00 a las 18:00hrs para ayudarte con cualquier consulta o problema que puedas tener.</p>
        </li>
    </ol>
</div>`,
    showCloseButton: true,
    showConfirmButton: false,
    width: '50%'
  })
}

export default faq
