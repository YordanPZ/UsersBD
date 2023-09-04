const {getAll,create,getOne,deleteOne,update} = require('../controllers/user.controllers')
const express = require('express')

const carRouter = express.Router()

carRouter.route('/')
    .get(getAll)
    .post(create)

carRouter.route('/:id')
    .get(getOne)
    .delete(deleteOne)
    .put(update)
    
module.exports = carRouter
