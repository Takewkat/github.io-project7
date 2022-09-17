import { Router } from "express"
import * as userController from "../entities/User/user.controller"
import imageService from "../services/image.service"
import auth from "../middleware/auth.middleware"

const router = Router()

router.post('/auth/signup', userController.signup)
router.post('/auth/login', userController.login)

router.get('/images/:imageFileName', imageService.get)

export default router