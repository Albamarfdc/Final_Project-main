import './Liked.css'
import { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContext'
import { UserContext } from '../../context/UserContext'
import { CartContext } from '../../context/CartContext'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import LikeButton from '../likeButton/LikeButton'

const cart = <FontAwesomeIcon icon={faShoppingCart} size='3x' />

const Liked = () => {
  const { liked } = useContext(ProductsContext)
  const { activeUser } = useContext(UserContext)
  const { addToCart } = useContext(CartContext)
  const navigate = useNavigate()
  const activeUserId = activeUser.id

  return (
    <Container className='pt-5'>
      <h1>Mis Favoritos</h1>
      <div className='d-flex justify-content-center'>
        <div className='likeContainer m-3 border p-4'>
          {liked.map(({ id: favoriteId, image_url: imageUrl, product_id: productId, title, price, description, stock, user_id: userId, category }) => (
            <div key={favoriteId}>
              <div className='wholeLike d-flex justify-content-between w-100'>
                <div className='d-flex gap-2 justify-content-start align-items-center'>
                  <img src={imageUrl} alt='' style={{ width: '180px', cursor: 'pointer', paddingLeft: '20px' }} onClick={() => navigate(`/product-details/${productId}`)} />
                  <div className='containerLike'>
                    <h5 className='m-0 text-capitalize'>{title}</h5>
                    <h6 className='text-dark'>Precio:${price.toLocaleString('es-CL')}</h6>
                    <h6 className='likeDescription text-dark'>Descripción:{description}</h6>
                  </div>
                </div>
                <Col md={6} className='d-flex justify-content-center align-items-center'>
                  <div className='text-start'>
                    <Row>
                      <Col>
                        <section style={{ paddingRight: '20px' }} className='d-flex align-items-center justify-content-end'>
                          <LikeButton userId={activeUserId} productId={productId} />
                          <Button onClick={() => addToCart({ image_url: imageUrl, id: productId, title, price, description, stock, user_id: userId, category })}>{cart}</Button>
                        </section>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default Liked
