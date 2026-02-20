import Section from "../components/Section";
import { motion } from "framer-motion";
import { Code, Layout, GitBranch, Zap, Monitor, Smartphone } from "lucide-react";

const SkillCategory = ({ title, skills, icon: Icon, color }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white dark:bg-dark-card p-8 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all"
  >
    <div className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg`}>
      <Icon size={28} />
    </div>
    <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">{title}</h3>
    <ul className="space-y-3">
      {skills.map((skill, index) => (
        <li key={index} className="flex items-center gap-3 text-slate-600 dark:text-dark-muted font-medium">
          <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600" />
          {skill}
        </li>
      ))}
    </ul>
  </motion.div>
);

const Skills = () => {
  // القسم الأول: لغات البرمجة الأساسية
  const coreStack = [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "Responsive Design",
    "Bootstrap",
    "TailwindCSS"
  ];

  // القسم الثاني: المكتبات وإدارة الواجهة
  const frameworks = [
    "React.js",
    "Vite",
    "Redux Toolkit",
    "Context API",
    "Framer Motion",
    "Styled Components"
  ];

  // القسم الثالث: الأدوات والربط
  const tools = [
    "Git / GitHub",
    "REST API Integration",
    "JSON Data Handling",
    "Clean Code Principles",
    "Modern UI/UX Patterns",
    "Web Performance"
  ];

  return (
    <Section id="skills" className="bg-slate-50 dark:bg-dark-bg/50">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">Technical Arsenal</h2>
        <p className="text-slate-500 dark:text-dark-muted text-lg max-w-2xl mx-auto">
          A focused toolkit for building modern, responsive, and user-friendly web applications.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <SkillCategory 
          title="Core Stack" 
          skills={coreStack} 
          icon={Code} 
          color="bg-gradient-to-br from-blue-400 to-blue-600"
        />
        <SkillCategory 
          title="Libraries" 
          skills={frameworks} 
          icon={Layout} 
          color="bg-gradient-to-br from-primary to-secondary"
        />
        <SkillCategory 
          title="Tools & Workflow" 
          skills={tools} 
          icon={Zap} 
          color="bg-gradient-to-br from-emerald-400 to-emerald-600"
        />
      </div>
    </Section>
  );
};

export default Skills;