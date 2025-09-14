// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// 1. ดึงข้อมูลผู้ใช้ทั้งหมด
router.get('/users', userController.getUsers);

// 2. ดึงข้อมูลผู้ใช้ตาม ID
router.get('/users/:id', userController.getUserById);

// 3. เพิ่มผู้ใช้ใหม่
router.post('/users', userController.createUser);

// 4. แก้ไขข้อมูลผู้ใช้ตาม ID
router.put('/users/:id', userController.updateUser);

// 5. ลบผู้ใช้ตาม ID
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
