const {getAll,create,getOne,deleteOne,update} = require('../controllers/user.controllers')
const express = require('express')

const UserRouter = express.Router()

UserRouter.route('/')
    .get(getAll)
    .post(create)

UserRouter.route('/:id')
    .get(getOne)
    .delete(deleteOne)
    .put(update)
    
module.exports = UserRouter
