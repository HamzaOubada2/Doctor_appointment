const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const userRouter = require('./routes/user.js');
const doctorRouter = require('./routes/doctor')
const appointmentRouter = require('./routes/appointment');
const departmentRouter = require('./routes/Departments.js');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Connect Database
connectDB();

// Routes
//(user Routes)
app.use('/user', userRouter);
//(doctor Routes)
app.use('/doctors', doctorRouter)
app.use('/files', express.static("uploads"))
//(appointment)
app.use('/appointments', appointmentRouter);
//(department)
app.use('/departments',departmentRouter);



app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
// CORS: if you have your backend on localhost:5000 and your frontend on localhost:3000,
// this middleware (CORS) allows them to connect without being blocked by the browser.
