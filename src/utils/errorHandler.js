const errorHandler = (error,_req,res, _next) => {
    if (error.name === 'SequelizeValidationError') {
        const errors = error.errors.map(err => err.message)
        return res.status(400).json({ errors })
    }
    return res.status(500).json({ error:error, error: error.message })

}

module.exports = errorHandler
