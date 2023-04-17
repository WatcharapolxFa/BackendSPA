const express = require('express')
const router = express.Router()

const userController = require('../controllers/user')

router.post('/user', userController.InsertUserController)
router.get('/user', userController.GetAllUsers)

module.exports = router;