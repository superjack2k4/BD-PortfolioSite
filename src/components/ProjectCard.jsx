import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function ProjectCard({ project, index }) {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate('/projectDetails', { state: { project } });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: (index % 3) * 0.15, duration: 0.6 }}
      className="group relative rounded-3xl overflow-hidden shadow-lg border border-gray-100/20 hover:shadow-2xl transition-all duration-500 flex flex-col h-full min-h-[480px] cursor-pointer"
      onClick={handleApplyClick}
    >
      <div className="absolute inset-0 bg-gray-900">
        <img 
          src={project.images.heroImg} 
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
        {/* Glassmorphic glow based on project colors */}
        <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full mix-blend-screen filter blur-[80px] opacity-40 group-hover:opacity-70 transition-opacity duration-700" style={{ backgroundColor: project.colors.solid }}></div>
      </div>

      <div className="relative z-10 flex flex-col flex-1 p-6 sm:p-8">
        <div className="mb-4">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-wider text-white shadow-md mb-4 uppercase" style={{ background: project.colors.gradient }}>
            SDG {project.details.sdgGoal.num}: {project.details.sdgGoal.text}
          </span>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-2 leading-tight drop-shadow-md">
            {project.title}
          </h3>
          <p className="text-gray-300 font-medium text-lg drop-shadow mb-4">
            {project.subtitle}
          </p>
        </div>

        <div className="mb-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out hidden md:block">
          <ul className="space-y-2 mb-4">
            {project.activities.slice(0, 2).map((activity, i) => (
              <li key={i} className="flex items-start text-sm text-gray-200">
                <span className="mr-2 text-white font-bold inline-block translate-y-0.5">•</span>
                <span className="leading-snug"><strong className="text-white">{activity.title}</strong> {activity.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto pt-4 border-t border-white/20">
          <button 
            className="w-full py-3.5 rounded-xl font-bold tracking-wide text-white bg-white/10 hover:bg-white border border-white/30 hover:border-transparent hover:text-gray-900 transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2"
            onClick={(e) => {
              e.stopPropagation();
              handleApplyClick();
            }}
          >
            EXPLORE PROJECT
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
