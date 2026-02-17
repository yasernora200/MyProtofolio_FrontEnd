import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const FormContact = () => {
  const form = useRef();
  const [showToast, setShowToast] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_dpgxr0q", "template_3fksdlf", form.current, {
        publicKey: "LDo284KqRAnyY0cQi",
      })
      .then(
        () => {
          setShowToast(true);
          e.target.reset();

          // اخفي التوست بعد 3 ثواني
          setTimeout(() => {
            setShowToast(false);
          }, 3000);
        },
        () => {
          alert("❌ حصل خطأ في الإرسال");
        }
      );
  };

  return (
    <div className="relative flex flex-col items-start gap-4 p-6 w-full">
      {/* ✅ التوست المتحرك */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.8 }}
            transition={{ duration: 0.4 }}
            className="
        fixed top-6 right-6 -translate-x-1/2 -translate-y-1/2
        bg-gradient-to-r from-purple-600 via-pink-500 to-pink-400
        text-white px-6 py-4 rounded-xl shadow-2xl
        text-lg font-semibold flex items-center gap-3
      "
          >
            <FaCheckCircle className="text-white text-2xl" />✅ تم إرسال الرسالة
            بنجاح
          </motion.div>
        )}
      </AnimatePresence>

      {/* ✅ الفورم */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-4 w-full max-w-lg"
      >
        <input
          type="text"
          name="name"
          placeholder="Full your name"
          className="w-full p-3 rounded-lg bg-white/30 text-gray-900 placeholder-pink-500 font-medium focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="w-full p-3 rounded-lg bg-white/30 text-gray-900 placeholder-pink-500 font-medium focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <textarea
          rows="5"
          name="message"
          placeholder="Your message"
          className="w-full p-3 rounded-lg bg-white/30 text-gray-900 placeholder-pink-500 font-medium focus:outline-none focus:ring-2 focus:ring-pink-400"
        ></textarea>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold py-3 rounded-md shadow-lg hover:shadow-pink-500/50 transition-all duration-300 w-[200px] my-5"
        >
          Send Message
        </motion.button>
      </form>
    </div>
  );
};

export default FormContact;
