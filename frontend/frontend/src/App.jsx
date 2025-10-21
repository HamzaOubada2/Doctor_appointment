import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import LogIn from "./components/LogIn";
import { AuthProvider } from "./context/AuthContext";
import Register from "./components/Register";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
