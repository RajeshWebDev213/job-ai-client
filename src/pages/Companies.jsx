// src/pages/Companies.jsx
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import googleLogo from "../assets/google.png";
import amazonLogo from "../assets/amazon.png";
import microsoftLogo from "../assets/microsoft.png";
import netflixLogo from "../assets/netflix.png";
import metaLogo from "../assets/meta.png";
import appleLogo from "../assets/apple.png";

import {
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const companies = [
  {
    name: "Google",
    logo: googleLogo,
    location: "Hyderabad, India",
    jobs: "120 Open Roles",
  },

  {
    name: "Amazon",
    logo: amazonLogo,
    location: "Bangalore, India",
    jobs: "90 Open Roles",
  },

  {
    name: "Microsoft",
    logo: microsoftLogo,
    location: "Chennai, India",
    jobs: "75 Open Roles",
  },

  {
    name: "Meta",
    logo: metaLogo,
    location: "Pune, India",
    jobs: "60 Open Roles",
  },

  {
    name: "Netflix",
    logo: netflixLogo,
    location: "Mumbai, India",
    jobs: "40 Open Roles",
  },

  {
    name: "Apple",
    logo: appleLogo,
    location: "Remote",
    jobs: "35 Open Roles",
  },
];




export default function Companies() {
const [search, setSearch] = useState("");
const filteredCompanies = companies.filter((company) =>
  company.name.toLowerCase().includes(search.toLowerCase())
);
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* HERO */}
      <section className="bg-white border-b border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-16">

          <div className="max-w-3xl">

            {/* Tag */}
            <div className="inline-flex items-center bg-[#f3f0ff] text-[#5b4df5] px-4 py-2 rounded-full text-sm font-medium mb-6">

              Trusted Companies
            </div>

            {/* Heading */}
            <h1 className="text-[52px] leading-[62px] font-bold text-gray-900">

              Discover Companies
              <br />

              Hiring Through JobAI
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg text-gray-600 leading-8 max-w-2xl">

              Explore opportunities from leading companies
              hiring developers, designers, and engineers.
            </p>
          </div>
        </div>
      </section>

      {/* COMPANIES */}
      <section className="bg-[#f8fafc] py-16">

        <div className="max-w-7xl mx-auto px-6">

          {/* Top */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">

            <div>

              <h2 className="text-3xl font-bold text-gray-900">
                Featured Companies
              </h2>

              <p className="text-gray-500 mt-2">
                Top organizations actively hiring
              </p>
            </div>

            {/* Search */}
            <input
  type="text"
  placeholder="Search companies"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="h-[52px] w-full md:w-[280px] border border-gray-200 rounded-xl px-5 outline-none bg-white"
/>
          </div>

          {/* Companies Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {filteredCompanies.map((company, index) => (

              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#5b4df5] hover:shadow-lg transition duration-300"
              >

                {/* Header */}
                <div className="flex items-center justify-between">

                  {/* Left */}
                  <div className="flex items-center gap-4">

                    {/* Logo */}
                    <div className="w-14 h-14 rounded-xl bg-[#f8fafc] border border-gray-200 flex items-center justify-center">

                      <img
                        src={company.logo}
                        alt={company.name}
                        className="w-8 h-8 object-contain"
                      />
                    </div>

                    {/* Info */}
                    <div>

                      <h3 className="text-xl font-semibold text-gray-900">
                        {company.name}
                      </h3>

                      <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">

                        <MapPin size={14} />

                        <span>{company.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#5b4df5] hover:text-white hover:border-[#5b4df5] transition">

                    <ArrowUpRight size={18} />
                  </button>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-100 my-6"></div>

                {/* Bottom */}
                <div className="flex items-center justify-between">

                  {/* Jobs */}
                  <div>

                    <p className="text-sm text-gray-500">
                      Open Positions
                    </p>

                    <h4 className="text-2xl font-bold text-gray-900 mt-1">
                      {company.jobs}
                    </h4>
                  </div>

                  {/* Button */}
                  <button className="bg-[#5b4df5] hover:bg-[#4f46e5] text-white px-5 py-2.5 rounded-xl text-sm font-medium transition">
                    View Jobs
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white py-20 border-t border-gray-100">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div>

              <h2 className="text-5xl font-bold text-[#5b4df5]">
                500+
              </h2>

              <p className="text-gray-500 mt-3">
                Companies
              </p>
            </div>

            <div>

              <h2 className="text-5xl font-bold text-[#5b4df5]">
                10K+
              </h2>

              <p className="text-gray-500 mt-3">
                Active Jobs
              </p>
            </div>

            <div>

              <h2 className="text-5xl font-bold text-[#5b4df5]">
                25K+
              </h2>

              <p className="text-gray-500 mt-3">
                Candidates
              </p>
            </div>

            <div>

              <h2 className="text-5xl font-bold text-[#5b4df5]">
                98%
              </h2>

              <p className="text-gray-500 mt-3">
                Hiring Success
              </p>
            </div>
          </div>
        </div>
      </section>
{filteredCompanies.length === 0 && (

  <div className="text-center py-20">

    <h2 className="text-3xl font-bold text-gray-900">
      No Companies Found
    </h2>

    <p className="text-gray-500 mt-3">
      Try searching another company name.
    </p>
  </div>
)}
      {/* Footer */}
      <Footer />
    </>
  );
}