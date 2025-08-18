import Swal from 'sweetalert2'

const termsAndConditions = () => {
  Swal.fire({
    title: 'Términos y Condiciones',
    html: `<div>
             <p>
              Cuando realices una compra a través de nuestra página será necesario que te registres. Busca y agrega los productos que necesites a tu carro, elige modalidad de pago y si retirarás en tienda o necesitarás despacho. Nuestra página solo mostrará productos que estén disponibles. Si no encuentras lo que buscas contáctanos a través de Facebook o Instagram y quizás te podamos ayudar tomando tu pedido especial. 
            </p>
            <p>
              Todos nuestros pedidos son preparados con cuidado para que tus productos lleguen impecables a tus manos. Una vez que realices tu compra realizaremos el despacho en 48hrs a más tardar. Si hubiera algún motivo que retrase el envío más allá de este plazo nos comunicaremos contigo indicando los motivos y la nueva fecha de envío. Actualmente estamos enviando por Chilexpress y Starken en modalidad por pagar. También realizamos repartos en Concepción Centro sin costo, así que si lo necesitas escríbenos y coordinamos la entrega. No olvides que puedes comprar online y elegir retiro en tienda. 
            </p>  
            <p>
              Si por algún motivo necesitas cambiar tu producto, este debe estar sellado y sin uso y deberás traerlo en un plazo no mayor a 5 días hábiles. En este caso podrás cambiarlo por un producto de igual valor o mayor, en cuyo caso deberás pagar la diferencia.
            </p>  
          </div>`,
    showCloseButton: true,
    showConfirmButton: false,
    width: '50%'
  })
}

export default termsAndConditions
