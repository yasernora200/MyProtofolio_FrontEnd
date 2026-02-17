import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Experience from "./Pages/Experience";
import Services from "./Pages/Services";
import Workflow from "./Pages/Workflow";
import Impact from "./Pages/Impact";
import Education from "./Pages/Education";
import Strengths from "./Pages/Strengths";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";

const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-slate-50 dark:bg-dark-bg min-h-screen transition-colors duration-300 font-sans selection:bg-primary/30 relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[100]"
        style={{ scaleX }}
      />
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Impact />
        <Experience />
        <Services />
        <Workflow />
        <Education />
        <Strengths />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
