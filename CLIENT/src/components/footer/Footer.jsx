import './Footer.css'
import { Container, Row, Col } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import logo from '../../assets/img/logo-white.png'
import { useContext } from 'react'
import handleConditions from '../termsAndConditions/termsAndConditions.js'
import handlePolitics from '../politics/politics.js'
import handleFaq from '../faq/faq.js'
import { UserContext } from '../../context/UserContext.jsx'
import Swal from 'sweetalert2'

const instaLogo = <FontAwesomeIcon icon={faInstagram} size='2xl' />
const xtwitterLogo = <FontAwesomeIcon icon={faXTwitter} size='2xl' />
const facebookLogo = <FontAwesomeIcon icon={faFacebook} size='2xl' />
const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22650034.730859995!2d0!3d-69.72697362493312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa4b9967b3390754b%3A0x6e52be1f740f2075!2sAnt%C3%A1rtida!5e0!3m2!1ses!2scl!4v1721459642136!5m2!1ses!2scl'

const Footer = () => {
  const { isAuthenticated } = useContext(UserContext)
  const navigate = useNavigate()

  const handleFilterLink = (e) => {
    e.preventDefault()
    const category = e.target.name.toLowerCase()
    navigate(`/catalogue/?category=${category}`)
  }

  const toRegister = () => {
    Swal.fire({
      title: 'Para publicar un producto debes iniciar sesión o registrarte',
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

  const handleClick = (e) => {
    if (!isAuthenticated) {
      toRegister()
    } else {
      navigate('/my-products')
    }
    e.preventDefault()
  }

  return (
    <Container fluid className='principalfooter py-4 px-4'>
      <Row>
        <Col md={12} lg={4}>
          <div className='d-flex flex-column'>
            <img src={logo} className='logo-img' />
            <iframe src={map} style={{ border: 0, width: '350px', height: '200px' }} loading='lazy' referrerPolicy='no-referrer-when-downgrade' className='rounded-1'> </iframe>
          </div>
        </Col>
        <Col md={12} lg={3} className='d-flex flex-column justify-content-between'>
          <article className='d-flex flex-column justify-content-between pb-2'>
            <h5>Categorías</h5>
            <NavLink className='mb-1' name='Juegos de Mesa' onClick={handleFilterLink}>Juegos de Mesa</NavLink>
            <NavLink className='mb-1' name='TCG' onClick={handleFilterLink}>TCG</NavLink>
            <NavLink className='mb-1' name='Figuras Coleccionables' onClick={handleFilterLink}>Figuras Coleccionables</NavLink>
            <NavLink className='mb-1' name='Mangas y Cómics' onClick={handleFilterLink}>Mangas y Cómics</NavLink>
            <NavLink className='mb-1' name='Álbumes y Láminas' onClick={handleFilterLink}>Álbumes y Láminas</NavLink>
          </article>
          <article className='d-flex flex-column'>
            <h5>Vende</h5>
            <NavLink className='footerlink' onClick={handleClick}>Publica un producto</NavLink>
          </article>
        </Col>
        <Col md={12} lg={3} className='d-flex flex-column justify-content-between'>
          <div className='d-flex flex-column'>
            <h5>Ayuda</h5>
            <NavLink onClick={handleFaq}>Preguntas Frecuentes</NavLink>
            <a href='mailto: info@geekhub.com'>info@geekhub.com</a>
            <NavLink to='https://chat.whatsapp.com/CGobfcrDWaKFOF8pRffIRI' target='_blank' className='navlinks'>Contáctanos</NavLink>
          </div>
          <div className='d-flex flex-column'>
            <NavLink onClick={handleConditions}>Términos y condiciones</NavLink>
            <NavLink onClick={handlePolitics}>Política de privacidad</NavLink>
          </div>
        </Col>
        <Col md={12} lg={2} className='d-flex flex-column justify-content-end'>
          <article className='d-flex flex-column'>
            <p>Síguenos</p>
            <div>
              <NavLink to='https://www.instagram.com/geekhubg51/' target='_blank' className='navlinks'><i className='pe-2'>{instaLogo}</i></NavLink>
              <NavLink to='https://x.com/geekhubg51' target='_blank' className='navlinks'><i className='pe-2'>{xtwitterLogo}</i></NavLink>
              <NavLink to='https://www.facebook.com/profile.php?id=61564609434017' target='_blank' className='navlinks'><i className='pe-2'>{facebookLogo}</i></NavLink>
            </div>
          </article>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
