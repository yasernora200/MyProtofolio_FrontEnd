import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { ArrowRight, Download, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "../components/Button";
import { useState, useEffect } from "react";

const TypeWriter = ({ text, delay, infinite }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

    } else if (infinite) {
      timeout = setTimeout(() => {
        setCurrentIndex(0);
        setCurrentText("");
      }, 2000); // Wait 2s before restarting
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, infinite, text]);

  return <span>{currentText}</span>;
};

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 overflow-hidden relative bg-slate-50 dark:bg-dark-bg transition-colors duration-300">
      {/* Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[100px] animate-pulse-slow" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-secondary/20 blur-[100px] animate-pulse-slow delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left order-2 md:order-1"
          >
            <p className="text-slate-500 dark:text-slate-400 font-medium text-lg mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight mb-4">
              <span className="text-primary">Nourhan Yasser</span>
            </h1>
            
            <div className="h-8 mb-6 flex items-center">
               <span className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                 <TypeWriter text="Data Engineer | Frontend Developer" delay={100} infinite />
               </span>
               <span className="w-0.5 h-6 bg-primary ml-1 animate-blink"></span>
            </div>

            <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-200 mb-6 font-medium">
              Turning raw data into <span className="text-secondary font-bold">real-world impact</span>.
            </p>

            <p className="text-lg text-slate-600 dark:text-dark-muted max-w-lg leading-relaxed mb-8">
              I engineer scalable data systems and craft modern web applications that make intelligence usable.
            </p>
          
            <div className="flex flex-wrap gap-4">
              <Link to="projects" smooth={true}>
                <Button className="flex items-center gap-2 shadow-lg shadow-primary/25">
                  View Projects <ArrowRight size={18} />
                </Button>
              </Link>
              
              <a href="/cv.pdf" download>
                <Button variant="outline" className="flex items-center gap-2">
                  Download CV <Download size={18} />
                </Button>
              </a>
              
              <Link to="contact" smooth={true}>
                <Button variant="ghost" className="flex items-center gap-2">
                  Contact Me <Mail size={18} />
                </Button>
              </Link>
            </div>

            <div className="mt-10 flex gap-6">
              <a href="https://github.com/yasernora200" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors hover:scale-110 transform duration-200">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/norhanyaser/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors hover:scale-110 transform duration-200">
                <Linkedin size={24} />
              </a>
              <a href="mailto:yasernora@200gmail.com" className="text-slate-400 hover:text-primary transition-colors hover:scale-110 transform duration-200">
                <Mail size={24} />
              </a>
            </div>
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          >
            <span className="text-xs text-slate-400 uppercase tracking-widest">Scroll</span>
            <div className="w-[30px] h-[50px] rounded-full border-2 border-slate-400 flex justify-center p-2">
              <motion.div 
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 rounded-full bg-slate-400 mb-1"
              />
            </div>
          </motion.div>

        {/* Right Image */}
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="order-1 md:order-2 flex justify-center md:justify-end relative"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-4 bg-gradient-to-tr from-primary to-secondary rounded-full opacity-20 blur-2xl animate-pulse-slow"></div>
            <img 
              src="/assets/profile.jpg" 
              alt="Nourhan Yasser" 
              className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-slate-800 shadow-2xl object-[center_20%]"
            />
            
            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 bg-white dark:bg-dark-card p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700"
            >
              <div className="text-3xl">🚀</div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-4 -left-4 bg-white dark:bg-dark-card px-4 py-3 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3"
            >
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Status</p>
                <p className="text-sm font-bold text-slate-800 dark:text-white">Available for Work</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
