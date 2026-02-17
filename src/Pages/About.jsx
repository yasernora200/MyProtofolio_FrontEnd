import Section from "../components/Section";
import { Database, Layout, TrendingUp, CheckCircle } from "lucide-react";

const About = () => {
  return (
    <Section id="about" className="bg-white dark:bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                I help businesses turn complex data into <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">intelligent products</span>.
              </h2>
              <p className="text-lg text-slate-600 dark:text-dark-muted leading-relaxed mb-6">
                With a strong background in Data Engineering and modern web development, I design reliable data pipelines, integrate AI models into production environments, and build clean, high-performance user interfaces that make complex systems simple to use.
              </p>
              <p className="text-lg text-slate-600 dark:text-dark-muted leading-relaxed">
                Whether it's building real-time data workflows with Kafka and Spark, deploying machine learning models through REST APIs, or developing responsive web applications with React, I focus on delivering solutions that are scalable, efficient, and ready for real-world use.
              </p>
            </div>

            <div className="p-6 bg-slate-50 dark:bg-dark-card rounded-2xl border-l-4 border-primary shadow-sm">
              <p className="font-medium text-slate-800 dark:text-white italic">
                "I don’t just build features — I build systems that work, scale, and create measurable impact."
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="p-6 bg-white dark:bg-dark-card rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 hover:border-primary/50 transition-colors group">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                <Database size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Scalable Data Systems</h3>
              <p className="text-slate-600 dark:text-dark-muted">
                Designing reliable ETL pipelines and data warehouses using Spark, Kafka, and SQL.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-dark-card rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 hover:border-secondary/50 transition-colors group">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mb-4 group-hover:scale-110 transition-transform">
                <Layout size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Modern Web Apps</h3>
              <p className="text-slate-600 dark:text-dark-muted">
                Building responsive, interactive frontends with React, Tailwind, and animated UIs.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-dark-card rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 hover:border-emerald-500/50 transition-colors group">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500 mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">AI Integration</h3>
              <p className="text-slate-600 dark:text-dark-muted">
                Deploying ML models and connecting them to real-time applications for actionable insights.
              </p>
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
};

export default About;
