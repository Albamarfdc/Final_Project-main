import 'dotenv/config'
import request from 'supertest'
import app from '../../src/server/app.js'
import { describe, test, expect } from 'vitest'

const USER_VALID_LOGIN = { email: 'pepito@test.com', password: '1234' }
const NEW_PRODUCT = { userId: 1, title: 'Vivien Reid', price: 3000, description: 'Carta magic planeswalker', stock: 3, imageUrl: 'https://i.pinimg.com/originals/9b/28/64/9b28645eb7dc453f362927da6e0aa73b.png', category: 'TCG' }
const UPDATED_PRODUCT = { userId: 1, title: 'Vivien Reid', price: 10000, description: 'Carta magic planeswalker', stock: 3, imageUrl: 'https://i.pinimg.com/originals/9b/28/64/9b28645eb7dc453f362927da6e0aa73b.png', category: 'TCG' }
const PRODUCT_ID = 1

describe('APP SERVER', () => {
  test('[ALL] /* | It should return a 404 code, if the page does not exist', async () => {
    const response = await request(app).get('/fake_url').send()

    expect(response.statusCode).toBe(404)
    expect(response.body).toBeInstanceOf(Object)
    expect(response.body).toEqual({ status: false, code: 404, message: 'Page not found.' })
  })
})

describe('CRUD operations of products', () => {
  test('[POST] /my-products | It should return 201 when product is successfully created', async () => {
    const { body: { message: { token } } } = await request(app).post('/login').send(USER_VALID_LOGIN)
    const response = await request(app).post('/my-products').set('Authorization', `Bearer ${token}`).send(NEW_PRODUCT)

    expect(response.statusCode).toBe(201)
    expect(response.body.message).toBeInstanceOf(Array)
  })

  test('[GET] /catalogue | It should return 200 and the products', async () => {
    const response = await request(app).get('/catalogue').send()

    expect(response.statusCode).toBe(200)
    expect(response.body.message).toBeInstanceOf(Array)
    expect(response.body.message.length).toBeGreaterThan(0)
  })

  test('[PUT] /my-products/:id | It should return 200 when product is successfully updated', async () => {
    const { body: { message: { token } } } = await request(app).post('/login').send(USER_VALID_LOGIN)
    const response = await request(app).put(`/my-products/${PRODUCT_ID}`).set('Authorization', `Bearer ${token}`).send(UPDATED_PRODUCT)

    expect(response.statusCode).toBe(200)
    expect(response.body.message).toBeInstanceOf(Array)
  })

  test('[DELETE] /my-products/:id | It should return 200 and success message when product is successfully deleted', async () => {
    const { body: { message: { token } } } = await request(app).post('/login').send(USER_VALID_LOGIN)
    const response = await request(app).delete(`/my-products/${PRODUCT_ID}`).set('Authorization', `Bearer ${token}`)

    expect(response.statusCode).toBe(200)
    expect(response.body).toBeInstanceOf(Object)
    expect(response.body).toHaveProperty('message')
  })
})
