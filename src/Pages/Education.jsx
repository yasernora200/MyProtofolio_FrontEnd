import Section from "../components/Section";
import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  return (
    <Section id="education">
      <div className="max-w-4xl mx-auto">
        
        <div className="bg-white dark:bg-dark-card p-8 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-secondary"></div>
          
          <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-full text-secondary">
            <GraduationCap size={48} />
          </div>
          
          <div className="flex-grow text-center md:text-left space-y-2">
            <h5 className="text-secondary font-semibold uppercase tracking-wider text-sm">Education</h5>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Menoufia University</h3>
            <p className="text-lg text-slate-700 dark:text-slate-200 font-medium">
              Faculty of Artificial Intelligence
            </p>
            <p className="text-slate-600 dark:text-dark-muted">
              Intelligent Systems Engineering
            </p>
            <p className="text-slate-500 text-sm mt-2">Expected 2027</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl">
             <div className="flex items-center gap-2 text-primary font-bold text-xl">
               <Award />
               <span>Very Good (High)</span>
             </div>
             <p className="text-slate-400 text-xs mt-1 uppercase tracking-wide">Grade</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Education;
