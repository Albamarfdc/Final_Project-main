import { Router } from 'express'
import * as usersController from '../controllers/usersController.js'
import { authToken } from '../middlewares/authentication.middleware.js'

const router = Router()

router.post('/register', usersController.register)
router.post('/login', usersController.login)
router.get('/profile', authToken, usersController.findProfile)
router.delete('/profile/:id', authToken, usersController.deleteProfile)
router.put('/profile/:id', authToken, usersController.updateProfile)
router.put('/profile/photo/:id', authToken,usersController.updatePhotoProfile)
router.put('/profile/default-photo/:id', authToken, usersController.defaultPhotoProfile)

export default router
