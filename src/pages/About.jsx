// src/pages/About.jsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      <section className="bg-[#f7f7ff] py-20">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h1 className="text-[64px] font-bold text-[#0f172a]">
            About JobAI
          </h1>

          <p className="mt-8 text-[22px] leading-[40px] text-[#475569]">
            JobAI is an AI-powered job portal designed to help
            students and professionals discover the best
            opportunities based on their skills and experience.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">

          <div>
            <h2 className="text-4xl font-bold text-[#0f172a] mb-6">
              Our Mission
            </h2>

            <p className="text-lg text-[#64748b] leading-8">
              We aim to simplify job searching using modern AI
              technologies and create better connections between
              recruiters and job seekers.
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-[#0f172a] mb-6">
              Technologies Used
            </h2>

            <ul className="space-y-4 text-lg text-[#64748b]">
              <li>⚡ React.js</li>
              <li>⚡ Tailwind CSS</li>
              <li>⚡ Node.js</li>
              <li>⚡ Express.js</li>
              <li>⚡ MongoDB</li>
              <li>⚡ JWT Authentication</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}