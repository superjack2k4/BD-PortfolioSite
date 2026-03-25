import React from 'react';
import { motion } from 'framer-motion';
import gvImg from '../assets/AboutUs/ProductCard/GlobalVolunteer.webp';
import gtImg from '../assets/AboutUs/ProductCard/globalTalent.webp';
import gteaImg from '../assets/AboutUs/ProductCard/GlobalTeacher.webp';
import KelaniyaCarousel from './KelaniyaCarousel';
import kel1 from '../assets/AboutUs/kelCarousel/ASH_0087.webp';
import kel2 from '../assets/AboutUs/kelCarousel/IMG_0856.webp';
import kel3 from '../assets/AboutUs/kelCarousel/IMG_0890.webp';
import kel4 from '../assets/AboutUs/kelCarousel/IMG_5493-83.webp';
import kel5 from '../assets/AboutUs/kelCarousel/_DSC7001.webp';

const carouselImages = [
  { id: 1, title: "Kelaniya Event 1", image: kel1 },
  { id: 2, title: "Kelaniya Event 2", image: kel2 },
  { id: 3, title: "Kelaniya Event 3", image: kel3 },
  { id: 4, title: "Kelaniya Event 4", image: kel4 },
  { id: 5, title: "Kelaniya Event 5", image: kel5 },
];

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
    <section className="py-20 px-0 sm:px-10 lg:px-20 bg-[#f3f4f6] snap-start overflow-hidden">
      <div className="max-w-[1240px] mx-auto">
        
        {/* Top Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-x-20 mb-20 lg:mb-28 items-center px-6 sm:px-0">
          
          <div className="lg:col-start-1 lg:row-start-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-[38px] font-bold text-gray-900 tracking-tight leading-tight font-sans"
            >
              AIESEC in <span className="text-[#085bc6]">University of Kelaniya</span>
            </motion.h2>
          </div>

          <div className="lg:col-start-2 lg:row-span-2 w-full flex justify-center lg:justify-end relative">
            <KelaniyaCarousel images={carouselImages} />
          </div>

          <div className="lg:col-start-1 lg:row-start-2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 text-[15px] lg:text-[16px] leading-[1.8] max-w-xl"
            >
              Driving excellence through focused exchange programs and leadership development within the Kelaniya community. We as an organization shape our members' leadership attributes by encouraging active participation in volunteer efforts and other impactful activities.
            </motion.p>
          </div>
          
        </div>

        {/* Our Products Section */}
        <div className="px-6 sm:px-0">
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
