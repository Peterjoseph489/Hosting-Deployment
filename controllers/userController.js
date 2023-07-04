const userModel = require('../models/userModel');

const createUser = async (req, res)=>{
    try {
        const user = await userModel.create(req.body)
        if(!user) {
            res.status(400).json({
                message: 'Cannot create user'
            })
        } else {
            res.status(201).json({
                message: 'User created successfully',
                data: user
            })
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


const allUsers = async (req, res)=>{
    try {
        const users = await userModel.find();
        if(users.length === 0) {
            res.status(400).json({
                message: 'No User'
            })
        } else {
            res.status(200).json({
                message: 'User found successfully',
                data: users
            })
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


const oneUser = async (req, res)=>{
    try {
        const user = await userModel.findById(req.params.id);
        if(!user) {
            res.status(400).json({
                message: 'User not Found'
            })
        } else {
            res.status(201).json({
                message: 'User Found successfully',
                data: user
            })
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


const updateUser = async (req, res)=>{
    try {
        const updatedUser = await userModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if(!updatedUser) {
            res.status(400).json({
                message: 'Cannot Update User'
            })
        } else {
            res.status(201).json({
                message: 'User updated successfully',
                data: updatedUser
            })
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


const deleteUser = async (req, res)=>{
    try {
        const user = await userModel.findById(req.params.id);
        const deletedUser = await userModel.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            res.status(400).json({
                message: 'Cannot delete user'
            })
        } else {
            res.status(200).json({
                message: 'User deleted successfully',
                data: user
            })
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


module.exports = {
    createUser,
    allUsers,
    oneUser,
    updateUser,
    deleteUser
}