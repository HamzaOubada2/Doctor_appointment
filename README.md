 🩺 Doctor Appointment System — MERN Stack

### 📘 1. Overview

**Doctor Appointment System** is a full-stack web application built with the **MERN stack (MongoDB, Express.js, React.js, Node.js)**.
The platform allows patients to easily **book appointments** with doctors based on departments/specializations.
Doctors can manage their profiles and schedules, while admins can oversee the entire system.

---

### ⚙️ 2. Tech Stack

#### 🧩 **Frontend**

* **React.js** — For building a dynamic and responsive user interface
* **React Router DOM** — For client-side routing and navigation
* **Tailwind CSS** — For fast, modern, and responsive styling
* **React Icons** — For adding professional and consistent icons

#### ⚙️ **Backend**

* **Node.js** — Runtime environment for server-side JavaScript
* **Express.js** — Backend framework for creating RESTful APIs
* **Multer** — For uploading and handling image files (e.g., doctor profile pictures)
* **JWT (JSON Web Token)** — For secure authentication and authorization
* **MongoDB Atlas** — Cloud database for storing users, doctors, appointments, and departments

---

### 🧱 3. Database Design

#### 🩺 **Schemas**

1. **User Schema**

   ```js
   {
     name: String,
     email: String,
     password: String,
     role: { type: String, enum: ['user', 'doctor', 'admin'], default: 'user' },
     createdAt: Date
   }
   ```

2. **Doctor Schema**

   ```js
   {
     name: String,
     email: String,
     specialization: String,
     department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
     experience: Number,
     description: String,
     image: String,
     availableDays: [String],
     availableTimes: [String]
   }
   ```

3. **Department Schema**

   ```js
   {
     name: String,
     description: String
   }
   ```

4. **Appointment Schema**

   ```js
   {
     patient: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
     doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
     date: String,
     time: String,
     status: { type: String, enum: ['pending', 'approved', 'cancelled'], default: 'pending' }
   }
   ```

---

### 🔒 4. Authentication & Authorization

* **JWT Authentication**:

  * On login, the backend generates a JWT token that is sent to the client.
  * The client stores this token in `localStorage`.
  * Protected routes (like booking or managing appointments) require a valid token.
* Middleware checks the token before allowing access.

---

### 🧰 5. Key Features

#### 👤 **User Side**

* Register / Login with JWT authentication
* View all available doctors by department
* Book an appointment with a selected doctor
* Manage and cancel appointments

#### 🩺 **Doctor Side**

* Doctor profile management (photo, specialization, description)
* View upcoming appointments
* Update availability

#### 🛠️ **Admin Side**

* Manage doctors and departments
* Approve or remove appointments
* Access full user and booking data

---

### 🗂️ 6. Project Structure

```
doctor-appointment/
│
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   ├── Doctor.js
│   │   ├── Department.js
│   │   └── Appointment.js
│   ├── routes/
│   ├── middleware/
│   ├── uploads/
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/AuthContext.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── tailwind.config.js
│
└── package.json
```

---

### 🪄 7. How It Works (Flow)

1. User registers or logs in → JWT token generated.
2. User browses doctors → selects department → chooses doctor.
3. Appointment request sent to backend → stored in MongoDB.
4. Doctor/Admin can approve or cancel appointment.
5. Multer handles doctor image uploads safely.

---

### 🚀 8. Installation & Setup

#### Backend:

```bash
cd backend
npm install
npm start
```

#### Frontend:

```bash
cd frontend
npm install
npm run dev
```

Make sure to create a `.env` file in `/backend`:

```
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

### 🎯 9. Future Improvements

* Add notifications for appointment status changes
* Integrate email/SMS confirmation
* Add doctor rating and feedback system
* Implement admin dashboard with charts

---

### 🧑‍💻 10. Author

**Hamza Oubada**
Full-Stack Developer (MERN)
Passionate about building scalable web applications and delivering clean UI/UX.

---
