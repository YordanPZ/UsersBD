const express = require('express')
const router = express.Router()
const UserRouter = require('./user.router')

//* Routes
router.use('/users', UserRouter)


module.exports = router