import Section from "../components/Section";
import { Link } from "react-scroll";
import { Coffee, Code2, Users, Trophy, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../components/Button";

const Stat = ({ icon: Icon, value, label, delay }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="flex flex-col items-center"
  >
    <div className="text-primary mb-3">
      <Icon size={32} />
    </div>
    <span className="text-3xl font-bold text-white mb-1">{value}</span>
    <span className="text-slate-400 text-sm uppercase tracking-wider">{label}</span>
  </motion.div>
);

const Impact = () => {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* CTA Side */}
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to turn your idea into <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Realty?</span>
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-lg">
              Whether you have a specific project in mind or just a vague idea, let's chat. I'll help you clarify your vision and bring it to life.
            </p>
            <Link to="contact" smooth={true}>
              <Button className="px-8 py-4 text-lg bg-white text-slate-900 hover:bg-slate-100 border-none shadow-xl shadow-white/10 flex items-center gap-2">
                Start a Project <ArrowRight size={20} />
              </Button>
            </Link>
          </div>

          {/* Stats Side */}
          <div className="grid grid-cols-2 gap-8 md:gap-12 bg-white/5 p-8 rounded-3xl backdrop-blur-sm border border-white/10">
            <Stat icon={Trophy} value="10+" label="Projects Completed" delay={0} />
            <Stat icon={Users} value="5+" label="Happy Clients" delay={0.1} />
            <Stat icon={Code2} value="3+" label="Years Experience" delay={0.2} />
            <Stat icon={Coffee} value="∞" label="Commitment" delay={0.3} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
