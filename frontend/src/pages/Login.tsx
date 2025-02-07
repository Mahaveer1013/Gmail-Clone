import mahaveer from '../assets/mahaveer.jpg';
import gmailLogo from '../assets/gmail.png';
import GoogleButton from "../components/auth/GoogleButton";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useDispatch } from 'react-redux';
import { login } from '../slices/authSlice';
import { user } from '../data/auth/dummyUser';

const Login = () => {
  const dispatch = useDispatch();
  
  const testLogin = () => {
    dispatch(login(user))
  }

  return (
    <section className="w-screen h-screen flex flex-col justify-center items-center bg-gradient-to-r from-[#f0f4ff] to-[#e3e9ff]">
      <motion.div
        className="w-[90vw] py-6 max-w-[1000px] h-[85vh] md:h-[70vh] rounded-2xl shadow-2xl p-6 md:p-8 bg-white overflow-y-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Heading */}
        <h1 className="w-full text-center font-bold text-2xl md:text-3xl text-blue-950 mb-4">
          Gmail Clone With React
        </h1>
        <hr className="border-gray-200 mb-6" />

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 h-full">
          {/* Left Section - Profile and Gmail Logo */}
          <div className="flex flex-col space-y-6 md:space-y-8">
            {/* Profile Section */}
            <div className="flex flex-col items-center justify-center space-y-4 border-b md:border-b-0 md:border-r border-gray-200 pb-6 md:pb-0 md:pr-6">
              <motion.img
                src={mahaveer}
                alt="Picture"
                className="w-36 h-36 rounded-full border-4 border-[#4f46e5] shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <p className="text-xl md:text-2xl font-semibold text-gray-800 flex items-center gap-2">
                <a
                  href="https://mahaveer.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-[#4f46e5] transition-colors"
                >
                  I am Mahaveer A <FaExternalLinkAlt className="text-gray-600 ml-2 text-sm" />
                </a>
              </p>
            </div>

            {/* Gmail Logo and Google Button */}
            <div className="flex flex-col items-center justify-center space-y-4">
              <motion.img
                src={gmailLogo}
                alt="Gmail"
                className="w-36"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <h2 className="text-xl font-bold text-gray-800 mt-4 text-center">
                Login to access my clone
              </h2>
              <GoogleButton />
              <button className='bg-green-500 px-3 py-1 rounded-lg text-white' onClick={testLogin}>Test Login</button>
            </div>
          </div>

          {/* Right Section - App Details */}
          <div className="flex flex-col justify-around pb-4 space-y-6 text-center md:text-left">
            {/* About Me Section */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
                About Me:
              </h2>
              <p className="text-gray-700 text-center">
                ⚡ I'm a passionate Full Stack Developer with experience in 15+ projects.
              </p>
              <p className="text-gray-700 text-center mt-2">
                This Gmail Clone is built using <strong>React</strong>, <strong>Vite</strong>, <strong>Tailwind CSS</strong>, <strong>Node.js</strong>, <strong>React Router</strong>, and <strong>Redux Toolkit</strong>.
              </p>
            </div>

            {/* Key Features Section */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
                Key Features:
              </h2>
              <ul className="space-y-2 text-gray-700 list-none text-center">
                <li>✅ Built with React, Vite, and Tailwind CSS</li>
                <li>✅ Includes Redux Toolkit for state management</li>
                <li>✅ Uses React Router for navigation</li>
              </ul>
            </div>

            {/* README Link */}
            <a
              href="https://github.com/Mahaveer1013/Gmail-Clone/blob/main/README.md"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md flex items-center justify-center bg-green-500 w-auto mx-auto mb-2 text-white hover:bg-green-600 transition-colors"
            >
              App README &nbsp; <FaExternalLinkAlt className="text-white ml-2 text-sm" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Login;