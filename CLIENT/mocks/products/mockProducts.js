import products from '../../src/assets/json/MOCK_DATA_PRODUCTS.json'
import { delay, http, HttpResponse } from 'msw'

const getProducts = http.get('/products', async ({ request }) => {
  await delay(300)
  return HttpResponse.json({ status: true, data: products }, { status: 200 })
})

const postProduct = http.post('/products', async ({ request }) => {
  await delay(300)

  const { id = '', userId = '', title = '', price = '', description = '', stock = '', imageUrl = '', category = '', liked = '', score = '' } = await request.json()

  if (id === '' || userId === '' || title === '' || price === '' || description === '' || stock === '' || imageUrl === '' || category === '' || liked === '' || score === '') {
    return HttpResponse.json(
      { status: false, error: 'Todos los campos son requeridos' },
      { status: 400 }
    )
  }

  return HttpResponse.json(
    { status: true, data: { id, userId, title, price: Number(price), description, stock, imageUrl, category, liked, score }, message: '¡Producto creado exitosamente!' },
    { status: 200 }
  )
})

const putProduct = http.put('/products/:id', async ({ request, params }) => {
  await delay(300)

  const { id } = params
  const updatedProduct = await request.json()

  return HttpResponse.json({ status: true, data: { ...updatedProduct, id: +id }, message: 'Producto modificado con exito' }, { status: 201 })
})

const putScore = http.put('/products/score/:id', async ({ request, params }) => {
  await delay(300)

  const { id } = params
  const updatedScore = await request.json()

  return HttpResponse.json({ status: true, data: updatedScore }, { status: 201 })
})

export default [getProducts, postProduct, putProduct, putScore]
