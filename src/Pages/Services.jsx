import { motion } from "framer-motion";
import Section from "../components/Section";
import { Code2, Database, Video, Brain } from "lucide-react";

const ServiceCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -5 }}
    className="bg-white dark:bg-dark-card p-8 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:border-primary/30 transition-all group"
  >
    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
      <Icon size={28} />
    </div>
    <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-primary transition-colors">{title}</h3>
    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
      {description}
    </p>
  </motion.div>
);

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Building responsive, high-performance web applications using modern technologies like React, TailwindCSS, and Next.js.",
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Architecting scalable data pipelines, ETL processes, and utilizing Big Data technologies like Apache Spark and Kafka.",
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Developing intelligent models for computer vision and data analysis to derive actionable insights.",
    },
    {
      icon: Video,
      title: "Tech Education",
      description: "Creating comprehensive educational content and tutorials to simplify complex technical concepts for learners.",
    },
  ];

  return (
    <Section id="services" className="bg-slate-50 dark:bg-dark-bg/50">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">What I Offer</h2>
        <p className="text-slate-500 dark:text-dark-muted text-lg max-w-2xl mx-auto">
          Combining technical expertise with creative problem-solving to deliver exceptional results.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <ServiceCard 
            key={index} 
            {...service} 
            delay={index * 0.1}
          />
        ))}
      </div>
    </Section>
  );
};

export default Services;
