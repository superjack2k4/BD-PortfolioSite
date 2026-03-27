import React from 'react';

const expectations = [
  {
    title: 'Flexible Support Options',
    desc: 'Monetary or in-kind contributions for agreed events.',
  },
  {
    title: 'Collaborative Planning',
    desc: 'Initial meeting to align goals & expectations.',
  },
  {
    title: 'Open Communication',
    desc: 'Frequent updates & discussions for smooth coordination.',
  },
  {
    title: 'Valuable Insights',
    desc: 'Feedback & testimonials to enhance future collaborations.',
  },
  {
    title: 'Long-Term Impact',
    desc: 'Build a sustainable, mutually beneficial partnership.',
  },
];

export default function OurExpectations() {
  return (
    <section className="w-full py-24 px-6 bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            <span className="text-[#188bf6]">Our</span>{' '}
            <span className="text-black">Expectations</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-6">
          {expectations.map((item, i) => (
            <div
              key={i}
              className="flex flex-col bg-white hover:bg-[#f1f3f5] p-6 rounded-2xl w-full h-full min-h-[240px] shadow-[0_6px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)] border border-gray-100/50 transition-all duration-300 ease-out hover:-translate-y-1 cursor-default"
            >
              {/* Blue Dot Identifier */}
              <div className="w-4 h-4 rounded-full bg-[#188bf6] mb-5 shrink-0" />
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
                {item.title}
              </h3>
              
              <p className="text-[15px] md:text-base text-gray-500 font-medium leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
