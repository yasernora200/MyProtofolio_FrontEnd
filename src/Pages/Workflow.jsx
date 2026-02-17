import Section from "../components/Section";
import { CheckCircle2, Search, Code, Rocket, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const Step = ({ icon: Icon, title, desc, stepNum }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: stepNum * 0.2 }}
    className="relative flex flex-col items-center text-center p-6 z-10"
  >
    <div className="w-16 h-16 rounded-full bg-white dark:bg-dark-card border-4 border-slate-100 dark:border-slate-800 flex items-center justify-center text-primary shadow-lg mb-6 group hover:scale-110 transition-transform duration-300">
      <Icon size={32} />
    </div>
    <div className="absolute top-14 left-1/2 w-full h-1 bg-slate-200 dark:bg-slate-800 -z-10 hidden md:block" style={{ display: stepNum === 4 ? 'none' : '' }} />
    
    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{title}</h3>
    <p className="text-slate-600 dark:text-dark-muted leading-relaxed text-sm">
      {desc}
    </p>
  </motion.div>
);

const Workflow = () => {
  return (
    <Section id="workflow" className="bg-white dark:bg-dark-bg">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">How I Work</h2>
        <p className="text-slate-500 dark:text-dark-muted text-lg max-w-2xl mx-auto">
          A transparent, structured process to ensure your project succeeds.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto relative">
        <Step 
          stepNum={1}
          icon={Search} 
          title="Discovery" 
          desc="I listen to your needs, analyze requirements, and define the project scope to ensure we aim for the right target."
        />
        <Step 
          stepNum={2}
          icon={Code} 
          title="Development" 
          desc="I build your solution using modern, scalable technologies, focusing on clean code and performance."
        />
        <Step 
          stepNum={3}
          icon={CheckCircle2} 
          title="Testing" 
          desc="Rigorous testing to squash bugs and ensure a smooth, error-free user experience across all devices."
        />
        <Step 
          stepNum={4}
          icon={Rocket} 
          title="Launch" 
          desc="Deployment to production, followed by post-launch support to guarantee everything runs perfectly."
        />
      </div>
    </Section>
  );
};

export default Workflow;
