import { Router } from 'express'

import controller from './controllers'

const router = Router()

router.get('/', controller.get)
router.get('/delete/:id', controller.softDelete)

export default router
