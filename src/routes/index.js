const express = require('express')
const router = express.Router()
const carRouter = require('./user.router')

//* Routes
router.use('/users', carRouter)


module.exports = router