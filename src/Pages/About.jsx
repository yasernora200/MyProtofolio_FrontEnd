import Section from "../components/Section";
import { Code, Layout, Zap, CheckCircle } from "lucide-react";

const About = () => {
  return (
    <Section id="about" className="bg-white dark:bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                I help businesses build <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">high-performance web products</span>.
              </h2>
              <p className="text-lg text-slate-600 dark:text-dark-muted leading-relaxed mb-6">
                I am a passionate Frontend Developer dedicated to crafting seamless user experiences. I specialize in building robust, scalable web applications from scratch, ensuring they are not only visually appealing but also technically optimized for speed and efficiency.
              </p>
              <p className="text-lg text-slate-600 dark:text-dark-muted leading-relaxed">
                My focus lies in writing clean, maintainable code and staying ahead of the curve with modern frameworks like React. I bridge the gap between complex logic and intuitive design, creating interfaces that provide real value to users and businesses alike.
              </p>
            </div>

            <div className="p-6 bg-slate-50 dark:bg-dark-card rounded-2xl border-l-4 border-primary shadow-sm">
              <p className="font-medium text-slate-800 dark:text-white italic">
                "I don’t just build components — I build fast, accessible, and scalable web solutions that drive growth."
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            {/* Card 1: Replaced Scalable Data with Clean Architecture */}
            <div className="p-6 bg-white dark:bg-dark-card rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 hover:border-primary/50 transition-colors group">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                <Code size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Clean Architecture</h3>
              <p className="text-slate-600 dark:text-dark-muted">
                Writing modular, reusable, and well-documented code that is easy to scale and maintain.
              </p>
            </div>

            {/* Card 2: Modern Tech Stack */}
            <div className="p-6 bg-white dark:bg-dark-card rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 hover:border-secondary/50 transition-colors group">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mb-4 group-hover:scale-110 transition-transform">
                <Layout size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Modern Tech Stack</h3>
              <p className="text-slate-600 dark:text-dark-muted">
                Leveraging React, Tailwind CSS, and Framer Motion to create cutting-edge web interfaces.
              </p>
            </div>

            {/* Card 3: Replaced AI with Performance Optimization */}
            <div className="p-6 bg-white dark:bg-dark-card rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 hover:border-emerald-500/50 transition-colors group">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500 mb-4 group-hover:scale-110 transition-transform">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Performance First</h3>
              <p className="text-slate-600 dark:text-dark-muted">
                Optimizing Core Web Vitals to ensure lightning-fast load times and smooth user interaction.
              </p>
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
};

export default About;
