const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

// Route to create a new user (accessible to Admin and Super Admin)
router.post('/users', authMiddleware.checkAdminRole, userController.createUser);

// Route to get all users (accessible to Admin and Super Admin)
router.get('/users', authMiddleware.checkAdminRole, userController.getAllUsers);

// Route to get a specific user (accessible to Admin and Super Admin)
router.get('/users/:userId', authMiddleware.checkAdminRole, userController.getUserById);

// Route to update a user (accessible to Admin and Super Admin)
router.put('/users/:userId', authMiddleware.checkAdminRole, userController.updateUser);

// Route to delete a user (only accessible to Super Admin)
router.delete('/users/:userId', authMiddleware.checkAdminRole, userController.deleteUser);

module.exports = router;