// controllers/userController.js

// ข้อมูลผู้ใช้ตัวอย่าง
let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
  ];
  
  // 1. ดึงข้อมูลผู้ใช้ทั้งหมด
  exports.getUsers = (req, res) => {
    res.json(users);
  };
  
  // 2. ดึงข้อมูลผู้ใช้ตาม ID
  exports.getUserById = (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.json(user);
  };
  
  // 3. เพิ่มผู้ใช้ใหม่
  exports.createUser = (req, res) => {
    const { name, email } = req.body;
  
    if (!name || !email) {
      return res.status(400).send('Name and email are required');
    }
  
    const newUser = {
      id: users.length + 1,
      name,
      email
    };
  
    users.push(newUser);
    res.status(201).json(newUser);
  };
  
  // 4. แก้ไขข้อมูลผู้ใช้
  exports.updateUser = (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
      return res.status(404).send('User not found');
    }
  
    const { name, email } = req.body;
    if (name) user.name = name;
    if (email) user.email = email;
  
    res.json(user);
  };
  
  // 5. ลบผู้ใช้
  exports.deleteUser = (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex === -1) {
      return res.status(404).send('User not found');
    }
  
    const deletedUser = users.splice(userIndex, 1);
    res.json(deletedUser);
  };
  