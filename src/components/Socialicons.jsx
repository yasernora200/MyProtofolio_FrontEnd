import { FaLinkedin, FaGithub, FaDribbble } from "react-icons/fa";
import { motion } from "framer-motion";

const Socialicons = () => {
  return (
    <motion.div
      className="
        fixed left-6 top-1/2 transform -translate-y-1/2
        flex flex-col items-center gap-5 z-50
      "
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* LinkedIn */}
      <motion.a
        href="https://www.linkedin.com/in/nourhan-yasser-89039b28a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2, rotate: 10 }}
        className="
          w-12 h-12 flex items-center justify-center
          bg-white/30 backdrop-blur-lg rounded-full shadow-md
          text-primary2 hover:text-white hover:bg-[#0077b5]
          transition-all duration-300 cursor-pointer
        "
      >
        <FaLinkedin size={22} />
      </motion.a>

      {/* GitHub */}
      <motion.a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2, rotate: 10 }}
        className="
          w-12 h-12 flex items-center justify-center
          bg-white/30 backdrop-blur-lg rounded-full shadow-md
          text-primary2 hover:text-white hover:bg-gray-800
          transition-all duration-300 cursor-pointer
        "
      >
        <FaGithub size={22} />
      </motion.a>

      {/* Dribbble */}
      <motion.a
        href="https://dribbble.com"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2, rotate: 10 }}
        className="
          w-12 h-12 flex items-center justify-center
          bg-white/30 backdrop-blur-lg rounded-full shadow-md
          text-primary2 hover:text-white hover:bg-[#ea4c89]
          transition-all duration-300 cursor-pointer
        "
      >
        <FaDribbble size={22} />
      </motion.a>

      {/* Line */}
      <div className="w-[2px] h-[50px] bg-primary2 mt-3 rounded-full"></div>
    </motion.div>
  );
};

export default Socialicons;
