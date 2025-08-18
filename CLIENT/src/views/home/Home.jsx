import { useEffect, useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import Carousel from '../../components/carousel/Carousel'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

const Home = () => {
  const { fnIsAuthenticated, isAuthenticated } = useContext(UserContext)

  useEffect(() => {
    const token = window.sessionStorage.getItem('token')
    if (token) {
      fnIsAuthenticated(true)
    }
  }, [isAuthenticated])

  return (
    <>
      <Header />
      <Carousel />
      <Footer />
    </>
  )
}
export default Home
