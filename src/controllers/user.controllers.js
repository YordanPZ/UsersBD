const catchError = require('../utils/catchError')
const User = require('../models/User')

//? METODO GET
const getAll = catchError(async (req, res) => {
    const users = await User.findAll()
    return res.json(users)
})

//? METODO POST
const create = catchError(async (req, res) => {
    const {first_name, last_name , email, password,birthday} = req.body

    const userBody={
        first_name,
        last_name,
        email,
        email,
        password,
        birthday
    }
    const user = await User.create(userBody)
    return res.status(201).json(user)
})

//? GET ONE USER
const getOne = catchError(async (req, res) => {
    const {id} = req.params
    const user = await User.findByPk(id)
    return res.json(user)
})

//? DELETE ONE USER
const deleteOne = catchError(async (req, res) => {

    const {id} = req.params
    await User.destroy({where: {id}})
    return res.sendStatus(204)
})
//? METODO PUT/UPDATE
const update = catchError(async (req, res) => {
    const {id} = req.params
    const {first_name, last_name , email, password,birthday} = req.body
    const userBody={
        first_name,
        last_name,
        email,
        email,
        password,
        birthday
    }
    const user = await User.update(userBody, {where: {id},returning:true})
    return res.json(user)
})


module.exports = {getAll,create,getOne,deleteOne,update}