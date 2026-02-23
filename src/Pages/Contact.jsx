import Section from "../components/Section";
import { Button } from "../components/Button";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, MapPin, Phone, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const Contact = () => {
  const formRef = useRef();
  const [showToast, setShowToast] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm("service_8wpb5nr", "template_3fksdlf", formRef.current, {
        publicKey: "LDo284KqRAnyY0cQi",
      })
      .then(
        () => {
          setIsSending(false);
          setShowToast(true);
          e.target.reset();
          setTimeout(() => setShowToast(false), 3000);
        },
        (error) => {
          setIsSending(false);
          alert("❌ Error sending message: " + error.text);
        }
      );
  };

  return (
    <Section id="contact">
      {/* Success Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -50, x: "50%" }}
            animate={{ opacity: 1, y: 0, x: "50%" }}
            exit={{ opacity: 0, y: -50, x: "50%" }}
            className="fixed top-24 right-1/2 z-50 bg-gradient-to-r from-primary to-secondary text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 font-semibold"
          >
            <CheckCircle className="text-white" /> Message sent successfully!
          </motion.div>
        )}
      </AnimatePresence>
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's Connect</h2>
          <p className="text-slate-500 dark:text-slate-400 mb-8 text-lg">
            I'm currently looking for new opportunities in Frontend Development. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-full text-primary">
                <Mail />
              </div>
              <div>
                <p className="text-sm text-slate-400">Email</p>
                <a href="mailto:ny4546295@gmail.com" className="font-medium hover:text-primary transition-colors">
                  ny4546295@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-full text-primary">
                <Phone />
              </div>
              <div>
                <p className="text-sm text-slate-400">Phone</p>
                <p className="font-medium">01096274489</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-full text-primary">
                <MapPin />
              </div>
              <div>
                <p className="text-sm text-slate-400">Location</p>
                <p className="font-medium">Cairo, Egypt</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-dark-card p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800">
          <form ref={formRef} className="space-y-4" onSubmit={sendEmail}>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
                <input 
                  required
                  name="name"
                  type="text" 
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                <input 
                  required
                  name="email"
                  type="email" 
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
              <textarea 
                required
                name="message"
                rows={4}
                placeholder="How can I help you?"
                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none transition-all"
              />
            </div>
            
            <Button 
              disabled={isSending}
              className="w-full flex justify-center items-center gap-2 transition-all duration-300"
            >
              {isSending ? (
                <>
                  <span className="animate-spin inline-block mr-2">⟳</span> Sending...
                </>
              ) : (
                <>
                  Send Message <Send size={18} />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;




