import React from 'react';
import { motion } from 'framer-motion';
import gvImg from '../assets/AboutUs/ProductCard/GlobalVolunteer.webp';
import gtImg from '../assets/AboutUs/ProductCard/globalTalent.webp';
import gteaImg from '../assets/AboutUs/ProductCard/GlobalTeacher.webp';

const products = [
  {
    title: "Global Volunteer",
    image: gvImg,
    link: "#"
  },
  {
    title: "Global Talent",
    image: gtImg,
    link: "#"
  },
  {
    title: "Global Teacher",
    image: gteaImg,
    link: "#"
  }
];

export default function AboutProducts() {
  return (
    <section className="py-20 px-6 sm:px-10 lg:px-20 bg-[#f3f4f6] snap-start">
      <div className="max-w-[1240px] mx-auto">
        
        {/* Top Header Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 mb-16 lg:mb-24">
          
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-[38px] font-bold text-gray-900 mb-6 tracking-tight leading-tight font-sans"
            >
              AIESEC in <span className="text-[#085bc6]">University of Kelaniya</span>
            </motion.h2>
            
            {/* Mobile Image (Hidden on Desktop) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-full flex lg:hidden aspect-[16/9] relative rounded-[20px] overflow-hidden mb-6 mt-2"
            >
              <div className="absolute inset-0 bg-gray-200">
                {/* Placeholder Image */}
                <img 
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop" 
                  alt="University of Kelaniya Placeholder" 
                  className="w-full h-full object-cover shadow-2xl"
                />
              </div>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 mb-6 text-[15px] lg:text-[16px] leading-[1.8] max-w-xl"
            >
              Driving excellence through focused exchange programs and leadership development within the Kelaniya community. We as an organization shape our members' leadership attributes by encouraging active participation in volunteer efforts and other impactful activities.
            </motion.p>
          </div>

          {/* Right Desktop Image */}
          <div className="hidden lg:flex lg:w-1/2 w-full justify-end relative">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full max-w-[480px] aspect-[16/9] lg:aspect-[2/1] relative rounded-xl overflow-hidden shadow-xl"
            >
              <div className="absolute inset-0 bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop" 
                  alt="University of Kelaniya Placeholder Desktop" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Our Products Section */}
        <div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[18px] font-bold text-[#085bc6] uppercase tracking-wider mb-8 text-center lg:text-left font-sans"
          >
            OUR PRODUCTS
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
            {products.map((product, index) => (
              <motion.a
                key={product.title}
                href={product.link}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col items-center text-center p-10 hover:-translate-y-1 cursor-pointer group"
              >
                <div className="w-[85px] h-[85px] sm:w-[100px] sm:h-[100px] mb-6 flex items-center justify-center p-1">
                  <img src={product.image} alt={product.title} className="w-full h-full object-contain" />
                </div>
                <h4 className="text-[19px] font-bold text-gray-900 font-sans whitespace-nowrap">{product.title}</h4>
              </motion.a>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
