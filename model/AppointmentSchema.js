const mongoose = require('mongoose');
const AppointmentSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true }, // ✅ ref must match Doctor model name
    date: { type: Date, required: true },
    raison: { type: String, required: true }
});

const appointmentSch = mongoose.model('Appointment', AppointmentSchema);
module.exports = appointmentSch;