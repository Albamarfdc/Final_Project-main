import './Favorites.css'
import { useContext, useEffect } from 'react'
import { ProductsContext } from '../../context/ProductsContext'
import { UserContext } from '../../context/UserContext'
import Liked from '../../components/Liked/Liked'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Favorites = () => {
  const navigate = useNavigate()
  const { liked, getFavorites } = useContext(ProductsContext)
  const { activeUser, getUserData } = useContext(UserContext)

  useEffect(() => {
    getUserData()
  }, [])

  useEffect(() => {
    if (activeUser) {
      getFavorites(activeUser.id)
    } else {
      navigate('/register')
    }
  }, [activeUser, liked])

  return (
    <div className='fav'>
      {liked.length ? <Liked /> : <div><h3>Agrega tus productos favoritos de la tienda</h3><Button id='goStore' onClick={() => navigate('/catalogue')}>ir a la tienda</Button></div>}
    </div>
  )
}
export default Favorites
