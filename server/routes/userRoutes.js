const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getAllUsers, updateUser, deleteUser } = require('../controllers/userController');
const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');

// Public routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Protected routes
router.get('/users', authMiddleware, getAllUsers);
router.put('/update/:id', authMiddleware, updateUser);
router.delete('/delete/:id', authMiddleware, adminMiddleware, deleteUser);  

module.exports = router;
