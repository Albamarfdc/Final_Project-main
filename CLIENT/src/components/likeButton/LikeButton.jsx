import './LikeButton.css'
import { Button } from 'react-bootstrap'
import IconHeart from '../iconHeart/IconHeart'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { URLBASE } from '../../config/constants'
import { useNavigate } from 'react-router-dom'
import { ProductsContext } from '../../context/ProductsContext'
import Swal from 'sweetalert2'

const LikeButton = ({ productId, userId }) => {
  const { getFavorites } = useContext(ProductsContext)
  const [isLiked, setIsLiked] = useState(false)
  const token = window.sessionStorage.getItem('token')
  const navigate = useNavigate()

  useEffect(() => {
    const checkFavoriteStatus = async () => {
      try {
        if (userId) {
          const response = await axios.get(`${URLBASE}/is-favorite/${userId}/${productId}`, { headers: { Authorization: `Bearer ${token}` } })
          const { is_favorite: isFavorite } = response.data.message[0]
          setIsLiked(isFavorite)
        } else {
          setIsLiked(false)
        }
      } catch (error) {
        console.error('Error al verificar el estado de favoritos', error)
      }
    }
    checkFavoriteStatus()
  }, [userId, productId])

  const toggleLike = async () => {
    try {
      if (isLiked) {
        await axios.delete(`${URLBASE}/favorites/${userId}/`, { data: { productId }, headers: { Authorization: `Bearer ${token}` } })
      } else {
        await axios.post(`${URLBASE}/favorites/${userId}/`, { productId }, { headers: { Authorization: `Bearer ${token}` } })
      }
      setIsLiked(!isLiked)
    } catch (error) {
      console.error('Error al actualizar favoritos', error)
    }
    getFavorites(userId)
  }

  const toRegister = () => {
    Swal.fire({
      title: 'Para dar like debes iniciar sesión o registrarte',
      showCancelButton: true,
      confirmButtonColor: '#756AB6',
      cancelButtonColor: '#E0AED0',
      confirmButtonText: 'Registrate',
      cancelButtonText: 'Quedarme aquí'
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/register')
      }
    })
  }

  return (
    <Button className='originalLike' onClick={() => { userId ? toggleLike(userId, productId) : toRegister() }}>{isLiked ? <IconHeart filled /> : <IconHeart />}</Button>
  )
}
export default LikeButton
