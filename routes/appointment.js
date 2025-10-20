const express = require('express');
const router = express.Router();
const Appointment = require('../model/AppointmentSchema');
const auth = require('../auth/Middleware.js');

// Create Appointment (Protected)
router.post('/createAppointment', auth, async (req, res) => {
    const { doctor, date, raison } = req.body;
    if (!doctor || !date || !raison)
        return res.status(400).json({ message: "Missing fields" });

    const appointment = await Appointment.create({
        user: req.user.id,
        doctor,
        date,
        raison
    });

    res.status(201).json(appointment);
});

// Get all appointments for logged-in user with doctor info
router.get('/myAppointments', auth, async (req, res) => {
    try {
        const appointments = await Appointment.find({ user: req.user.id })
            .populate({
                path: 'doctor',
                model: 'Doctor',
                select: 'name specialty description experienceYears'
            });
        res.json(appointments);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
});



// Delete appointment by id (only by user)
router.delete('/deleteAppointment/:id', auth, async (req, res) => {
    const { id } = req.params;
    const appointment = await Appointment.findOneAndDelete({ _id: id, user: req.user.id });
    if (!appointment) return res.status(404).json({ message: "Appointment not found" });

    res.json({ message: "Appointment deleted successfully" });
});

module.exports = router;
