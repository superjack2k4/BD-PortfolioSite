import aiesecLogo from "../assets/logos/AIESEC-Logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#111] text-gray-300 py-12 px-4 md:px-8">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <img src={aiesecLogo} alt="AIESEC Logo" className="h-10 md:h-12 mb-6" />
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Empowering young people to develop their leadership potential through international internships and volunteer opportunities.
            </p>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Explore</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Events</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
            </ul>
          </div>

          {/* For Partners Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">For Partners</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Partnership Plans</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Why Partner</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Projects to Sponsor</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Phone</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Email</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Socials</a></li>
            </ul>
          </div>

        </div>

        {/* Copyright Section */}
        <div className="mt-16 mb-4">
          <p className="text-gray-400 text-sm">© AIESEC CN</p>
        </div>
        
      </div>
    </footer>
  );
}
