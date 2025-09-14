// index.js

const express = require('express');
const userRoutes = require('./routes/userRoutes');
const app = express();
const port = 3000;

// สร้าง API endpoint แบบง่ายๆ
app.get('/', (req, res) => {
  res.send('Hello World! Node.js on Windows');
});

// เชื่อมโยง routes ที่สร้างขึ้นกับ path หลัก
app.use('/api', userRoutes);


// ให้แอปทำงานที่ port 3000
app.listen(port, () => {
  console.log(`เซิร์ฟเวอร์กำลังรันที่ http://localhost:${port}/api/users`);
});
