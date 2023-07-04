const {
    createUser,
    allUsers,
    oneUser,
    updateUser,
    deleteUser
} = require('../controllers/userController')
const { createUserValidationRules, validate } = require('../middleware/expressValidator')
const express = require('express');

const route = express.Router();
// const { body } = require('express-validator')

route.post('/users', createUserValidationRules(), validate, createUser)
route.get('/users', allUsers)
route.get('/users/:id', oneUser)
route.put('/users/:id', updateUser)
route.delete('/users/:id', deleteUser)

module.exports = route
