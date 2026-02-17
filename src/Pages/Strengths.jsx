import Section from "../components/Section";
import { Zap, Search, Puzzle, Users, Activity, Heart } from "lucide-react";

const StrengthItem = ({ icon: Icon, title, desc }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-dark-card rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-primary/30 transition-colors">
    <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl text-primary mb-4">
      <Icon size={24} />
    </div>
    <h3 className="font-bold text-slate-900 dark:text-white mb-1">{title}</h3>
  </div>
);

const Strengths = () => {
  return (
    <Section id="strengths" className="bg-slate-50 dark:bg-dark-bg/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Why Work With Me?</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <StrengthItem icon={Zap} title="Fast Learner" />
          <StrengthItem icon={Search} title="Detail Oriented" />
          <StrengthItem icon={Puzzle} title="Problem Solving" />
          <StrengthItem icon={Users} title="Leadership" />
          <StrengthItem icon={Activity} title="Work Under Pressure" />
          <StrengthItem icon={Heart} title="Passionate" />
        </div>
      </div>
    </Section>
  );
};

export default Strengths;
