import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import ProjectCard from "../components/ProjectCard";
import projectsData from "../data/projectsData";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  
  // Set categories for filtering
  const categories = ["All", "Environment", "Education", "Skill Development"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects = filter === "All" 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-50">
      <Navbar />

      <main className="flex-grow">
        {/* Projects Hero */}
        <div className="relative pt-32 pb-20 px-6 md:px-12 lg:px-24 bg-[#0A2640] overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: "url('https://loremflickr.com/1920/1080/volunteer,group/all')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A2640] opacity-90"></div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-wider text-white bg-blue-600 shadow-md mb-6 uppercase">
              Global Volunteer
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Find a Project That Matches Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Passion</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Step out of your comfort zone and travel abroad to volunteer on projects that tackle the world's most pressing issues. Make a real impact while developing your leadership skills.
            </p>
          </motion.div>
        </div>

        {/* Filters Section */}
        <section className="py-8 bg-white border-b border-gray-100 shadow-sm sticky top-[72px] z-30">
          <div className="container mx-auto px-4 overflow-x-auto no-scrollbar">
            <div className="flex justify-center flex-nowrap md:flex-wrap gap-3 min-w-max pb-2 md:pb-0 mx-auto w-fit">
              {categories.map(area => (
                <button
                  key={area}
                  onClick={() => setFilter(area)}
                  className={`px-5 py-2.5 rounded-full font-semibold transition-all duration-300 text-sm whitespace-nowrap border
                    ${filter === area 
                      ? 'bg-[#0A2640] text-white border-[#0A2640] shadow-md shadow-blue-900/20' 
                      : 'bg-transparent text-gray-600 border-gray-200 hover:border-[#0A2640] hover:text-[#0A2640]'
                  }`}
                >
                  {area}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid Container (Masonry) */}
        <section className="py-20 px-4 md:px-8 lg:px-16 container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-min items-stretch">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold text-gray-500 mb-2">No projects found.</h3>
              <p className="text-gray-400">Try selecting a different filter.</p>
            </div>
          )}
        </section>

        {/* Call To Action */}
        <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-green-400/20 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
            <h2 className="text-4xl font-extrabold text-[#0A2640] mb-6">Ready to make an impact?</h2>
            <p className="text-xl text-gray-600 mb-10">
              Join thousands of young people developing their leadership through practical experiences in challenging environments.
            </p>
            <button className="px-10 py-4 bg-[#0A2640] hover:bg-black text-white rounded-xl font-bold text-lg shadow-xl shadow-blue-900/30 transition-all transform hover:-translate-y-1">
              Apply Now
            </button>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
