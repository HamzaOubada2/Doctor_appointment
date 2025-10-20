const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const multer = require('multer')
const Doctor = require('../model/DoctorSchema');
const router = express.Router();

//upload Img!
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})
//createNewDoctor
const upload = multer({ storage: storage })
router.post('/AddDoctor', upload.single('image'),async (req, res) => {
    try {
        const { name, specialty, description, experienceYears } = req.body;

        const image = req.file ? req.file.filename : null
        if (!name || !specialty || !description || !experienceYears || !image) {
            return res.status(400).json({ message: "All Fields are Required!" })
        }

        const newDoctor = await Doctor.create(
            {
                name,
                specialty,
                description,
                experienceYears,
                image:req.file?.filename
            }
        )

        const savedDoctors = await newDoctor.save();
        res.status(201).json(savedDoctors);
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error})
    }
})

//Get All Doctors:
router.get('/allDoctors',async(req,res) => {
    const doctors = await Doctor.find();
    res.json(doctors);
})



router.get('/count', async(req,res) => {
    try {
        const count = await Doctor.countDocuments();
        res.json({ count });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

//Get Doctor By Id:
router.get('/:id', async(req,res) => {
    const doctor = await Doctor.findById(req.params.id);
    if(!doctor) return res.status(404).json({message:"Doctor not Found"})
    res.json(doctor)
})


module.exports = router;