import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { motion } from "framer-motion";

const ContactCard = () => {
  const ContactData = [
    {
      id: 1,
      icon: <MdOutlineEmail size={28} />,
      title: "Email",
      info: "NoraYasir@gmail.com",
      link: "mailto:test@gmail.com",
      color: "from-pink-500 to-purple-500",
      textColor: "text-pink-500",
    },
    {
      id: 2,
      icon: <RiMessengerLine size={28} />,
      title: "Messenger",
      info: "NoraYasir",
      link: "https://m.me/houdareda.99",
      color: "from-blue-500 to-indigo-500",
      textColor: "text-blue-500",
    },
    {
      id: 3,
      icon: <BsWhatsapp size={28} />,
      title: "WhatsApp",
      info: "01096274489",
      link: "https://api.whatsapp.com/send?phone=201112119676",
      color: "from-green-500 to-emerald-500",
      textColor: "text-green-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6 justify-center">
      {ContactData.map(({ id, icon, title, info, link, color, textColor }) => (
        <motion.article
          key={id}
          className="relative w-[300px] h-[180px] flex flex-col items-center justify-center text-center gap-3 p-6 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/50 shadow-xl overflow-hidden transition-all duration-500 hover:shadow-[0_8px_30px_rgba(255,255,255,0.3)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: id * 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          {/* أيقونة بدائرة ملونة */}
          <div
            className={`p-4 rounded-full bg-gradient-to-r ${color} text-white text-2xl shadow-md`}
          >
            {icon}
          </div>

          {/* النصوص */}
          <h2 className={`text-lg font-bold ${textColor}`}>{title}</h2>
          <p className="text-sm text-gray-800 font-medium">{info}</p>

          {/* الرابط */}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent hover:from-pink-400 hover:to-purple-400 transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(255,192,203,0.8)]"
          >
            Send a Message →
          </a>
        </motion.article>
      ))}
    </div>
  );
};

export default ContactCard;
