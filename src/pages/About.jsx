// src/pages/About.jsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  BriefcaseBusiness,
  Brain,
  ShieldCheck,
  Users,
  Rocket,
  Globe,
} from "lucide-react";

export default function About() {

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* HERO */}
      <section className="bg-[#f8fafc] border-b border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-24">

          {/* Tag */}
          <div className="inline-flex items-center bg-[#ede9fe] text-[#5b4df5] px-4 py-2 rounded-full text-sm font-medium mb-8">

            About JobAI
          </div>

          {/* Heading */}
          <h1 className="text-[58px] leading-[68px] font-bold text-gray-900 max-w-5xl">

            Building Smarter Connections
            <br />

            Between Developers & Companies
          </h1>

          {/* Description */}
          <p className="mt-8 text-xl text-gray-600 leading-9 max-w-3xl">

            JobAI is a modern AI-powered hiring platform helping
            developers discover better opportunities and enabling
            companies to hire the right talent faster.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-12">

            <button className="bg-[#5b4df5] hover:bg-[#4f46e5] text-white px-8 py-4 rounded-xl font-semibold transition">
              Explore Jobs
            </button>

            <button className="border border-gray-300 hover:border-[#5b4df5] hover:text-[#5b4df5] px-8 py-4 rounded-xl font-semibold transition">
              Contact Team
            </button>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white py-20 border-b border-gray-100">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-10 text-center">

            <div>

              <h2 className="text-5xl font-bold text-[#5b4df5]">
                10K+
              </h2>

              <p className="text-gray-500 mt-3 text-lg">
                Active Jobs
              </p>
            </div>

            <div>

              <h2 className="text-5xl font-bold text-[#5b4df5]">
                500+
              </h2>

              <p className="text-gray-500 mt-3 text-lg">
                Hiring Companies
              </p>
            </div>

            <div>

              <h2 className="text-5xl font-bold text-[#5b4df5]">
                25K+
              </h2>

              <p className="text-gray-500 mt-3 text-lg">
                Developers
              </p>
            </div>

            <div>

              <h2 className="text-5xl font-bold text-[#5b4df5]">
                98%
              </h2>

              <p className="text-gray-500 mt-3 text-lg">
                Hiring Success
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="bg-[#f8fafc] py-24">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

          {/* Left */}
          <div>

            <div className="w-16 h-16 rounded-2xl bg-[#ede9fe] flex items-center justify-center text-[#5b4df5]">

              <Rocket size={30} />
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mt-8">

              Our Mission
            </h2>

            <p className="text-gray-600 leading-9 text-lg mt-6">

              We aim to simplify the hiring journey for developers
              and recruiters by using modern technologies and
              intelligent recommendations to create better career
              opportunities.
            </p>
          </div>

          {/* Right */}
          <div>

            <div className="w-16 h-16 rounded-2xl bg-[#ede9fe] flex items-center justify-center text-[#5b4df5]">

              <Globe size={30} />
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mt-8">

              Our Vision
            </h2>

            <p className="text-gray-600 leading-9 text-lg mt-6">

              Our vision is to become a trusted global hiring
              platform where companies and developers connect
              efficiently through AI-powered experiences.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white py-24 border-t border-gray-100">

        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="max-w-3xl mb-16">

            <h2 className="text-5xl font-bold text-gray-900">

              Why Developers Choose JobAI
            </h2>

            <p className="text-gray-500 mt-6 text-lg leading-8">

              We focus on building a smarter, faster,
              and more secure hiring experience.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Card */}
            <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition">

              <div className="w-14 h-14 rounded-2xl bg-[#ede9fe] flex items-center justify-center text-[#5b4df5]">

                <Brain size={28} />
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mt-6">
                AI Matching
              </h3>

              <p className="text-gray-500 leading-7 mt-4">
                Smart recommendations based on skills and experience.
              </p>
            </div>

            {/* Card */}
            <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition">

              <div className="w-14 h-14 rounded-2xl bg-[#ede9fe] flex items-center justify-center text-[#5b4df5]">

                <BriefcaseBusiness size={28} />
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mt-6">
                Top Companies
              </h3>

              <p className="text-gray-500 leading-7 mt-4">
                Connect with leading startups and global organizations.
              </p>
            </div>

            {/* Card */}
            <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition">

              <div className="w-14 h-14 rounded-2xl bg-[#ede9fe] flex items-center justify-center text-[#5b4df5]">

                <ShieldCheck size={28} />
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mt-6">
                Secure Platform
              </h3>

              <p className="text-gray-500 leading-7 mt-4">
                Protected authentication and secure applications.
              </p>
            </div>

            {/* Card */}
            <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition">

              <div className="w-14 h-14 rounded-2xl bg-[#ede9fe] flex items-center justify-center text-[#5b4df5]">

                <Users size={28} />
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mt-6">
                Community
              </h3>

              <p className="text-gray-500 leading-7 mt-4">
                Join thousands of developers growing their careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="bg-[#f8fafc] py-24 border-t border-gray-100">

        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="max-w-3xl">

            <h2 className="text-5xl font-bold text-gray-900">

              Technologies Used
            </h2>

            <p className="text-gray-500 mt-6 text-lg leading-8">

              Built using modern MERN stack technologies
              for scalable and high-performance applications.
            </p>
          </div>

          {/* Stack */}
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-5 mt-14">

            {[
              "React.js",
              "Tailwind CSS",
              "Node.js",
              "Express.js",
              "MongoDB",
              "JWT Auth",
            ].map((tech, index) => (

              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl py-7 text-center font-semibold text-gray-800 hover:border-[#5b4df5] hover:text-[#5b4df5] transition"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}