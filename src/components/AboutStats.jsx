import React from 'react';
import { motion } from 'framer-motion';
import heroPageImg from '../assets/HeroPage2.webp';

const stats = [
  { 
    platform: "Facebook", 
    count: "46K+", 
    label: "Followers", 
    link: "https://www.facebook.com/AIESECLK/",
    icon: (
      <svg className="w-[30px] h-[30px] mb-3" fill="#1877F2" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ) 
  },
  { 
    platform: "Instagram", 
    count: "6.4K+", 
    label: "Followers", 
    link: "https://www.instagram.com/aiesecinsrilanka/",
    icon: (
      <svg className="w-[30px] h-[30px] mb-3" viewBox="0 0 24 24" fill="url(#ig-grad)">
        <defs>
          <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f09433"/>
            <stop offset="25%" stopColor="#e6683c"/>
            <stop offset="50%" stopColor="#dc2743"/>
            <stop offset="75%" stopColor="#cc2366"/>
            <stop offset="100%" stopColor="#bc1888"/>
          </linearGradient>
        </defs>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.869a1.44 1.44 0 10-2.88 0 1.44 1.44 0 002.88 0z"/>
      </svg>
    ) 
  },
  { 
    platform: "YouTube", 
    count: "2.65K", 
    label: "Subscribers", 
    link: "https://www.youtube.com/watch?v=hTCuiLGEv1w",
    icon: (
      <svg className="w-[30px] h-[30px] mb-3" fill="#FF0000" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ) 
  },
  { 
    platform: "TikTok", 
    count: "6.4K+", 
    label: "Followers", 
    link: "https://www.tiktok.com/@aiesecinsrilanka",
    icon: (
      <svg className="w-[26px] h-[26px] mb-3 mt-1" fill="#000000" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.17-3.61-5.46-.02-.47-.02-.94.02-1.41.22-2.02 1.25-3.88 2.84-5.06 1.4-1.04 3.16-1.48 4.88-1.25.1.01.2.02.3.04v4.06c-.45-.07-.91-.12-1.37-.09-.9.08-1.78.48-2.39 1.16-.62.72-.94 1.68-.86 2.64.08.97.55 1.86 1.27 2.44.75.61 1.75.83 2.68.64.92-.17 1.74-.75 2.22-1.54.43-.72.64-1.58.62-2.45-.01-4.99-.02-9.98-.01-14.97-.01-.58-.02-1.17-.02-1.75z"/>
      </svg>
    ) 
  },
  { 
    platform: "X", 
    count: "2.2K", 
    label: "Followers", 
    link: "https://x.com/AIESEClk",
    icon: (
      <svg className="w-[30px] h-[30px] mb-3" fill="#000000" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ) 
  },
  { 
    platform: "LinkedIn", 
    count: "10K+", 
    label: "Followers", 
    link: "https://www.linkedin.com/company/aieseclk/?originalSubdomain=lk",
    icon: (
      <svg className="w-[30px] h-[30px] mb-3" fill="#0A66C2" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ) 
  },
];

export default function AboutStats() {
  return (
    <section className="py-20 px-6 sm:px-10 lg:px-20 bg-[#f9fafb] snap-start">
      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        
        {/* Left Content */}
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-[42px] font-bold text-gray-900 mb-6 tracking-tight leading-tight font-sans"
          >
            AIESEC in <span className="text-[#085bc6]">Sri Lanka</span>
          </motion.h2>

          {/* Mobile Image (Hidden on Desktop) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full flex lg:hidden aspect-square relative rounded-[32px] overflow-hidden mb-6 mt-2"
          >
            <div className="absolute inset-0 bg-gray-200">
              <img 
                src={heroPageImg} 
                alt="AIESEC students in Sri Lanka" 
                className="w-full h-full object-cover shadow-2xl"
              />
            </div>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 mb-10 text-[15px] lg:text-[16px] leading-[1.8] max-w-lg"
          >
            With a presence in all major national universities, AIESEC in Sri Lanka empowers thousands of undergraduates every year to become cross-cultural leaders who are ready to shape the future of our nation.
          </motion.p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-5 w-full max-w-lg">
            {stats.map((stat, index) => (
              <motion.a 
                href={stat.link}
                target="_blank"
                rel="noopener noreferrer"
                key={stat.platform}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.05, duration: 0.4 }}
                className="bg-white rounded-[20px] shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 border border-transparent flex flex-col items-center justify-center py-[25px] px-[15px] cursor-pointer"
              >
                {stat.icon}
                <div className="text-[21px] font-bold text-[#085bc6] mt-1 leading-none font-sans">{stat.count}</div>
                <div className="text-[11px] text-gray-500 font-semibold tracking-wide mt-2 text-center uppercase">
                  {stat.label}
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Right Image (Hidden on Mobile) */}
        <div className="hidden lg:flex lg:w-1/2 w-full justify-center lg:justify-end mt-10 lg:mt-0">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full max-w-[540px] aspect-[4/5] relative rounded-[32px] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gray-200">
              <img 
                src={heroPageImg} 
                alt="AIESEC students in Sri Lanka" 
                className="w-full h-full object-cover shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
