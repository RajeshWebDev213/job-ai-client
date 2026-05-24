// src/pages/Jobs.jsx

import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JobCard from "../components/JobCard";

// Logos
import googleLogo from "../assets/google.png";
import amazonLogo from "../assets/amazon.png";
import microsoftLogo from "../assets/microsoft.png";
import netflixLogo from "../assets/netflix.png";
import metaLogo from "../assets/meta.png";

// Jobs Data
const jobs = [
  {
    _id: "1",
    title: "Frontend Developer",
    company: "Google",
    logo: googleLogo,
    type: "Full Time",
    location: "Hyderabad",
    salary: "10 LPA",
    experience: "1+ Years",
  },
  {
    _id: "2",
    title: "MERN Stack Developer",
    company: "Amazon",
    logo: amazonLogo,
    type: "Remote",
    location: "Bangalore",
    salary: "12 LPA",
    experience: "2+ Years",
  },
  {
    _id: "3",
    title: "Backend Developer",
    company: "Microsoft",
    logo: microsoftLogo,
    type: "Hybrid",
    location: "Chennai",
    salary: "15 LPA",
    experience: "2+ Years",
  },
  {
    _id: "4",
    title: "UI/UX Designer",
    company: "Netflix",
    logo: netflixLogo,
    type: "Full Time",
    location: "Mumbai",
    salary: "18 LPA",
    experience: "3+ Years",
  },
  {
    _id: "5",
    title: "Data Scientist",
    company: "Meta",
    logo: metaLogo,
    type: "Remote",
    location: "Pune",
    salary: "20 LPA",
    experience: "2+ Years",
  },
  {
    _id: "6",
    title: "React Developer Intern",
    company: "Google",
    logo: googleLogo,
    type: "Internship",
    location: "Delhi",
    salary: "6 LPA",
    experience: "Fresher",
  },
  {
    _id: "7",
    title: "Full Stack Developer",
    company: "Amazon",
    logo: amazonLogo,
    type: "Remote",
    location: "Work From Home",
    salary: "14 LPA",
    experience: "3+ Years",
  },
  {
    _id: "8",
    title: "Node.js Developer",
    company: "Microsoft",
    logo: microsoftLogo,
    type: "Remote",
    location: "Remote",
    salary: "16 LPA",
    experience: "2+ Years",
  },
  {
    _id: "9",
    title: "React Native Developer",
    company: "Meta",
    logo: metaLogo,
    type: "Remote",
    location: "Anywhere in India",
    salary: "17 LPA",
    experience: "2+ Years",
  },
];

export default function Jobs() {

  // States
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

  // Filter + Search Logic
  const filteredJobs = jobs.filter((job) => {

    // Filter by type
    const matchesFilter =
      filter === "All" ? true : job.type === filter;

    // Search by title/company
    const matchesSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase());

    // Search by location
    const matchesLocation =
      job.location.toLowerCase().includes(location.toLowerCase());

    return matchesFilter && matchesSearch && matchesLocation;
  });

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[#f7f7ff] py-20">

        <div className="max-w-7xl mx-auto px-6 text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#ede9fe] text-[#5b4df5] px-4 py-2 rounded-full text-sm font-medium mb-6">
            🚀 Discover Your Next Opportunity
          </div>

          {/* Heading */}
          <h1 className="text-[64px] leading-[74px] font-bold text-[#0f172a]">
            Explore Top Jobs
            <br />
            from Leading Companies
          </h1>

          {/* Description */}
          <p className="mt-8 text-[22px] leading-[40px] text-[#475569] max-w-3xl mx-auto">
            Browse thousands of opportunities tailored
            to your skills and career goals.
          </p>

          {/* Search Box */}
          <div className="mt-14 bg-white rounded-[28px] shadow-xl p-5 flex flex-col md:flex-row gap-4 border border-[#ececff] max-w-5xl mx-auto">

            {/* Search Input */}
            <input
              type="text"
              placeholder="Search jobs or companies..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 border border-[#e5e7eb] rounded-2xl px-5 py-4 outline-none text-lg"
            />

            {/* Location Input */}
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="flex-1 border border-[#e5e7eb] rounded-2xl px-5 py-4 outline-none text-lg"
            />

            {/* Search Button */}
            <button className="bg-[#5b4df5] hover:bg-[#4f46e5] text-white px-10 py-4 rounded-2xl text-lg font-semibold transition">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">

            <div>
              <h2 className="text-[42px] font-bold text-[#0f172a]">
                Available Jobs
              </h2>

              <p className="text-[#64748b] mt-3 text-lg">
                Showing {filteredJobs.length} available opportunities
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex gap-4 mt-6 md:mt-0">

              {/* All */}
              <button
                onClick={() => setFilter("All")}
                className={`px-6 py-3 rounded-2xl font-semibold transition ${
                  filter === "All"
                    ? "bg-[#5b4df5] text-white"
                    : "border border-[#d4d4d8] hover:border-[#5b4df5] hover:text-[#5b4df5]"
                }`}
              >
                All
              </button>

              {/* Full Time */}
              <button
                onClick={() => setFilter("Full Time")}
                className={`px-6 py-3 rounded-2xl font-semibold transition ${
                  filter === "Full Time"
                    ? "bg-[#5b4df5] text-white"
                    : "border border-[#d4d4d8] hover:border-[#5b4df5] hover:text-[#5b4df5]"
                }`}
              >
                Full Time
              </button>

              {/* Remote */}
              <button
                onClick={() => setFilter("Remote")}
                className={`px-6 py-3 rounded-2xl font-semibold transition ${
                  filter === "Remote"
                    ? "bg-[#5b4df5] text-white"
                    : "border border-[#d4d4d8] hover:border-[#5b4df5] hover:text-[#5b4df5]"
                }`}
              >
                Remote
              </button>
            </div>
          </div>

          {/* Job Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <JobCard key={job._id} job={job} />
              ))
            ) : (
              <div className="col-span-full text-center py-20">

                <h3 className="text-3xl font-bold text-slate-700">
                  No Jobs Found
                </h3>

                <p className="text-slate-500 mt-4">
                  Try searching with different keywords.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}