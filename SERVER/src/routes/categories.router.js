import { Router } from 'express'
import * as catergoriesController from '../controllers/categoriesController.js'

const router = Router()

router.get('/categories', catergoriesController.findCategories)

export default router
