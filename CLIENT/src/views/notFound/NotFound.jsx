import './NotFound.css'
import back from '../../assets/img/404.png'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }
  return (
    <div className='notFound'>
      <img src={back} className='img404' />
      <div className='text-overlay'>
        <h1>Lo sentimos!</h1>
        <h1>Estás perdido en el espacio</h1>
        <p>Parece que la página que estás intentando visitar se ha movido o ya no existe. Por favor verifique la dirección para asegurarse de haber escrito correctamente o regrese a la página principal.</p>
        <Button id='goHome' onClick={handleClick}>Volver al Inicio</Button>
      </div>
    </div>
  )
}
export default NotFound
