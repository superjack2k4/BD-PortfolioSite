import { motion } from 'framer-motion';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import globalTalentImg from "../assets/AboutUs/ProductCard/globalTalent.webp";
import globalTeacherImg from "../assets/AboutUs/ProductCard/GlobalTeacher.webp";
import GlobalInternImg from "../assets/Partner/Global/GlobalIntern.webp";
import GlobalTeachImg from "../assets/Partner/Global/GlobalTeach.webp";
import globalVolunteerImg from "../assets/AboutUs/ProductCard/GlobalVolunteer.webp";

export default function ProjectExtra() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans text-gray-800">
      <Navbar />
      <main className="flex-grow">
      
      {/* Hero Section */}
      <section className="relative bg-brand-blue text-white py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 bg-blue-900 opacity-50"></div>
        <motion.div 
          initial="hidden" animate="visible" variants={fadeUp}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Partner With <span className="text-blue-200">AIESEC</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Join us to drive real impact through global volunteer projects.
          </p>
        </motion.div>
      </section>

      {/* Section 1: Global Talent & Teacher */}
      <section className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Host Global Youth</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We offer a wide range of internship and teaching opportunities for foreign youth, allowing them to begin their professional careers in a global environment.
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-10"
        >
          {/* Card 1: Global Talent */}
          <motion.div variants={fadeUp} className="group bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <img src={GlobalInternImg} alt="Global Talent Internship" className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-110" />
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <img src={globalTalentImg} alt="Global Talent" className="h-10 w-auto object-contain" />
                <h3 className="text-2xl font-bold text-gray-900">Global Talent</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Focuses on internships within the corporate sector, offering opportunities to work with leading companies.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Global Teacher */}
          <motion.div variants={fadeUp} className="group bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <img src={GlobalTeachImg} alt="Global Teacher" className="w-full h-56 object-cover object-top transform transition-transform duration-500 group-hover:scale-110" />
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <img src={globalTeacherImg} alt="Global Teacher" className="h-10 w-auto object-contain" />
                <h3 className="text-2xl font-bold text-gray-900">Global Teacher</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Provides teaching opportunities for foreign youth in Sri Lanka, allowing them to make an impact through education.
              </p>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="mt-12 bg-white border border-gray-100 p-8 rounded-2xl shadow-md"
        >
          <ul className="text-left md:w-fit md:mx-auto space-y-4">
            <li className="flex items-start text-gray-800 font-medium text-lg">
              <span className="text-brand-blue mr-3 text-2xl leading-none">•</span>
              We guarantee end-to-end support for both your company and the interns, ensuring a seamless experience and smooth collaboration.
            </li>
            <li className="flex items-start text-gray-700 font-medium text-lg">
              <span className="text-brand-blue mr-3 text-2xl leading-none">•</span>
              <span><span className="font-bold">Program Durations:</span> Global Talent (6 to 78 weeks) | Global Teacher (9 to 78 weeks)</span>
            </li>
          </ul>
        </motion.div>
      </section>

      {/* Section 2: Process Flow */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Experience a hassle-free, highly efficient recruitment journey from start to finish.
            </p>
          </motion.div>

          <div className="relative">
            {/* The vertical connector line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-100"></div>

            <div className="space-y-12">
              {[
                { step: 1, title: 'Opportunity Listing', desc: 'Your internship vacancy is published on our global opportunity portal, making it visible to international candidates.' },
                { step: 2, title: 'Candidate Screening', desc: 'We filter and shortlist applicants based strictly on your requirements and expectations.' },
                { step: 3, title: 'Candidate Selection', desc: 'Your team interviews the shortlisted candidates and makes the final hiring decision.' },
                { step: 4, title: 'Pre-Arrival Coordination', desc: 'We handle logistics, including visa processing and preparation for the intern’s arrival in Sri Lanka.' },
                { step: 5, title: 'Intern Arrival & Onboarding', desc: 'The selected intern arrives smoothly, ready to integrate into your organization with minimal friction.' }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="flex-1 w-full md:px-12 mb-6 md:mb-0">
                    <div className={`bg-gray-50 p-6 pl-14 md:p-8 rounded-2xl shadow-sm border border-gray-100 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                      <h4 className="text-xl font-bold text-brand-blue mb-2">Step {item.step}: {item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                  
                  {/* Circle */}
                  <div className="absolute -left-2 md:static z-10 w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg border-4 border-white md:mx-auto">
                    {item.step}
                  </div>
                  
                  <div className="flex-1 w-full pl-20 md:px-12 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Benefits */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10 cursor-default">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Partner With Us?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Connect with a diverse, global pool of ambitious youth under 30. Bring fresh perspectives, innovative approaches, and top-tier talent directly into your workspace.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { icon: '🌍', title: 'Global Reach', desc: 'Access highly motivated talent from our massive international network spanning over 100+ countries.' },
              { icon: '🚀', title: 'Fresh Innovation', desc: 'Embrace youth-driven ideas that push boundaries, modernizing your strategies and daily operations.' },
              { icon: '⭐', title: 'Exceptional Youth', desc: 'We systematically vet all candidates to guarantee you host the most motivated, value-adding young leaders.' },
              { icon: '🤝', title: 'Culture Elevation', desc: 'Transform your workplace into an incredibly dynamic and culturally rich international hub.' },
              { icon: '⚡', title: 'Stay Ahead', desc: 'Outpace the competition continuously by integrating future-ready youth perspectives immediately.' },
              { icon: '💼', title: 'Efficient Process', desc: 'An entirely streamlined, stress-free hosting workflow designed to minimize overhead for your team.' }
            ].map((benefit, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-gray-800 bg-opacity-50 p-8 rounded-2xl border border-gray-700 hover:bg-gray-800 transition-colors">
                <h4 className="text-xl font-bold mb-3">{benefit.title}</h4>
                <p className="text-gray-400 leading-relaxed text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 4: Global Volunteer */}
      <section className="py-24 bg-blue-50">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 mb-6">
              <img src={globalVolunteerImg} alt="Global Volunteer" className="h-16 w-auto object-contain shrink-0" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center md:text-left">Global Volunteer</h2>
            </div>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Global Volunteer is a six-week program where young individuals (18-30) contribute to SDG-driven projects while developing leadership skills in a challenging, cross-cultural environment. Volunteers make a real impact, while AIESECers in University of Kelaniya gain hands-on experience in project coordination and global collaboration, shaping them into future leaders.
              </p>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-xl text-brand-blue mb-4">Key Highlights</h4>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-700">
                    <span><strong>Who can volunteer:</strong> Young individuals (18-30) worldwide</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span><strong>Duration:</strong> Six weeks</span>
                  </li>
                  <li className="flex items-start text-gray-700 flex-col">
                    <span><strong>Impact:</strong></span>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>Develops leadership and adaptability</li>
                      <li>Provides real-world experience in SDG projects</li>
                      <li>Enhances cross-cultural understanding</li>
                      <li>Fosters personal and professional growth</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </motion.div>
        </div>
      </section>

      </main>
      <Footer />
    </div>
  );
}
