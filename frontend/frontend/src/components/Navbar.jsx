import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md text-[#008e9b] px-6 py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div>
          <img src="/img/logo.png" alt="Logo" className="w-32 object-contain" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center text-lg font-medium">
          <li>
            <Link to="/" className="hover:text-[#00575a] transition-colors duration-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-[#00575a] transition-colors duration-200">
              Services
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-[#00575a] transition-colors duration-200">
              About
            </Link>
          </li>

          {user?.role === "admin" && (
            <>
              <li>
                <Link to="/add-doctor" className="hover:text-[#00575a] transition-colors duration-200">
                  Add Doctor
                </Link>
              </li>
              <li>
                <Link to="/add-department" className="hover:text-[#00575a] transition-colors duration-200">
                  Add Departments
                </Link>
              </li>
            </>
          )}

          {user?.role === "user" && (
            <li>
              <Link to="/add-appointment" className="hover:text-[#00575a] transition-colors duration-200">
                Add Appointment
              </Link>
            </li>
          )}

          {!user && (
            <>
              <li>
                <Link to="/login" className="hover:text-[#00575a] transition-colors duration-200">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="hover:text-[#00575a] transition-colors duration-200">
                  SignUp
                </Link>
              </li>
            </>
          )}

          {user && (
            <li>
              <button onClick={logOut} className="hover:text-red-500">
                LogOut
              </button>
            </li>
          )}
        </ul>

        {/* Mobile Burger Icon */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col space-y-4 mt-4 text-lg font-medium md:hidden">
          <li>
            <Link onClick={toggleMenu} to="/" className="hover:text-[#00575a] transition-colors duration-200">
              Home-Page
            </Link>
          </li>
          <li>
            <Link onClick={toggleMenu} to="/services" className="hover:text-[#00575a] transition-colors duration-200">
              Services
            </Link>
          </li>
          <li>
            <Link onClick={toggleMenu} to="/about" className="hover:text-[#00575a] transition-colors duration-200">
              About
            </Link>hghg
          </li>

          {user?.role === "admin" && (
            <>
              <li>
                <Link onClick={toggleMenu} to="/add-doctor" className="hover:text-[#00575a] transition-colors duration-200">
                  Add Doctor
                </Link>
              </li>
              <li>
                <Link onClick={toggleMenu} to="/add-department" className="hover:text-[#00575a] transition-colors duration-200">
                  Add Departments
                </Link>
              </li>
            </>
          )}

          {user?.role === "user" && (
            <li>
              <Link onClick={toggleMenu} to="/add-appointment" className="hover:text-[#00575a] transition-colors duration-200">
                Add Appointment
              </Link>
            </li>
          )}

          {!user && (
            <>
              <li>
                <Link onClick={toggleMenu} to="/login" className="hover:text-[#00575a] transition-colors duration-200">
                  Login
                </Link>
              </li>
              <li>
                <Link onClick={toggleMenu} to="/register" className="hover:text-[#00575a] transition-colors duration-200">
                  SignUp
                </Link>
              </li>
            </>
          )}

          {user && (
            <li>
              <button onClick={() => { logOut(); toggleMenu(); }} className="hover:text-red-500">
                LogOut
              </button>
            </li>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
