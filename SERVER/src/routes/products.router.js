import { Router } from 'express'
import * as productsController from '../controllers/productsController.js'
import { authToken } from '../middlewares/authentication.middleware.js'

const router = Router()

router.get('/catalogue', productsController.findProducts)
router.get('/product-details/:id', productsController.findProductById)
router.post('/my-products', authToken, productsController.createProduct)
router.get('/my-products/:userId', authToken, productsController.findUserProducts)
router.put('/my-products/:id', authToken, productsController.updateProduct)
router.delete('/my-products/:productId', authToken, productsController.deleteProduct)

export default router
