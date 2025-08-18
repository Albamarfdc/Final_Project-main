import { Router } from 'express'
import * as productsController from '../controllers/scoresController.js'
import { authToken } from '../middlewares/authentication.middleware.js'

const router = Router()

router.post('/product-details/score/:productId', authToken, productsController.scoreProduct)
router.get('/product-details/score/:productId', productsController.findScoreProduct)
router.get('/product-details/score/:userId/:productId', authToken, productsController.findScoreByUser)
router.put('/product-details/score/:productId', authToken, productsController.updateScoreProduct)

export default router
