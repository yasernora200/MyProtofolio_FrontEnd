import Section from "../components/Section";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const ExperienceCard = ({ role, company, period, loc, tasks, index }) => (
  <div className="relative pl-8 md:pl-0">
    <motion.div 
      initial={{ opacity: 0, y: 50, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="md:flex items-start justify-between gap-6 group"
    >
      {/* Timeline/Connector (Desktop) */}
      <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-indigo-100 dark:bg-slate-800 -translate-x-1/2 group-last:bottom-auto group-last:h-full" />
      <div className="hidden md:block absolute left-[50%] top-8 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-dark-bg -translate-x-[50%] shadow-md z-10 scale-0 group-hover:scale-125 transition-transform duration-300" />

      {/* Date (Left Side on Desktop) */}
      <div className="hidden md:block md:w-1/2 pr-12 text-right pt-6">
        <h4 className="text-xl font-bold text-slate-900 dark:text-white">{company}</h4>
        <div className="flex items-center justify-end gap-2 text-sm text-slate-500 dark:text-dark-muted mt-1">
          <Calendar size={14} /> {period}
        </div>
        <div className="flex items-center justify-end gap-2 text-sm text-slate-500 dark:text-dark-muted">
          <MapPin size={14} /> {loc}
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden mb-4 border-l-2 border-primary pl-4">
        <h4 className="text-xl font-bold text-slate-900 dark:text-white">{company}</h4>
        <h5 className="font-semibold text-primary">{role}</h5>
        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-dark-muted mt-2">
           <span className="flex items-center gap-1"><Calendar size={14} /> {period}</span>
           <span className="flex items-center gap-1"><MapPin size={14} /> {loc}</span>
        </div>
      </div>

      {/* Content (Right Side on Desktop / Bottom on Mobile) */}
      <div className="md:w-1/2 md:pl-12 pb-12">
         <div className="bg-white dark:bg-dark-card p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:border-primary/30 transition-all relative">
            <h5 className="hidden md:block text-lg font-bold text-primary mb-4">{role}</h5>
            <ul className="space-y-2">
              {tasks.map((task, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-600 dark:text-dark-muted text-sm leading-relaxed">
                  <span className="text-secondary mt-1.5 text-xs">●</span>
                  {task}
                </li>
              ))}
            </ul>
            {/* Arrow for Desktop */}
            <div className="hidden md:block absolute top-8 -left-2 w-4 h-4 bg-white dark:bg-dark-card rotate-45 border-l border-b border-slate-100 dark:border-slate-800"></div>
         </div>
      </div>
    </motion.div>
  </div>
);

const Experience = () => {
  return (
    <Section id="experience" className="overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">Professional Journey</h2>
        <p className="text-slate-500 dark:text-dark-muted">My contributions to impactful projects and teams.</p>
      </div>

      <div className="max-w-5xl mx-auto">
        <ExperienceCard 
          index={0}
          role="Data Engineering Intern"
          company="Digital Egypt Pioneers Initiative (DEPI)"
          period="Dec 2025 – Present"
          loc="Remote"
          tasks={[
            "Built fraud detection data pipeline",
            "Kafka streaming ingestion",
            "Spark distributed processing",
            "ML model integration",
            "Cloud-ready scalable architecture"
          ]}
        />
        <ExperienceCard 
          index={1}
          role="IoT Trainee"
          company="ITI"
          period="Aug 2024 – Present"
          loc="Hybrid"
          tasks={[
            "Sensor integration",
            "Real-time data monitoring",
            "IoT systems design"
          ]}
        />
        <ExperienceCard 
          index={2}
          role="Generative AI Internship"
          company="NVIDIA"
          period="Sep 2025 – Oct 2025"
          loc="Remote"
          tasks={[
            "GANs & Transformers",
            "PyTorch & TensorFlow",
            "Model optimization"
          ]}
        />
      </div>
    </Section>
  );
};

export default Experience;
