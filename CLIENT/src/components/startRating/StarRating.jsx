import './StarRating.css'
import { useState, useEffect, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { URLBASE } from '../../config/constants'
import { UserContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const StarRating = ({ totalStars = 5, productId }) => {
  const [rating, setRating] = useState(0)
  const [ratingUser, setRatingUser] = useState(null)
  const { activeUser } = useContext(UserContext)
  const userId = activeUser.id

  const navigate = useNavigate()
  const token = window.sessionStorage.getItem('token')

  const getScore = async () => {
    const response = await axios.get(`${URLBASE}/product-details/score/${productId}`)
    const [score] = response.data.message
    setRating(score.round)
  }

  const getScoreByUser = async () => {
    const response = await axios.get(`${URLBASE}/product-details/score/${userId}/${productId}`, { headers: { Authorization: `Bearer ${token}` } })
    const [score] = response.data.message
    setRatingUser(score)
  }

  useEffect(() => {
    getScore()
  }, [])

  useEffect(() => {
    if (userId) {
      getScoreByUser()
    }
  }, [rating])

  const toRegister = () => {
    Swal.fire({
      title: 'Para calificar un producto debes iniciar sesión o registrarte',
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

  const handleClick = async (value) => {
    if (userId) {
      if (!ratingUser) {
        await axios.post(`${URLBASE}/product-details/score/${productId}`, { userId, score: value }, { headers: { Authorization: `Bearer ${token}` } })
        setRating(value)
      } else if (ratingUser) {
        await axios.put(`${URLBASE}/product-details/score/${productId}`, { userId, score: value }, { headers: { Authorization: `Bearer ${token}` } })
        setRating(value)
      }
    } else {
      toRegister()
    }
    getScore()
  }

  return (
    <div className='star-rating'>
      {[...Array(totalStars)].map((star, index) => {
        const value = index + 1
        return (
          <FontAwesomeIcon
            key={index}
            icon={faStar}
            className={value <= rating ? 'star selected' : 'star'}
            onClick={() => handleClick(value)}
          />
        )
      })}
    </div>
  )
}

export default StarRating
