const User = require('../models/User')
const {StatusCodes} = require('http-status-codes')


const register = async (req, res) => {
    const bcrypt = require('bcryptjs')
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    const user = await User.create({...req.body, password:hashedPassword})
    res.status(StatusCodes.CREATED).json(user)
}

const login = async (req, res) => {
    res.send('login user')
}

module.exports = {register, login}