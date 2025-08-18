import { createContext, useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const CartContext = createContext()

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)

  const addNotify = () => {
    toast.success('Producto agregado', {
      position: 'bottom-right',
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored'
    })
  }

  const removeNotify = () => {
    toast.error('Producto eliminado', {
      position: 'bottom-right',
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored'
    })
  }

  const stockNotify = () => {
    toast.error('Limite de stock alcanzado', {
      position: 'bottom-right',
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored'
    })
  }

  const addToCart = (product) => {
    const newCart = JSON.parse(JSON.stringify(cart))
    newCart.findIndex((item) => item.id === product.id)
    const index = newCart.findIndex((item) => item.id === product.id)
    if (index === -1) {
      // EL ELEMENTO NO EXISTE
      setCart([...cart, { ...product, qty: 1 }])
      addNotify()
    } else {
      if (newCart[index].stock > newCart[index].qty) {
        newCart[index].qty += 1
        addNotify()
      } else {
        stockNotify()
      }
      setCart(newCart)
    }
  }

  const removeFromCart = (product) => {
    removeNotify()
    const newCart = [...cart]
    const index = newCart.findIndex((item) => item.id === product.id)
    if (newCart[index].qty > 1) {
      newCart[index] = { ...newCart[index], qty: newCart[index].qty - 1 }
      setCart(newCart)
    } else {
      setCart(newCart.filter((item) => item.id !== product.id))
    }
  }

  const removeItemFromCart = (product) => {
    removeNotify()
    const newCart = [...cart]
    setCart(newCart.filter((item) => item.id !== product.id))
  }

  const getTotal = () => {
    setTotal(cart.reduce((acc, item) => (acc + (item.price * item.qty)), 0))
  }

  const fnCart = (cart) => setCart(cart)
  const globalState = { cart, total, getTotal, addToCart, removeFromCart, removeItemFromCart, fnCart, removeNotify }

  return (
    <CartContext.Provider value={globalState}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
