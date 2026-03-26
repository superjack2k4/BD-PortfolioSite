import React, { useEffect } from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

export default function Partnership() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-50">
      <Navbar />
      <main className="flex-grow pt-24 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Partnerships</h1>
        </div>
      </main>
      <Footer />
    </div>
  );
}
