import { Container, Row, Col } from 'react-bootstrap'
import CartCard from '../../components/cartCard/CartCard'
import PaymentForm from '../../components/paymentForm/PaymentForm'
import { CartContext } from '../../context/CartContext'
import { UserContext } from '../../context/UserContext'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Payment = () => {
  const { cart, total, getTotal } = useContext(CartContext)
  const { fnIsAuthenticated, getUserData, isAuthenticated } = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    getTotal()
  }, [cart])

  useEffect(() => {
    const token = window.sessionStorage.getItem('token')
    if (token) {
      fnIsAuthenticated(true)
      getUserData()
    } else {
      navigate('/register')
    }
  }, [isAuthenticated])

  return (
    <Container fluid className='min-vh-100 px-5 py-5'>
      <Row>
        <Col xs={12} md={6}>
          <Container className='cart-container py-3'>
            <h2 className='mb-3 title-name'>Revisa tu compra y paga</h2>
            <Row className='justify-content-center gy-3'>
              {cart.map((product) => (
                <Col key={product.id} xs={12}>
                  <CartCard product={product} />
                </Col>
              ))}
              <Col xs={12} className='d-flex justify-content-between align-items-center px-5 py-2 fw-bold'>
                <p>Total</p>
                <p className='text-end'>${total.toLocaleString('es-CL')}</p>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col xs={12} md={6}>
          <PaymentForm />
        </Col>
      </Row>
    </Container>
  )
}
export default Payment
