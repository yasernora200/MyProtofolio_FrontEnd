
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Code2 } from "lucide-react";
import Section from "../components/Section";

const projects = [
  {
    title: "NoraBuds – Kids E-Commerce Store",
    description: "A complete, high-end e-commerce platform for children's products. Built with a focus on immersive user experience, smooth state management, and secure checkout integration.",
    tech: ["React", "Redux Toolkit", "Firebase", "Stripe API", "Framer Motion"],
    highlights: [
      "Custom cart & persistent checkout flow",
      "Playful, highly interactive UI animations",
      "Real-time database integration via Firebase",
      "Fully responsive mobile-first design"
    ],
    live: "https://yasernora200.github.io/NoraBuds/",
    github: "https://github.com/yasernora200/NoraBuds",
    category: "Frontend",
    images: ["https://images.unsplash.com/photo-1515488764276-beab7607c1e6?q=80&w=1000&auto=format&fit=crop"] 
  },
  {
    title: "AgriSat – NASA Space Apps",
    description: "Award-winning dashboard visualizing complex satellite data. Engineered the frontend to handle real-time geospatial mapping and interactive data charts.",
    tech: ["React", "Leaflet.js", "Recharts", "GeoJSON", "TailwindCSS"],
    highlights: [
      "Global Space Apps Winner Nominee",
      "Interactive mapping & spatial data layers",
      "Real-time NDVI vegetation analysis charts",
      "Optimized for high-performance data rendering"
    ],
    live: "https://agri-sat-nasa-challnege.vercel.app/",
    github: "https://github.com/yasernora200/AgriSat_NasaChallnege",
    category: "Web Apps",
    images: ["https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop"]
  },
  {
    title: "Medical Imaging UI Dashboard",
    description: "A professional medical interface designed for X-ray analysis visualization. Focused on rendering AI-driven segmentation results into an intuitive UI.",
    tech: ["React", "Context API", "Axios", "Framer Motion", "TailwindCSS"],
    highlights: [
      "Real-time AI inference visualization",
      "Interactive image upload & processing flow",
      "Clean, accessibility-focused medical design",
      "Seamless integration with RESTful APIs"
    ],
    github: "https://github.com/yasernora200/Pneumothorax-Segmentation_Model",
    category: "Web Apps",
    images: ["https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop"]
  },
  {
    title: "Modern Product Catalog",
    description: "A sleek, performance-optimized product listing application showcasing advanced React patterns and modular component architecture.",
    tech: ["React", "TailwindCSS", "Framer Motion", "Context API"],
    highlights: [
      "Advanced search & multi-level filtering",
      "Smooth layout transitions & micro-interactions",
      "Optimized asset loading & image handling",
      "Dynamic Dark/Light mode implementation"
    ],
    github: "https://github.com/yasernora200/Product_list_react_tailwind_project",
    category: "Frontend",
    images: ["https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1000&auto=format&fit=crop"]
  },
  {
    title: "Eco-Waste Classifier UI",
    description: "A web-based waste management tool using computer vision. Developed the frontend to provide instant visual feedback and camera integration.",
    tech: ["React", "Webcam.js", "TailwindCSS", "Flask"],
    highlights: [
      "Live camera stream & capture integration",
      "Dynamic UI updates based on ML results",
      "Responsive layout for on-the-go scanning",
      "Interactive educational components"
    ],
    github: "https://github.com/yasernora200/Garbage_Classification_Model",
    category: "Web Apps",
    images: ["https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=1000&auto=format&fit=crop"]
  }
];

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-white dark:bg-dark-card rounded-2xl overflow-hidden shadow-md border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:border-primary/50 transition-all flex flex-col h-full"
    >
      <div className="relative h-52 overflow-hidden bg-slate-100 dark:bg-slate-900">
        <img 
          src={project.images[0]} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000"; }}
        />
        {/* Badge for Demo projects */}
        {project.live && (
          <div className="absolute top-3 right-3 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
            Live Demo
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 bg-primary/10 rounded-lg text-primary">
            <Code2 size={24} />
          </div>
          <div className="flex gap-2">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" title="View Code" className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors text-slate-500 hover:text-primary">
                <Github size={20} />
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" title="Live Demo" className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors text-slate-500 hover:text-primary">
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>

        <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="text-slate-500 dark:text-slate-400 mb-4 text-sm flex-grow line-clamp-3">{project.description}</p>
        
        <div className="space-y-4 mt-auto">
          <ul className="space-y-1 mb-4">
            {project.highlights.map((h, i) => (
              <li key={i} className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2">
                <span className="text-secondary mt-0.5">▹</span> {h}
              </li>
            ))}
          </ul>
          
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
  const categories = ["All", "Frontend", "Web Apps"];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <Section id="projects" className="bg-slate-50 dark:bg-dark-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">Featured Projects</h2>
          <p className="text-slate-500 dark:text-slate-400">A collection of web applications focusing on performance, UI, and functionality.</p>
          
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
          <AnimatePresence mode="wait">
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