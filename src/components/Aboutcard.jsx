import { FaAward, FaUsers } from "react-icons/fa";
import { FaFolderTree } from "react-icons/fa6";
import { motion } from "framer-motion";

const Aboutcard = () => {
  const cards = [
    {
      icon: <FaAward className="text-3xl md:text-4xl text-primary2 mb-2" />,
      title: "Experience",
      text: "3+ years working",
    },
    {
      icon: <FaUsers className="text-3xl md:text-4xl text-primary2 mb-2" />,
      title: "Clients",
      text: "200+ worldwide",
    },
    {
      icon: <FaFolderTree className="text-3xl md:text-4xl text-primary2 mb-2" />,
      title: "Projects",
      text: "80+ completed",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6 w-[80%] md:w-full justify-center mx-auto">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className="text-center flex flex-col items-center bg-pink-600 border-2 border-pink-500 rounded-xl py-6 sm:py-8 h-[140px] sm:h-[160px] transition-all duration-300 hover:bg-transparent hover:cursor-pointer"
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 10px 20px rgba(192, 63, 215, 0.4)",
          }}
        >
          {card.icon}
          <h4 className="font-semibold text-white text-sm sm:text-base md:text-lg">
            {card.title}
          </h4>
          <p className="font-light text-white opacity-80 text-xs sm:text-sm tracking-tight">
            {card.text}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default Aboutcard;
