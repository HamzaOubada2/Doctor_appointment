const express = require('express');
const Department = require('../model/Departments');
const auth = require('../auth/Middleware');
const multer = require('multer');
const path = require('path');
const router = express.Router();

// Upload image setup
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../uploads'));
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});
const upload = multer({ storage });

// Create a new department
router.post('/createDepartment', auth('admin'), upload.single('image'), async (req, res) => {
    /*if (req.user.role !== "admin") {
        return res.status(403).json({ message: "Not Authorized!!" });
    }*/

    const { name, description } = req.body;
    if (!name) return res.status(400).json({ message: "Name is required!" });

    const department = await Department.create({
        name,
        description,
        image: req.file ? req.file.filename : null
    });

    res.status(201).json(department);
});


router.get('/GetAllDepartments', async (req, res) => {
  try {
    const departments = await Department.find({});
    res.status(200).json(departments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



router.get('/count',async(req,res) => {
    try {
        const count = await Department.countDocuments();
        res.json({count})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})
module.exports = router;
