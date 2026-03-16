import Navbar from "../layouts/Navbar";
import HomeProjectCard from "../components/HomeProjectCard";

// import Footer from "../layouts/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative min-h-screen flex items-center bg-gray-900 overflow-hidden">
          {/* Placeholder for Hero Image */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070')] bg-cover bg-center" />
          {/* Background Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30 z-10" />

          <div className="container mx-auto px-4 md:px-6 relative z-20">
            <div className="max-w-3xl text-center md:text-left">
              <h1 className="text-center md:text-left text-4xl md:text-6xl font-extrabold text-white leading-tight">
                Develop Leadership <br className="hidden md:block" /> While
                Changing the World
              </h1>
              <p className="text-center md:text-left text-gray-200 mt-6 text-lg md:text-xl max-w-lg">
                AIESEC is the world's largest youth-led organization, focused on
                developing leadership through cross-cultural exchanges.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="px-8 py-4 bg-brand-blue text-white font-bold rounded-lg hover:shadow-xl hover:bg-blue-600 transition-all">
                  Apply Now
                </button>
                <button className="px-8 py-4 bg-white/10 text-white backdrop-blur-md border border-white/30 font-bold rounded-lg hover:bg-white/20">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { val: "1600+", label: "Active Members" },
              { val: "20", label: "Universities" },
              { val: "120+", label: "Countries" },
              { val: "75+", label: "Years Impact" },
            ].map((stat, i) => (
              <div
                key={i}
                className={i !== 0 ? "md:border-l border-gray-100" : ""}
              >
                <h2 className="text-3xl md:text-4xl font-black text-brand-blue">
                  {stat.val}
                </h2>
                <p className="text-gray-500 font-medium text-sm mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-12 text-center md:text-left">
              Explore Our Programs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <HomeProjectCard
                icon="✈️"
                title="Global Volunteer"
                description="Contribute to the Sustainable Development Goals (SDGs) through a 6-8 week cross-cultural volunteer experience."
                duration="6-8 Weeks"
              />
              <HomeProjectCard
                icon="💼"
                title="Global Talent"
                description="Develop your professional skills and gain a global perspective through a professional internship abroad."
                duration="3-12 Months"
              />
              <HomeProjectCard
                icon="🎓"
                title="Global Teacher"
                description="Gain international teaching experience and impact the world's future through education."
                duration="9-78 Weeks"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer from your structure */}
      {/* <Footer /> */}
    </div>
  );
}
