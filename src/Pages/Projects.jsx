import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Code2 } from "lucide-react";
import Section from "../components/Section";

const projects = [
  {
    title: "Pneumothorax Segmentation Model",
    description: "Advanced medical imaging system using U-Net architecture to detect pneumothorax in chest X-rays. Features a complete ML pipeline from data preprocessing to model deployment via Flask API.",
    tech: ["Python", "TensorFlow/Keras", "OpenCV", "Flask", "React", "Docker"],
    highlights: ["92% Dice Coefficient accuracy", "Processed 12,000+ medical images", "Real-time inference API", "Interactive visualization dashboard"],
    github: "https://github.com/yasernora200/Pneumothorax-Segmentation_Model",
    category: "ML",
    images: ["/assets/portfolio1.jpg", "/assets/portfolio2.jpg"]
  },
  {
    title: "Garbage Classification Web App",
    description: "Eco-friendly waste management solution using Computer Vision to classify trash into 12 categories. Helps users recycle correctly through an intuitive web interface.",
    tech: ["PyTorch", "ResNet50", "Flask", "React", "TailwindCSS"],
    highlights: ["95% classification accuracy", "Mobile-responsive design", "Real-time camera integration", "Educational recycling tips"],
    github: "https://github.com/yasernora200/Garbage_Classification_Model",
    category: "ML",
    images: ["/assets/portfolio2.jpg", "/assets/portfolio3.jpg"]
  },
  {
    title: "AgriSat – NASA Space Apps Challenge",
    description: "Award-winning agriculture platform leveraging satellite data and IoT sensors to optimize crop yield. Provides actionable insights for farmers through data visualization.",
    tech: ["React", "Python", "Satellite Imagery API", "IoT Integration", "Leaflet Maps"],
    highlights: ["Global Space Apps Winner Nominee", "Real-time NDVI vegetation analysis", "IoT sensor data dashboard", "Scalable cloud architecture"],
    live: "https://agri-sat-nasa-challnege.vercel.app/",
    github: "https://github.com/yasernora200/AgriSat_NasaChallnege",
    category: "Data Engineering",
    images: ["/assets/Agrisat.png", "/assets/agrisat-project.png"]
  },
  {
    title: "Telco Customer Churn Prediction",
    description: "Comprehensive data analytics dashboard to predict customer churn. Utilizes machine learning models to identify at-risk customers and suggest retention strategies.",
    tech: ["Python", "Scikit-learn", "Streamlit", "Pandas", "Plotly"],
    highlights: ["88% Churn prediction accuracy", "Interactive Streamlit dashboard", "Customer segmentation analysis", "Automated reporting pipeline"],
    github: "https://github.com/yasernora200/ML_DA_Telco_Customer_Churn",
    category: "ML",
    images: ["/assets/portfolio3.jpg", "/assets/portfolio4.jpg"]
  },
  {
    title: "NoraBuds – Kids E-Commerce Store",
    description: "Vibrant and playful e-commerce platform designed specifically for children's products. Features a colorful UI, easy navigation, and a secure checkout process.",
    tech: ["React", "Redux Toolkit", "Stripe API", "Firebase", "Styled Components"],
    highlights: ["Custom cart & checkout flow", "Playful, animated UI interactions", "Admin dashboard for inventory", "Mobile-first responsive layout"],
    live: "https://yasernora200.github.io/NoraBuds/",
    github: "https://github.com/yasernora200/NoraBuds",
    category: "Frontend",
    images: ["https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "/assets/portfolio5.png"]
  },
  {
    title: "Product List – Modern UI",
    description: "Sleek and minimalist product listing application showcasing advanced React patterns and state management. optimized for performance and user experience.",
    tech: ["React", "TailwindCSS", "Framer Motion", "Context API"],
    highlights: ["Filter & Sort functionality", "Smooth layout transitions", "Dark/Light mode support", "Optimized asset loading"],
    github: "https://github.com/yasernora200/Product_list_react_tailwind_project",
    category: "Frontend",
    images: ["/assets/portfolio5.png", "/assets/portfolio6.jpg"]
  },
];

const ProjectCard = ({ project }) => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-white dark:bg-dark-card rounded-2xl overflow-hidden shadow-md border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:border-primary/50 transition-all flex flex-col h-full"
    >
      {/* Image Gallery for Projects that have it */}
      {project.images && project.images.length > 0 && (
        <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-900 group-hover:h-52 transition-all duration-300">
           <img 
             src={project.images[currentImage]} 
             alt={project.title} 
             className="w-full h-full object-cover"
           />
           {/* Simple slide indicators if multiple images */}
           {project.images.length > 1 && (
             <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
               {project.images.map((_, idx) => (
                 <button 
                   key={idx}
                   onClick={(e) => { e.stopPropagation(); setCurrentImage(idx); }}
                   className={`w-2 h-2 rounded-full transition-colors ${currentImage === idx ? "bg-white" : "bg-white/50"}`}
                 />
               ))}
             </div>
           )}
        </div>
      )}

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 bg-primary/10 rounded-lg text-primary">
            <Code2 size={24} />
          </div>
          <div className="flex gap-2">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors text-slate-500 hover:text-primary">
                <Github size={20} />
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors text-slate-500 hover:text-primary">
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>

        <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="text-slate-500 dark:text-slate-400 mb-4 text-sm flex-grow line-clamp-3 hover:line-clamp-none transition-all">{project.description}</p>
        
        <div className="space-y-4 mt-auto">
          {project.highlights && (
             <ul className="space-y-1 mb-4">
               {project.highlights.map((h, i) => (
                 <li key={i} className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2">
                   <span className="text-secondary mt-0.5">▹</span> {h}
                 </li>
               ))}
             </ul>
          )}
          
          <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
            {project.tech.map((t, i) => (
              <span key={i} className="px-2 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-800 rounded-md text-slate-600 dark:text-slate-300">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "ML", "Data Engineering", "Frontend"];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <Section id="projects" className="bg-slate-50 dark:bg-dark-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">Featured Projects</h2>
          <p className="text-slate-500 dark:text-slate-400">Selected work showcasing my skills in AI, Data, and Frontend.</p>
          
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat 
                    ? "bg-primary text-white shadow-lg shadow-primary/25 scale-105" 
                    : "bg-white dark:bg-dark-card text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-100 dark:border-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </Section>
  );
};

export default Projects;
