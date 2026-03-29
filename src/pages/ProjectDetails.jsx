import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import { motion } from 'framer-motion';

export default function ProjectDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const project = location.state?.project;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!project) {
      navigate('/projects');
    }
  }, [project, navigate]);

  if (!project) return null;

  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-50 text-gray-800">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <header className="relative pt-32 pb-24 px-6 md:px-12 lg:px-24 overflow-hidden" style={{ background: project.colors.gradient }}>
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: `url(${project.images.heroImg})` }}></div>
          <div className="absolute inset-0 bg-black/40"></div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 mt-10"
          >
            <div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-4 drop-shadow-lg">
                {project.title}
              </h1>
              <p className="text-xl md:text-3xl text-white/95 font-medium drop-shadow-md">
                {project.subtitle}
              </p>
            </div>
            <div className="shrink-0 w-full md:w-auto">
               <button className="w-full md:w-auto px-10 py-5 bg-white hover:bg-gray-50 rounded-full font-extrabold text-lg shadow-2xl transition-all transform hover:-translate-y-1 hover:scale-105" style={{ color: project.colors.solid }}>
                  Apply Now
               </button>
            </div>
          </motion.div>
        </header>

        {/* Content Section */}
        <section className="py-24 px-6 md:px-12 lg:px-24 container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 relative items-start">
            
            {/* Main Content (Left) */}
            <div className="lg:col-span-2 space-y-20">
              
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }}>
                <h2 className="text-4xl font-extrabold text-[#0A2640] mb-8 flex items-center gap-4">
                  <span className="w-10 h-1.5 rounded-full" style={{ backgroundColor: project.colors.solid }}></span>
                  Project Overview
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed font-medium">
                  {project.overview}
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }}>
                 <h2 className="text-4xl font-extrabold text-[#0A2640] mb-10 flex items-center gap-4">
                  <span className="w-10 h-1.5 rounded-full" style={{ backgroundColor: project.colors.solid }}></span>
                  What You Will Do
                </h2>
                <div className="grid sm:grid-cols-2 gap-8">
                  {project.activities.map((activity, idx) => (
                    <div key={idx} className="bg-white p-8 rounded-3xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                      <div className="w-14 h-14 rounded-2xl mb-6 flex items-center justify-center text-white shadow-lg transform group-hover:rotate-6 transition-transform" style={{ background: project.colors.gradient }}>
                        {/* Placeholder dynamic icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h4 className="text-2xl font-bold text-[#0A2640] mb-3">{activity.title}</h4>
                      <p className="text-lg text-gray-600 leading-relaxed">{activity.text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }}>
                 <h2 className="text-4xl font-extrabold text-[#0A2640] mb-8 flex items-center gap-4">
                  <span className="w-10 h-1.5 rounded-full" style={{ backgroundColor: project.colors.solid }}></span>
                  Gallery
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {project.images.gallery.map((img, idx) => (
                    <div key={idx} className="rounded-3xl overflow-hidden aspect-video shadow-lg hover:shadow-2xl transition-shadow cursor-pointer">
                      <img src={img} alt={`${project.title} gallery ${idx}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar (Right) */}
            <div className="space-y-10 lg:sticky lg:top-28">
              <motion.div 
                initial={{ opacity: 0, x: 20 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-10 rounded-[2rem] shadow-xl border border-gray-100 relative overflow-hidden"
              >
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-32 h-32 transform translate-x-16 -translate-y-16 rounded-full opacity-10" style={{ background: project.colors.solid }}></div>
                
                <h3 className="text-3xl font-extrabold text-[#0A2640] mb-8 border-b-2 border-gray-100 pb-6">Project Details</h3>
                <ul className="space-y-8">
                  <li className="flex justify-between items-center group">
                     <span className="text-gray-500 font-semibold text-lg group-hover:text-gray-900 transition-colors">Duration</span>
                     <span className="font-bold text-gray-900 text-lg">{project.details.duration}</span>
                  </li>
                  <li className="flex justify-between items-center group">
                     <span className="text-gray-500 font-semibold text-lg group-hover:text-gray-900 transition-colors">Location</span>
                     <span className="font-bold text-gray-900 text-lg">{project.details.location}</span>
                  </li>
                  <li className="flex justify-between items-center group">
                     <span className="text-gray-500 font-semibold text-lg group-hover:text-gray-900 transition-colors">Participants</span>
                     <span className="font-bold text-gray-900 text-lg">{project.details.participants}</span>
                  </li>
                  <li className="flex justify-between items-center pt-2">
                     <span className="text-gray-500 font-semibold text-lg whitespace-nowrap mr-6">SDG Goal</span>
                     <span className="inline-block px-4 py-2 rounded-xl text-sm font-bold text-white shadow-md whitespace-nowrap" style={{ background: project.colors.gradient }}>
                        {project.details.sdgGoal.num}: {project.details.sdgGoal.text}
                     </span>
                  </li>
                </ul>

                <h3 className="text-3xl font-extrabold text-[#0A2640] mb-8 mt-12 border-b-2 border-gray-100 pb-6">Skills You Gain</h3>
                <div className="flex flex-wrap gap-3">
                  {project.skills.map((skill, idx) => (
                    <span key={idx} className="px-5 py-2.5 bg-gray-50 text-gray-700 rounded-xl text-sm font-bold border border-gray-200 hover:bg-gray-100 hover:shadow-sm transition-all">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 px-6 relative overflow-hidden" style={{ background: project.colors.gradient }}>
           <div className="absolute inset-0 bg-black/10"></div>
           <div className="container mx-auto relative z-10 text-center max-w-5xl">
              <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-12 drop-shadow-xl leading-tight">
                Join {project.title} and shape a better future.
              </h2>
              <button className="px-14 py-5 bg-white hover:bg-gray-50 rounded-full font-extrabold text-xl shadow-2xl transition-all transform hover:-translate-y-2 hover:scale-105 inline-block" style={{ color: project.colors.solid }}>
                Apply Now
              </button>
           </div>
           
           {/* Decorative floating circles */}
           <div className="absolute top-10 left-10 w-24 h-24 bg-white opacity-10 rounded-full blur-xl"></div>
           <div className="absolute bottom-10 right-20 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
