import { Router } from 'express'
import * as errorsController from '../controllers/errorsController.js'

const router = Router()

router.all('*', errorsController.notFound)

export default router
