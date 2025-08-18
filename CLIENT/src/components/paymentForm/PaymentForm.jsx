import './PaymentForm.css'
import { Row, Col, Button, Form } from 'react-bootstrap'
import { CartContext } from '../../context/CartContext'
import Swal from 'sweetalert2'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PaymentForm = () => {
  const { total, fnCart } = useContext(CartContext)
  const [inputValue, setInputValue] = useState({
    cardNumber: '',
    cardCvc: '',
    cardName: '',
    cardDay: '',
    cardMonth: '',
    cardYear: ''
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    e.preventDefault()
    setInputValue({ ...inputValue, [e.target.name]: e.target.value })
  }

  const thanks = (e) => {
    e.preventDefault()
    const { cardNumber, cardCvc, cardName, cardDay, cardMonth, cardYear } = inputValue

    if (total > 0 && (cardNumber === '' || cardCvc === '' || cardName === '' || cardDay === '' || cardMonth === '' || cardYear === '')) {
      Swal.fire({
        title: 'Agrega los datos de pago'
      })
    } else if (total === 0 && (cardNumber === '' || cardCvc === '' || cardName === '' || cardDay === '' || cardMonth === '' || cardYear === '')) {
      Swal.fire('Agrega un producto!')
    } else {
      Swal.fire({
        title: 'Gracias por tu compra',
        text: `Orden Nº ${total}`
      })
      fnCart([])
      setInputValue({
        cardNumber: '',
        cardCvc: '',
        cardName: '',
        cardDay: '',
        cardMonth: '',
        cardYear: ''
      })
      navigate('/')
    }
  }

  return (
    <Form className='p-4 form-container'>
      <Row className='mb-3'>
        <Col>
          <Form.Label>Número de tarjeta</Form.Label>
          <Form.Control type='number' name='cardNumber' placeholder='1111 2222 333 444' onChange={handleChange} />
        </Col>
        <Col>
          <Form.Label>CVC</Form.Label>
          <Form.Control type='number' name='cardCvc' placeholder='555' onChange={handleChange} />
        </Col>
      </Row>
      <Form.Group className='mb-3'>
        <Form.Label>Nombre del titular</Form.Label>
        <Form.Control type='text' name='cardName' placeholder='Dominga Chuky' onChange={handleChange} />
      </Form.Group>
      <Form.Label>Fecha de vencimiento</Form.Label>
      <Row className='mb-3'>
        <Col xs={2}>
          <Form.Control type='number' name='cardDay' placeholder='15' onChange={handleChange} min='1' max='31' />
        </Col>
        <Col xs={6}>
          <Form.Control type='number' name='cardMonth' placeholder='11' onChange={handleChange} min='1' max='12' />
        </Col>
        <Col xs={4}>
          <Form.Control type='number' name='cardYear' placeholder='2027' onChange={handleChange} min='2024' />
        </Col>
      </Row>
      <Button variant='primary' type='submit' size='lg' className='w-100 mt-2' onClick={thanks}>Pagar</Button>
    </Form>
  )
}
export default PaymentForm
