import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { URLBASE } from '../config/constants'

export const UserContext = createContext()

const UserContextProvider = ({ children }) => {
  const [activeUser, setActiveUser] = useState({})
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const navigate = useNavigate()

  const fnActiveUser = (user) => setActiveUser(user)
  const fnIsAuthenticated = (token) => setIsAuthenticated(token)

  const getUserData = () => {
    const token = window.sessionStorage.getItem('token')
    axios.get(`${URLBASE}/profile`, { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => {
        const { id, first_name: firstName, last_name: lastName, phone_number: phoneNumber, photo_url: photoUrl, address, email } = response.data.message[0]
        fnActiveUser({ id, firstName, lastName, phoneNumber, photoUrl, address, email })
      })
      .catch(({ response: { data } }) => {
        console.error(data)
        navigate('/')
      })
  }

  const globalState = { activeUser, fnActiveUser, isAuthenticated, fnIsAuthenticated, getUserData }

  return (
    <UserContext.Provider value={globalState}>
      {children}
    </UserContext.Provider>
  )
}
export default UserContextProvider
