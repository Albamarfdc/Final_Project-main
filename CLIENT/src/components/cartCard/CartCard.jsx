import { Container, Col, Row, Image, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../context/CartContext'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const trashLogo = <FontAwesomeIcon icon={faTrash} size='xl' />

const CartCard = ({ product }) => {
  const { cart, addToCart, removeFromCart, removeItemFromCart, getTotal } = useContext(CartContext)
  const { image_url: imageUrl } = product
  const navigate = useNavigate()
  useEffect(() => {
    getTotal()
  }, [cart])

  return (
    <Container className='border-bottom border-2'>
      <Row className='px-4 py-3'>
        <Col xs={12} md={4} className='p-0'>
          <Image rounded fluid className='p-0' src={`${imageUrl}`} onClick={() => navigate(`/product-details/${product.id}`)} />
        </Col>
        <Col xs={10} md={6} className='d-flex flex-column justify-content-between ps-4'>
          <div>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
          </div>
          <div className='d-flex justify-content-start align-items-center'>
            <div className='d-flex justify-content-center align-items-center text-center price-article'>
              <Button onClick={() => removeFromCart(product)}>-</Button>
              <p className='mx-2 mb-0 fw-bolder fs-5'>{product.qty}</p>
              <Button onClick={() => addToCart(product)}>+</Button>
            </div>
          </div>
        </Col>
        <Col md={12} lg={2} className='d-flex flex-column justify-content-between align-items-end'>
          <Button variant='outline'>
            <i onClick={() => removeItemFromCart(product)} className='px-2'>{trashLogo}</i>
          </Button>
          <p className='m-0 py-2 fs-5'>${(product.price * product.qty).toLocaleString('es-CL')}</p>
        </Col>
      </Row>
    </Container>
  )
}
export default CartCard
